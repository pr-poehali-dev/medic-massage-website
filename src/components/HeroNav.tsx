import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { TG_URL, WA_URL, PHOTOS, RevealSection } from "@/components/shared";

export default function HeroNav() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "nav-scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-cormorant text-xl font-semibold tracking-wide" style={{ color: "var(--graphite)" }}>
            Дмитрий Хохлов
          </button>
          <div className="hidden md:flex items-center gap-8 font-golos text-sm" style={{ color: "var(--graphite-light)" }}>
            {[["services", "Услуги"], ["about", "Обо мне"], ["process", "Как работаем"], ["price", "Прайс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover-line hover:text-green transition-colors">{label}</button>
            ))}
          </div>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-golos font-medium transition-all hover:scale-105"
            style={{ backgroundColor: "var(--green)", color: "#fff" }}>
            Записаться
          </a>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "var(--graphite)" }}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4 font-golos text-base" style={{ backgroundColor: "var(--cream)" }}>
            {[["services", "Услуги"], ["about", "Обо мне"], ["process", "Как работаем"], ["price", "Прайс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left py-1 border-b" style={{ borderColor: "var(--beige-dark)", color: "var(--graphite)" }}>{label}</button>
            ))}
            <a href={WA_URL} target="_blank" rel="noreferrer" className="mt-2 text-center py-3 rounded-full font-medium" style={{ backgroundColor: "var(--green)", color: "#fff" }}>Записаться в WhatsApp</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(74,110,90,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto px-5 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealSection delay={0}>
              <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-6 px-3 py-1 rounded-full" style={{ backgroundColor: "var(--green-pale)", color: "var(--green)" }}>
                Медицинское образование · 8+ лет практики
              </span>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6" style={{ color: "var(--graphite)" }}>
                Медицинский<br />
                <em className="font-normal not-italic" style={{ color: "var(--green)" }}>массаж</em> и<br />
                реабилитация
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="font-golos text-lg leading-relaxed mb-3" style={{ color: "var(--graphite-light)" }}>
                Помогаю уменьшить боль, восстановить подвижность и вернуть телу ресурс.
              </p>
              <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "var(--warm-gray)" }}>
                Терапевтический, восстановительный и спортивный массаж, коррекция осанки, ЛФК, мануальные и миофасциальные техники. Приём в <strong style={{ color: "var(--graphite-light)" }}>Одинцово</strong> и <strong style={{ color: "var(--graphite-light)" }}>Москве</strong>.
              </p>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={TG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105 hover:opacity-90"
                  style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                  <Icon name="Send" size={18} />
                  Telegram-канал
                </a>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
                  style={{ borderColor: "var(--green)", color: "var(--green)", backgroundColor: "transparent" }}>
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-golos text-sm" style={{ backgroundColor: "var(--beige)", color: "var(--green)" }}>
                <Icon name="Tag" size={15} />
                <span>—20% на первое посещение</span>
              </div>
            </RevealSection>
          </div>
          <RevealSection delay={200} className="hidden md:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ backgroundColor: "var(--beige)" }}>
                <img
                  src={PHOTOS.process1}
                  alt="Дмитрий Хохлов — специалист по массажу"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-4 rounded-xl shadow-lg" style={{ backgroundColor: "#fff" }}>
                <p className="font-golos text-xs font-medium mb-1" style={{ color: "var(--warm-gray)" }}>Опыт работы</p>
                <p className="font-cormorant text-3xl font-semibold" style={{ color: "var(--graphite)" }}>8+ лет</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
