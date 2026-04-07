import { useState } from "react";
import Icon from "@/components/ui/icon";
import { TG_URL, WA_URL, PHOTOS, RevealSection } from "@/components/shared";

const BgPhoto = ({ src, opacity = 0.93, light = true }: { src: string; opacity?: number; light?: boolean }) => (
  <div className="absolute inset-0">
    <img src={src} alt="" className="w-full h-full object-cover object-center" />
    <div
      className="absolute inset-0"
      style={{ background: light ? `rgba(247,244,239,${opacity})` : `rgba(22,26,30,${opacity})` }}
    />
  </div>
);

function ContactForm() {
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Заявка с сайта\n\nИмя: ${name}\nПроблема: ${problem}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/79999415900?text=${encoded}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--green-pale)" }}>
          <Icon name="Check" size={32} style={{ color: "var(--green)" }} />
        </div>
        <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: "var(--graphite)" }}>Сообщение отправлено</h3>
        <p className="font-golos text-sm" style={{ color: "var(--warm-gray)" }}>Дмитрий ответит, сможет ли помочь</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="font-golos text-sm font-medium mb-1.5 block" style={{ color: "var(--graphite)" }}>Ваше имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Как к вам обращаться"
          className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all focus:ring-2"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--graphite)", ringColor: "var(--green)" } as React.CSSProperties}
        />
      </div>
      <div>
        <label className="font-golos text-sm font-medium mb-1.5 block" style={{ color: "var(--graphite)" }}>Опишите вашу проблему</label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
          rows={4}
          placeholder="Что беспокоит, как давно, что уже пробовали..."
          className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all focus:ring-2 resize-none"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--graphite)", ringColor: "var(--green)" } as React.CSSProperties}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
        style={{ backgroundColor: "var(--green)", color: "#fff" }}
      >
        <Icon name="Send" size={18} /> Отправить
      </button>
      <p className="font-golos text-xs text-center" style={{ color: "var(--warm-gray)" }}>
        Дмитрий ответит, сможет ли помочь
      </p>
    </form>
  );
}

export default function ConversionSections() {
  return (
    <>
      {/* PRICE + PROMO — Цена с перечёркнутой стоимостью */}
      <section id="price" className="relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgPrice} opacity={0.88} light={false} />
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-5 pt-24 pb-16">
            <RevealSection>
              <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green-light)" }}>Стоимость</span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "#f7f4ef" }}>Терапевтический массаж, 60 мин</h2>
              <p className="font-golos text-base mb-12" style={{ color: "rgba(247,244,239,0.6)" }}>Полноценный сеанс — основной формат работы</p>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="max-w-md mx-auto p-10 rounded-2xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="font-golos text-lg mb-2 line-through" style={{ color: "rgba(247,244,239,0.4)" }}>2 500 ₽</p>
                <p className="font-cormorant text-6xl md:text-7xl font-semibold mb-3" style={{ color: "#fff" }}>1 750 ₽</p>
                <span className="inline-block px-4 py-1.5 rounded-full font-golos text-sm font-medium mb-6" style={{ backgroundColor: "rgba(107,143,121,0.3)", color: "var(--green-light)" }}>
                  Скидка на первый визит
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: "var(--green)", color: "#fff" }}
                  >
                    <Icon name="MessageCircle" size={18} /> Записаться в WhatsApp
                  </a>
                  <button
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium border transition-all hover:scale-105"
                    style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}
                  >
                    <Icon name="FileText" size={18} /> Описать проблему
                  </button>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <p className="font-golos text-sm text-center mt-6" style={{ color: "rgba(247,244,239,0.4)" }}>
                Также доступны сеансы 30 мин и 90 мин — уточняйте при записи
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CONTACTS — Локация + контакты + форма */}
      <section id="contacts" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgContacts} opacity={0.95} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Контакты</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>Где принимаю</h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { city: "Одинцово", address: "ул. Чистяковой, 42", place: "Салон красоты «Мастер»" },
              { city: "Москва", address: "ул. Янковского, 1с2", place: "Салон красоты «Шёлк»" },
            ].map((loc, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(247,244,239,0.9)", backdropFilter: "blur(4px)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--green-pale)" }}>
                      <Icon name="MapPin" size={22} style={{ color: "var(--green)" }} />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl font-semibold mb-1" style={{ color: "var(--graphite)" }}>{loc.city}</h3>
                      <p className="font-golos text-sm mb-0.5" style={{ color: "var(--graphite-light)" }}>{loc.address}</p>
                      <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>{loc.place}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Способы связи */}
          <RevealSection delay={200}>
            <h3 className="font-cormorant text-2xl font-semibold mb-6" style={{ color: "var(--graphite)" }}>3 способа связаться</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <a href={WA_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-6 py-5 rounded-2xl font-golos font-medium transition-all hover:scale-105"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                <Icon name="MessageCircle" size={22} />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-xs opacity-75">Основной канал связи</p>
                </div>
              </a>
              <a href={TG_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-6 py-5 rounded-2xl font-golos font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: "var(--green)", color: "var(--green)", backgroundColor: "rgba(247,244,239,0.9)" }}>
                <Icon name="Send" size={22} />
                <div>
                  <p className="font-medium">Telegram</p>
                  <p className="text-xs" style={{ color: "var(--warm-gray)" }}>Канал с полезным</p>
                </div>
              </a>
              <button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 px-6 py-5 rounded-2xl font-golos font-medium border-2 transition-all hover:scale-105 text-left"
                style={{ borderColor: "var(--beige-dark)", color: "var(--graphite-light)", backgroundColor: "rgba(247,244,239,0.9)" }}>
                <Icon name="FileText" size={22} />
                <div>
                  <p className="font-medium">Форма на сайте</p>
                  <p className="text-xs" style={{ color: "var(--warm-gray)" }}>Опишите проблему</p>
                </div>
              </button>
            </div>
          </RevealSection>

          {/* Форма обратной связи */}
          <RevealSection delay={300}>
            <div id="contact-form" className="max-w-lg mx-auto p-8 rounded-2xl" style={{ backgroundColor: "rgba(247,244,239,0.95)", border: "1px solid var(--beige-dark)" }}>
              <h3 className="font-cormorant text-2xl font-semibold mb-2 text-center" style={{ color: "var(--graphite)" }}>Опишите вашу проблему</h3>
              <p className="font-golos text-sm text-center mb-6" style={{ color: "var(--warm-gray)" }}>Я отвечу, смогу ли помочь</p>
              <ContactForm />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgEducation} opacity={0.7} light={false} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <RevealSection>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "#f7f4ef" }}>
              Готовы начать?
            </h2>
            <p className="font-golos text-base mb-8" style={{ color: "rgba(247,244,239,0.7)" }}>
              Напишите — я подскажу, какой подход подойдёт именно вам
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
                style={{ backgroundColor: "#fff", color: "var(--green)" }}>
                <Icon name="MessageCircle" size={18} /> WhatsApp
              </a>
              <a href={TG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
                <Icon name="Send" size={18} /> Telegram
              </a>
            </div>
          </RevealSection>

          {/* Футер */}
          <RevealSection delay={200}>
            <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
              <p className="font-cormorant text-xl font-light" style={{ color: "rgba(247,244,239,0.7)" }}>Прикосновение</p>
              <p className="font-golos text-xs" style={{ color: "rgba(247,244,239,0.4)" }}>Терапевтический массаж и восстановление · Одинцово и Москва</p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
