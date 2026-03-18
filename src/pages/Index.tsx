import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const TG_URL = "https://t.me/fuga_massage";
const WA_URL = "https://wa.me/79999415900";
const VK_URL = "https://vk.com/fuga.massage";

const CDN = "https://cdn.poehali.dev/projects/c0dec346-cf40-47da-b6b8-4fdb33a3e01e/bucket/files/massage";

const PHOTOS = {
  // Процесс работы
  process1: `${CDN}/process/DSC00831.JPEG`,
  process2: `${CDN}/process/DSC00842.JPEG`,
  process3: `${CDN}/process/DSC00881.JPEG`,
  process4: `${CDN}/process/DSC00890.JPEG`,
  process5: `${CDN}/process/IMG_0616.jpg`,
  process6: `${CDN}/process/IMG_0617.jpg`,
  // Кейсы до и после
  case1: `${CDN}/cases/IMG_0530.jpg`,
  case2: `${CDN}/cases/IMG_0626.jpg`,
  case3: `${CDN}/cases/IMG_4395.JPG`,
  case4: `${CDN}/cases/IMG_4396.JPG`,
  case5: `${CDN}/cases/IMG_4607.JPG`,
  // Отзывы
  review1: `${CDN}/reviews/IMG_0610.jpg`,
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
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

const services = [
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

const symptoms = [
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

const trustPoints = [
  { icon: "BookOpen", title: "Постоянно учусь", desc: "Регулярно повышаю квалификацию, прохожу курсы и изучаю новые методики. Применяю только то, что подтверждено практикой." },
  { icon: "Search", title: "Ищу причину, а не симптом", desc: "Перед каждым сеансом — опрос, осмотр и тестирование. Подбираю метод под конкретный запрос, а не по шаблону." },
  { icon: "MessageSquare", title: "Объясняю понятным языком", desc: "Рассказываю, что происходит в теле, почему возникла проблема и что поможет. Без медицинского жаргона." },
  { icon: "Shield", title: "Работаю аккуратно", desc: "Принцип «не навредить» — основа моего подхода. Никакого давления и форсирования. Только то, что безопасно и уместно." },
];

const steps = [
  { num: "01", title: "Написали в Telegram или WhatsApp", desc: "Коротко описали запрос — что беспокоит, как давно, что уже пробовали." },
  { num: "02", title: "Согласовали время", desc: "Выбрали удобный день и место: Одинцово или Москва." },
  { num: "03", title: "Осмотр и тестирование", desc: "На первом сеансе — опрос, осмотр, проверка подвижности. Вместе разбираемся в причине." },
  { num: "04", title: "Подобрали формат работы", desc: "Один сеанс или курс, метод и длительность — всё обсуждаем и согласовываем." },
  { num: "05", title: "Работа и рекомендации", desc: "После сеанса даю рекомендации — что делать дальше, как поддерживать результат." },
];

const effects = [
  { icon: "TrendingDown", label: "Меньше боли и напряжения" },
  { icon: "Moon", label: "Лучше сон" },
  { icon: "Move", label: "Больше подвижности" },
  { icon: "Battery", label: "Больше энергии и ресурса" },
  { icon: "Smile", label: "Спокойствие в теле" },
  { icon: "ArrowUp", label: "Лучше осанка" },
];

const prices = [
  { duration: "30 минут", price: "3 000 ₽", desc: "Локальная работа с одной зоной" },
  { duration: "60 минут", price: "5 000 ₽", desc: "Полноценный сеанс, основной формат", popular: true },
  { duration: "90 минут", price: "7 500 ₽", desc: "Расширенная работа, курсовой формат" },
];

export default function Index() {
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
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--graphite)" }}>

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

      {/* SYMPTOMS */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-4" style={{ color: "var(--graphite)" }}>
              С какими запросами обращаются
            </h2>
            <p className="font-golos text-center mb-12" style={{ color: "var(--warm-gray)" }}>Если что-то из этого узнали — значит, мы можем помочь</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {symptoms.map((s, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="flex flex-col items-center text-center gap-3 p-5 rounded-xl transition-all hover:scale-105" style={{ backgroundColor: "var(--cream)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--green-pale)" }}>
                    <Icon name={s.icon} size={20} style={{ color: "var(--green)" }} />
                  </div>
                  <p className="font-golos text-sm leading-snug" style={{ color: "var(--graphite)" }}>{s.text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Направления работы</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              Услуги
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <RevealSection key={i} delay={(i % 3) * 100}>
                <div className="relative p-6 rounded-2xl border h-full flex flex-col gap-4 transition-all hover:shadow-md group" style={{ borderColor: "var(--beige-dark)", backgroundColor: "var(--cream)" }}>
                  {s.tag && (
                    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-golos font-medium" style={{ backgroundColor: "var(--green-pale)", color: "var(--green)" }}>{s.tag}</span>
                  )}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--beige)" }}>
                    <Icon name={s.icon} size={20} style={{ color: "var(--green)" }} />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "var(--graphite)" }}>{s.title}</h3>
                  <p className="font-golos text-sm leading-relaxed flex-1" style={{ color: "var(--graphite-light)" }}>{s.desc}</p>
                  <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-golos text-sm font-medium transition-colors hover-line" style={{ color: "var(--green)" }}>
                    Записаться <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--beige-dark)" }}>
                  <img
                    src={PHOTOS.process4}
                    alt="Дмитрий Хохлов за работой"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 grid grid-cols-2 gap-3">
                  <div className="px-4 py-3 rounded-xl text-center shadow-md" style={{ backgroundColor: "#fff" }}>
                    <p className="font-cormorant text-3xl font-semibold" style={{ color: "var(--graphite)" }}>8+</p>
                    <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>лет опыта</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl text-center shadow-md" style={{ backgroundColor: "#fff" }}>
                    <p className="font-cormorant text-3xl font-semibold" style={{ color: "var(--graphite)" }}>9+</p>
                    <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>методик</p>
                  </div>
                </div>
              </div>
            </RevealSection>
            <div>
              <RevealSection delay={100}>
                <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Обо мне</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" style={{ color: "var(--graphite)" }}>
                  Дмитрий Хохлов
                </h2>
              </RevealSection>
              <RevealSection delay={150}>
                <p className="font-golos text-base leading-relaxed mb-5" style={{ color: "var(--graphite-light)" }}>
                  Специалист по медицинскому массажу и реабилитации с медицинским образованием и более чем 8 годами практики. Работаю с хронической болью, нарушением осанки, мышечными дисбалансами и последствиями травм.
                </p>
                <p className="font-golos text-base leading-relaxed mb-5" style={{ color: "var(--graphite-light)" }}>
                  Каждый приём начинаю с опроса, осмотра и тестирования — сначала понимаю причину, потом подбираю метод. Мой принцип: не навредить. Работаю аккуратно, вдумчиво и только теми техниками, которые уместны в конкретной ситуации.
                </p>
                <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "var(--graphite-light)" }}>
                  Постоянно учусь и повышаю квалификацию. Работаю в Одинцово и Москве.
                </p>
              </RevealSection>
              <RevealSection delay={200}>
                <div className="flex flex-wrap gap-2">
                  {["Медицинское образование", "ЛФК и реабилитация", "Мануальные техники", "Миофасциальные техники", "Кинезиотерапия"].map((tag) => (
                    <span key={tag} className="font-golos text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--graphite-light)" }}>{tag}</span>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="why" className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Почему доверяют</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              Подход к работе
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6">
            {trustPoints.map((t, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "var(--beige)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--green-pale)" }}>
                    <Icon name={t.icon} size={22} style={{ color: "var(--green)" }} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: "var(--graphite)" }}>{t.title}</h3>
                    <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--graphite-light)" }}>{t.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Как проходит работа</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              От первого сообщения до результата
            </h2>
          </RevealSection>
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="flex gap-6 md:gap-10 items-start py-7 border-b last:border-0" style={{ borderColor: "var(--beige-dark)" }}>
                  <span className="font-cormorant text-4xl font-light flex-shrink-0 w-16 pt-1" style={{ color: "var(--green)" }}>{s.num}</span>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: "var(--graphite)" }}>{s.title}</h3>
                    <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--graphite-light)" }}>{s.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <p className="font-golos text-xs font-medium tracking-widest uppercase mb-6 text-center" style={{ color: "var(--warm-gray)" }}>Из рабочего процесса</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[PHOTOS.process2, PHOTOS.process3, PHOTOS.process5, PHOTOS.process6, PHOTOS.case2, PHOTOS.case5].map((src, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className={`rounded-xl overflow-hidden ${i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square"}`} style={{ backgroundColor: "var(--beige)" }}>
                  <img src={src} alt={`Процесс работы ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-4" style={{ color: "var(--graphite)" }}>
              Что изменится после работы
            </h2>
            <p className="font-golos text-center mb-14" style={{ color: "var(--warm-gray)" }}>Реальные эффекты, которые замечают клиенты</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {effects.map((e, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-4 py-10 px-6 rounded-2xl transition-all hover:shadow-sm" style={{ backgroundColor: "var(--beige)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--green-pale)" }}>
                    <Icon name={e.icon} size={26} style={{ color: "var(--green)" }} />
                  </div>
                  <p className="font-cormorant text-xl font-medium" style={{ color: "var(--graphite)" }}>{e.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT BLOCK */}
      <section className="py-20" style={{ backgroundColor: "var(--graphite)" }}>
        <div className="max-w-4xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-6" style={{ color: "var(--green-light)" }}>Экспертный блок</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8" style={{ color: "#f7f4ef" }}>
              Чем спортивный массаж<br className="hidden md:block" /> отличается от терапевтического?
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6">
            <RevealSection delay={100}>
              <div className="p-6 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Zap" size={20} style={{ color: "var(--green-light)" }} />
                  <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "#f7f4ef" }}>Спортивный массаж</h3>
                </div>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "rgba(247,244,239,0.7)" }}>
                  Направлен на работу со здоровым телом: ускоряет восстановление между тренировками, снимает мышечную усталость, улучшает кровоток. Применяется до, во время или после физических нагрузок. Интенсивнее по воздействию.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="p-6 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Heart" size={20} style={{ color: "var(--green-light)" }} />
                  <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "#f7f4ef" }}>Терапевтический массаж</h3>
                </div>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "rgba(247,244,239,0.7)" }}>
                  Работает с конкретными жалобами и болью. Глубже анализирует причину: осматривает, тестирует, выбирает методику. Подходит при хронических болях, нарушении осанки, мышечных дисбалансах. Мягче, точнее, системнее.
                </p>
              </div>
            </RevealSection>
          </div>
          <RevealSection delay={300}>
            <p className="font-golos text-sm mt-8 text-center" style={{ color: "rgba(247,244,239,0.5)" }}>
              Не уверены, какой формат подойдёт? Напишите — подберём вместе.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* WHEN TO BOOK */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-4xl mx-auto px-5 text-center">
          <RevealSection>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8" style={{ color: "var(--graphite)" }}>
              Когда пора записаться?
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
            {[
              "Боль в спине, шее или пояснице не проходит больше 2 недель",
              "Чувствуете скованность и зажимы — особенно по утрам",
              "Плохо спите или быстро устаёте без причины",
              "После тренировки тело долго не восстанавливается",
              "Была травма или операция, и хочется вернуть подвижность",
              "Сидите весь день за компьютером и чувствуете усталость в теле",
            ].map((text, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "var(--cream)" }}>
                  <Icon name="CheckCircle" size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--graphite-light)" }}>{text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={400}>
            <a href={TG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-golos font-medium transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: "var(--green)", color: "#fff" }}>
              <Icon name="Send" size={18} />
              Перейти в Telegram-канал
            </a>
          </RevealSection>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <RevealSection>
            <div className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--green) 0%, #3a5a48 100%)" }}>
              <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
              <span className="inline-block font-cormorant text-8xl font-light mb-4" style={{ color: "rgba(255,255,255,0.15)" }}>-20%</span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "#fff" }}>
                Скидка на первый приём
              </h2>
              <p className="font-golos text-base mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                Запишитесь на первый сеанс со скидкой 20%. Просто напишите в WhatsApp или Telegram.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={TG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: "#fff", color: "var(--green)" }}>
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
                  style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-4xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Стоимость</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>Прайс</h2>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-5">
            {prices.map((p, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className={`p-8 rounded-2xl text-center relative transition-all hover:shadow-md ${p.popular ? "ring-2" : ""}`}
                  style={{
                    backgroundColor: p.popular ? "var(--green)" : "var(--cream)",
                    ringColor: p.popular ? "var(--green)" : "transparent"
                  }}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-golos font-medium" style={{ backgroundColor: "var(--graphite)", color: "#fff" }}>
                      Основной формат
                    </span>
                  )}
                  <p className="font-golos text-sm mb-2" style={{ color: p.popular ? "rgba(255,255,255,0.7)" : "var(--warm-gray)" }}>{p.duration}</p>
                  <p className="font-cormorant text-4xl font-semibold mb-3" style={{ color: p.popular ? "#fff" : "var(--graphite)" }}>{p.price}</p>
                  <p className="font-golos text-sm" style={{ color: p.popular ? "rgba(255,255,255,0.8)" : "var(--graphite-light)" }}>{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={300}>
            <p className="font-golos text-sm text-center mt-6" style={{ color: "var(--warm-gray)" }}>
              * Скидка —20% на первый сеанс. Уточняйте актуальные цены при записи.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* CASE */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>История клиента</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              «Не мог нормально спать из-за шеи»
            </h2>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-5">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--beige)" }}>
                  <p className="font-golos text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--warm-gray)" }}>Ситуация</p>
                  <p className="font-golos text-base leading-relaxed" style={{ color: "var(--graphite-light)" }}>
                    Мужчина, 38 лет. Сидячая работа, долгое время беспокоила шейно-воротниковая зона — напряжение, ощущение «каски» на голове. Из-за этого сложно засыпать, часто просыпается ночью.
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--beige)" }}>
                  <p className="font-golos text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--warm-gray)" }}>Что сделали</p>
                  <p className="font-golos text-base leading-relaxed" style={{ color: "var(--graphite-light)" }}>
                    На первом приёме разобрались в причине: мышечные блоки в шее и грудном отделе, нарушенный баланс нагрузки из-за позы за компьютером. Курс из 5 сеансов — миофасциальный массаж, работа с грудным отделом, рекомендации по позиции за рабочим местом.
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--green-pale)" }}>
                  <p className="font-golos text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Результат</p>
                  <p className="font-golos text-base leading-relaxed" style={{ color: "var(--graphite-light)" }}>
                    После 3-го сеанса начал нормально спать. К концу курса напряжение в шее ушло, «каска» прошла. Сейчас приходит раз в месяц для поддержания результата.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--beige)" }}>
                  <img src={PHOTOS.case3} alt="До и после — результат работы" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "var(--beige)" }}>
                  <p className="font-cormorant text-4xl font-light mb-1" style={{ color: "var(--green)" }}>5</p>
                  <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>сеансов в курсе</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Контакты</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>Где принимаю</h2>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { city: "Одинцово", address: "ул. Чистяковой, 42", place: "Салон красоты «Мастер»", icon: "MapPin" },
              { city: "Москва", address: "ул. Янковского, 1с2", place: "Салон красоты «Шёлк»", icon: "MapPin" },
            ].map((loc, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--cream)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--green-pale)" }}>
                      <Icon name="MapPin" size={22} style={{ color: "var(--green)" }} />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl font-semibold mb-1" style={{ color: "var(--graphite)" }}>{loc.city}</h3>
                      <p className="font-golos text-base mb-1" style={{ color: "var(--graphite-light)" }}>{loc.address}</p>
                      <p className="font-golos text-sm" style={{ color: "var(--warm-gray)" }}>{loc.place}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={200}>
            <div className="grid md:grid-cols-3 gap-4">
              <a href={TG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                <Icon name="Send" size={22} />
                <div>
                  <p className="font-golos text-xs opacity-70">Telegram-канал</p>
                  <p className="font-golos font-medium">@fuga_massage</p>
                </div>
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cream)", color: "var(--graphite)" }}>
                <Icon name="MessageCircle" size={22} style={{ color: "var(--green)" }} />
                <div>
                  <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>WhatsApp</p>
                  <p className="font-golos font-medium">+7 999 941-59-00</p>
                </div>
              </a>
              <a href={VK_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cream)", color: "var(--graphite)" }}>
                <Icon name="Users" size={22} style={{ color: "var(--green)" }} />
                <div>
                  <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>ВКонтакте</p>
                  <p className="font-golos font-medium">fuga.massage</p>
                </div>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <RevealSection>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6" style={{ color: "var(--graphite)" }}>
              Готовы восстановиться?
            </h2>
            <p className="font-golos text-lg mb-10" style={{ color: "var(--warm-gray)" }}>
              Напишите — разберёмся в запросе, подберём удобное время и формат.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={TG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full font-golos font-medium text-base transition-all hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                <Icon name="Send" size={20} />
                Перейти в Telegram-канал
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full font-golos font-medium text-base border-2 transition-all hover:scale-105"
                style={{ borderColor: "var(--green)", color: "var(--green)" }}>
                <Icon name="MessageCircle" size={20} />
                Записаться в WhatsApp
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ borderColor: "var(--beige-dark)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg" style={{ color: "var(--graphite)" }}>Дмитрий Хохлов</p>
          <p className="font-golos text-sm" style={{ color: "var(--warm-gray)" }}>Медицинский массаж и реабилитация · Одинцово и Москва</p>
          <div className="flex items-center gap-4">
            <a href={TG_URL} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Icon name="Send" size={18} style={{ color: "var(--warm-gray)" }} />
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Icon name="MessageCircle" size={18} style={{ color: "var(--warm-gray)" }} />
            </a>
            <a href={VK_URL} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Icon name="Users" size={18} style={{ color: "var(--warm-gray)" }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}