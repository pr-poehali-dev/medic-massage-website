"""
Скачивает фото с публичного Яндекс Диска и загружает их в S3.
Возвращает CDN-ссылки на загруженные фото.
"""

import os
import json
import boto3
import urllib.request
import urllib.parse


def get_yadisk_files(public_key: str, path: str = "/", limit: int = 30) -> list:
    """Получить список файлов из публичной папки Яндекс Диска"""
    encoded_key = urllib.parse.quote(public_key, safe="")
    encoded_path = urllib.parse.quote(path, safe="")
    url = f"https://cloud-api.yandex.net/v1/disk/public/resources?public_key={encoded_key}&path={encoded_path}&limit={limit}&preview_size=L"

    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode())
    
    items = data.get("_embedded", {}).get("items", [])
    return [item for item in items if item.get("type") == "file" and item.get("media_type") == "image"]


def download_file(url: str) -> bytes:
    """Скачать файл по URL"""
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read()


def handler(event: dict, context) -> dict:
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    try:
        PUBLIC_KEY = "https://disk.yandex.ru/d/iF680p4_u2n70g"
        AWS_KEY = os.environ["AWS_ACCESS_KEY_ID"]
        AWS_SECRET = os.environ["AWS_SECRET_ACCESS_KEY"]

        s3 = boto3.client(
            "s3",
            endpoint_url="https://bucket.poehali.dev",
            aws_access_key_id=AWS_KEY,
            aws_secret_access_key=AWS_SECRET,
        )

        CDN_BASE = f"https://cdn.poehali.dev/projects/{AWS_KEY}/bucket"

        folders = [
            ("/Процесс работы", "process"),
            ("/Кейсы до и после", "cases"),
            ("/Отзывы", "reviews"),
        ]

        result = {}

        for folder_path, folder_key in folders:
            files = get_yadisk_files(PUBLIC_KEY, folder_path, limit=6)
            uploaded = []

            for f in files:
                filename = f["name"]
                preview_url = f.get("preview", "")
                if not preview_url:
                    continue

                try:
                    img_data = download_file(preview_url)
                    s3_key = f"massage/{folder_key}/{filename}"
                    s3.put_object(
                        Bucket="files",
                        Key=s3_key,
                        Body=img_data,
                        ContentType="image/jpeg",
                    )
                    cdn_url = f"{CDN_BASE}/files/{s3_key}"
                    uploaded.append({"name": filename, "url": cdn_url})
                except Exception as e:
                    uploaded.append({"name": filename, "error": str(e)})

            result[folder_key] = uploaded

        return {
            "statusCode": 200,
            "headers": cors,
            "body": json.dumps({"ok": True, "photos": result}, ensure_ascii=False),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors,
            "body": json.dumps({"ok": False, "error": str(e)}),
        }
