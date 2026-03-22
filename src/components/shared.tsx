import { useEffect, useRef } from "react";

export const TG_URL = "https://t.me/fuga_massage";
export const WA_URL = "https://wa.me/79999415900";
export const VK_URL = "https://vk.com/fuga.massage";

const CDN = "https://cdn.poehali.dev/projects/c0dec346-cf40-47da-b6b8-4fdb33a3e01e/bucket/files/massage";

export const PHOTOS = {
  // Баннер №1 — Дмитрий в кресле (тёмная форма)
  process1: `https://cdn.poehali.dev/files/379f976c-5cd7-4b0f-bb39-bb9eb571d183.jpg`,
  // Обо мне №2 — Дмитрий в белой футболке
  about: `https://cdn.poehali.dev/files/b848d6a9-cf63-465e-a6c8-6e3c10d57f80.jpg`,
  // Процесс №3 — массаж (фон секции)
  processWork: `https://cdn.poehali.dev/files/fc3e7d24-4362-4ca6-b0bf-fa2b3c15411a.JPG`,
  // Дипломы №4,5,6,7
  cert1: `https://cdn.poehali.dev/files/3ea45866-fe03-4038-a955-148cee45b7a2.png`,
  cert2: `https://cdn.poehali.dev/files/5373fb3c-a6f8-48e9-b99d-6db86b0ba94c.png`,
  cert3: `https://cdn.poehali.dev/files/892f252e-3957-4f1c-b756-a99b1e58b6d7.png`,
  cert4: `https://cdn.poehali.dev/files/7ec4be06-e48a-4213-b657-4378aec9e0d6.png`,
  // Фоны для секций (№1-4 из последнего запроса)
  bg1: `https://cdn.poehali.dev/files/379f976c-5cd7-4b0f-bb39-bb9eb571d183.jpg`,
  bg2: `https://cdn.poehali.dev/files/b848d6a9-cf63-465e-a6c8-6e3c10d57f80.jpg`,
  bg3: `${CDN}/process/DSC00842.JPEG`,
  bg4: `${CDN}/process/DSC00881.JPEG`,
  // Фото для кейса (№5)
  caseMain: `${CDN}/cases/IMG_4607.JPG`,
  // Оригинальные фото процесса
  process2: `${CDN}/process/DSC00842.JPEG`,
  process3: `${CDN}/process/DSC00881.JPEG`,
  process4: `${CDN}/process/DSC00890.JPEG`,
  process5: `${CDN}/process/IMG_0616.jpg`,
  process6: `${CDN}/process/IMG_0617.jpg`,
  case1: `${CDN}/cases/IMG_0530.jpg`,
  case2: `${CDN}/cases/IMG_0626.jpg`,
  case3: `${CDN}/cases/IMG_4395.JPG`,
  case4: `${CDN}/cases/IMG_4396.JPG`,
  case5: `${CDN}/cases/IMG_4607.JPG`,
  review1: `${CDN}/reviews/IMG_0610.jpg`,
};

export const services = [
  { icon: "Heart", title: "Терапевтический массаж", desc: "Для тех, кто устал от боли в спине, шее или пояснице. Работаю с мышечным напряжением, зажимами и хронической болью — не просто снимаю симптом, а ищу причину.", tag: "Самый популярный" },
  { icon: "RefreshCw", title: "Восстановительный массаж", desc: "Подходит после нагрузок, болезней, операций или долгого периода стресса. Помогает телу восстановить ресурс и вернуть нормальный тонус.", tag: "" },
  { icon: "Zap", title: "Спортивный массаж", desc: "Для спортсменов и активных людей: улучшает восстановление, снижает риск травм, убирает мышечные блоки после интенсивных тренировок.", tag: "" },
  { icon: "Layers", title: "Миофасциальный массаж", desc: "Работа с фасциями — соединительной тканью, которая окутывает все мышцы. Снимает глубокие ограничения подвижности и хронические зажимы.", tag: "" },
  { icon: "AlignCenter", title: "Коррекция осанки", desc: "Анализирую положение тела, нахожу дисбалансы и работаю с ними. Результат — меньше боли, правильное положение, лучшее самочувствие.", tag: "" },
  { icon: "Hand", title: "Мануальная терапия", desc: "Мягкие техники работы с суставами и позвоночником. Восстанавливаю подвижность там, где она ограничена.", tag: "" },
  { icon: "Circle", title: "Висцеральная терапия", desc: "Работа с внутренними органами через мягкое воздействие на брюшную полость. Помогает при нарушениях пищеварения, напряжении в животе.", tag: "" },
  { icon: "Activity", title: "Кинезиотерапия и ЛФК", desc: "Лечебная физкультура и движение как часть реабилитации. Не просто массаж — учу тело двигаться правильно.", tag: "" },
  { icon: "Sparkles", title: "Эстетическая коррекция", desc: "Работа с лицом и телом: контур, тонус, мимические зажимы. Техники, которые дают видимый результат без инъекций.", tag: "" },
];

export const symptoms = [
  { icon: "AlertCircle", text: "Боли в спине, шее или пояснице" },
  { icon: "Wind", text: "Стресс и хроническое напряжение" },
  { icon: "Moon", text: "Плохой сон и усталость" },
  { icon: "Lock", text: "Скованность и зажимы в теле" },
  { icon: "TrendingDown", text: "Снижение подвижности суставов" },
  { icon: "Dumbbell", text: "Восстановление после тренировок" },
  { icon: "Bandage", text: "Последствия травм или операций" },
  { icon: "User", text: "Нарушение осанки" },
  { icon: "Baby", text: "Восстановление после родов" },
  { icon: "Monitor", text: "Сидячая работа и офисный синдром" },
];

export const trustPoints = [
  { icon: "BookOpen", title: "Постоянно учусь", desc: "Регулярно повышаю квалификацию, прохожу курсы и изучаю новые методики. Применяю только то, что подтверждено практикой." },
  { icon: "Search", title: "Ищу причину, а не симптом", desc: "Перед каждым сеансом — опрос, осмотр и тестирование. Подбираю метод под конкретный запрос, а не по шаблону." },
  { icon: "MessageSquare", title: "Объясняю понятным языком", desc: "Рассказываю, что происходит в теле, почему возникла проблема и что поможет. Без медицинского жаргона." },
  { icon: "Shield", title: "Работаю аккуратно", desc: "Принцип «не навредить» — основа моего подхода. Никакого давления и форсирования. Только то, что безопасно и уместно." },
];

export const steps = [
  { num: "01", title: "Написали в Telegram или WhatsApp", desc: "Коротко описали запрос — что беспокоит, как давно, что уже пробовали." },
  { num: "02", title: "Согласовали время", desc: "Выбрали удобный день и место: Одинцово или Москва." },
  { num: "03", title: "Осмотр и тестирование", desc: "На первом сеансе — опрос, осмотр, проверка подвижности. Вместе разбираемся в причине." },
  { num: "04", title: "Подобрали формат работы", desc: "Один сеанс или курс, метод и длительность — всё обсуждаем и согласовываем." },
  { num: "05", title: "Работа и рекомендации", desc: "После сеанса даю рекомендации — что делать дальше, как поддерживать результат." },
];

export const effects = [
  { icon: "TrendingDown", label: "Меньше боли и напряжения" },
  { icon: "Moon", label: "Лучше сон" },
  { icon: "Move", label: "Больше подвижности" },
  { icon: "Battery", label: "Больше энергии и ресурса" },
  { icon: "Smile", label: "Спокойствие в теле" },
  { icon: "ArrowUp", label: "Лучше осанка" },
];

export const prices = [
  { duration: "30 минут", price: "3 000 ₽", desc: "Локальная работа с одной зоной" },
  { duration: "60 минут", price: "5 000 ₽", desc: "Полноценный сеанс, основной формат", popular: true },
  { duration: "90 минут", price: "7 500 ₽", desc: "Расширенная работа, курсовой формат" },
];

export function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}