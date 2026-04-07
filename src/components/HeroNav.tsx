import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { WA_URL, PHOTOS, LOGO_URL, RevealSection } from "@/components/shared";

const NAV_LINKS = [
  ["problems", "Проблемы"],
  ["services", "Направления"],
  ["about", "Обо мне"],
  ["reviews", "Отзывы"],
  ["price", "Цена"],
  ["contacts", "Контакты"],
];

export default function HeroNav() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "nav-scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img src={LOGO_URL} alt="Прикосновение" className="h-12 w-12 rounded-full object-cover" />
            <span
              className="font-cormorant text-xl font-semibold tracking-wide"
              style={{ color: navScrolled ? "var(--graphite)" : "#fff" }}
            >
              Прикосновение
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-5 font-golos text-sm">
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover-line transition-colors whitespace-nowrap"
                style={{ color: navScrolled ? "var(--graphite-light)" : "rgba(255,255,255,0.85)" }}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-golos font-medium transition-all hover:scale-105 flex-shrink-0"
            style={{ backgroundColor: "var(--green)", color: "#fff" }}
          >
            Записаться
          </a>

          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: navScrolled ? "var(--graphite)" : "#fff" }}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div
            className="lg:hidden px-5 pb-6 flex flex-col gap-0 font-golos text-base border-t"
            style={{ backgroundColor: "var(--cream)", borderColor: "var(--beige-dark)" }}
          >
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left py-3 border-b font-golos text-sm"
                style={{ borderColor: "var(--beige-dark)", color: "var(--graphite)" }}
              >
                {label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}
              >
                <Icon name="MessageCircle" size={16} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.hero}
            alt="Дмитрий Хохлов — терапевтический массаж"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(22,26,30,0.97) 0%, rgba(22,26,30,0.8) 35%, rgba(22,26,30,0.4) 65%, rgba(22,26,30,0.3) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-16 md:pb-24">
          <RevealSection delay={0}>
            <span
              className="inline-flex items-center gap-2 text-xs font-golos tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--green-light)", display: "inline-block" }} />
              Медицинское образование · 8+ лет практики
            </span>
          </RevealSection>

          <RevealSection delay={100}>
            <h1
              className="font-cormorant leading-[1.08] mb-6 font-medium"
              style={{ color: "#fff", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Терапевтический массаж<br />
              <em className="not-italic font-medium" style={{ color: "var(--green-light)" }}>и восстановление</em>
            </h1>
          </RevealSection>

          <RevealSection delay={180}>
            <p className="font-golos text-base md:text-lg leading-relaxed mb-2 max-w-xl" style={{ color: "rgba(255,255,255,0.82)" }}>
              Помогаю уменьшить боль, восстановить подвижность и вернуть телу ресурс.
            </p>
            <p className="font-golos text-sm md:text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
              Терапевтический, восстановительный, спортивный массаж, коррекция осанки, ЛФК,
              мануальные и миофасциальные техники. Приём в <strong style={{ color: "rgba(255,255,255,0.85)" }}>Одинцово</strong> и <strong style={{ color: "rgba(255,255,255,0.85)" }}>Москве</strong>.
            </p>
          </RevealSection>

          <RevealSection delay={260}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}
              >
                <Icon name="MessageCircle" size={18} /> Записаться в WhatsApp
              </a>
              <button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)" }}
              >
                <Icon name="FileText" size={18} /> Описать проблему
              </button>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-golos text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <Icon name="Tag" size={14} /> —20% на первый визит
              </span>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { num: "8+", label: "лет опыта" },
                { num: "2", label: "локации" },
              ].map((s) => (
                <div key={s.num}>
                  <p className="font-cormorant text-3xl font-semibold leading-none" style={{ color: "#fff" }}>{s.num}</p>
                  <p className="font-golos text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }}
          />
        </div>
      </section>
    </>
  );
}