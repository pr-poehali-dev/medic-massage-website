import Icon from "@/components/ui/icon";
import {
  WA_URL, PHOTOS,
  services, problems, effects,
  RevealSection,
} from "@/components/shared";

const BgPhoto = ({ src, opacity = 0.93, light = true }: { src: string; opacity?: number; light?: boolean }) => (
  <div className="absolute inset-0">
    <img src={src} alt="" className="w-full h-full object-cover object-center" />
    <div
      className="absolute inset-0"
      style={{ background: light ? `rgba(247,244,239,${opacity})` : `rgba(22,26,30,${opacity})` }}
    />
  </div>
);

export default function ServicesSections() {
  return (
    <>
      {/* 1. PROBLEMS — С какими проблемами я работаю */}
      <section id="problems" className="py-20 relative overflow-hidden">
        <BgPhoto src={PHOTOS.processWork} opacity={0.94} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Запросы клиентов</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-4" style={{ color: "var(--graphite)" }}>
              С какими проблемами я работаю
            </h2>
            <p className="font-golos text-center mb-12" style={{ color: "var(--warm-gray)" }}>Если что-то из этого узнали — я могу помочь</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {problems.map((s, i) => (
              <RevealSection key={i} delay={i * 50}>
                <div className="flex flex-col items-center text-center gap-3 p-5 rounded-xl transition-all hover:scale-105 h-full" style={{ backgroundColor: "var(--cream)" }}>
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

      {/* 2. SERVICES — Направления работы (с подробным блоком о висцеральной терапии) */}
      <section id="services" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgServices} opacity={0.95} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Направления работы</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              Комплекс методик для вашего тела
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <RevealSection key={i} delay={(i % 3) * 100}>
                <div className="relative p-6 rounded-2xl border h-full flex flex-col gap-4 transition-all hover:shadow-md" style={{ borderColor: "var(--beige-dark)", backgroundColor: "var(--cream)" }}>
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

          {/* Подробнее о висцеральной терапии */}
          <RevealSection delay={300}>
            <div className="mt-12 p-8 md:p-10 rounded-2xl border" style={{ borderColor: "var(--beige-dark)", backgroundColor: "var(--cream)" }}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-3" style={{ color: "var(--green)" }}>Подробнее</span>
                  <h3 className="font-cormorant text-3xl font-semibold mb-4" style={{ color: "var(--graphite)" }}>Висцеральная терапия</h3>
                  <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "var(--graphite-light)" }}>
                    Это мягкое воздействие на внутренние органы через переднюю стенку живота. Помогаю при нарушениях пищеварения, 
                    хроническом напряжении в животе, застойных процессах. Работаю деликатно — без боли и дискомфорта.
                  </p>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--graphite-light)" }}>
                    Висцеральная терапия особенно эффективна в сочетании с другими методиками: массажем спины, 
                    коррекцией осанки и дыхательными практиками. Результат — улучшение самочувствия, 
                    лёгкость в теле и нормализация работы внутренних органов.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3]" style={{ backgroundColor: "var(--beige)" }}>
                  <img src={PHOTOS.processWork} alt="Висцеральная терапия" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 3. ABOUT — Обо мне (с подходом к работе одной строкой + сертификаты) */}
      <section id="about" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgAbout} opacity={0.94} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--beige-dark)" }}>
                  <img
                    src={PHOTOS.about}
                    alt="Дмитрий Хохлов"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 px-5 py-3 rounded-xl text-center shadow-md" style={{ backgroundColor: "#fff" }}>
                  <p className="font-cormorant text-3xl font-semibold" style={{ color: "var(--graphite)" }}>8+</p>
                  <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>лет опыта</p>
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
                  Специалист по терапевтическому массажу и восстановлению с медицинским образованием и более чем 8 годами практики. 
                  Работаю с хронической болью, нарушением осанки, мышечными дисбалансами и последствиями травм.
                </p>
                <p className="font-golos text-base leading-relaxed mb-5" style={{ color: "var(--graphite-light)" }}>
                  Мой подход: сначала разбираюсь с причиной, не работаю грубо, объясняю понятно. 
                  Каждый приём начинаю с опроса, осмотра и тестирования — подбираю метод под конкретный запрос.
                </p>
                <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "var(--graphite-light)" }}>
                  Постоянно учусь и повышаю квалификацию. Работаю в Одинцово и Москве.
                </p>
              </RevealSection>
              <RevealSection delay={200}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Медицинское образование", "ЛФК и реабилитация", "Мануальные техники", "Миофасциальные техники", "Кинезиотерапия"].map((tag) => (
                    <span key={tag} className="font-golos text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--graphite-light)" }}>{tag}</span>
                  ))}
                </div>
              </RevealSection>

              {/* Сертификаты прямо в блоке Обо мне */}
              <RevealSection delay={250}>
                <div className="grid grid-cols-4 gap-2">
                  {[PHOTOS.cert1, PHOTOS.cert2, PHOTOS.cert3, PHOTOS.cert4].map((src, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--beige)" }}>
                      <img src={src} alt={`Сертификат ${i + 1}`} className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity cursor-pointer" />
                    </div>
                  ))}
                </div>
                <p className="font-golos text-xs mt-2" style={{ color: "var(--warm-gray)" }}>Оригиналы сертификатов — по запросу</p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS — Отзывы (скрины) */}
      <section id="reviews" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.processWork} opacity={0.93} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Отзывы</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--graphite)" }}>
              Что говорят клиенты
            </h2>
            <p className="font-golos text-base mb-12" style={{ color: "var(--warm-gray)" }}>Скриншоты реальных отзывов</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[PHOTOS.review1, PHOTOS.review2, PHOTOS.review3].map((src, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ backgroundColor: "var(--cream)" }}>
                  <img src={src} alt={`Отзыв ${i + 1}`} className="w-full h-auto object-contain" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EFFECTS — Польза и эффекты (коротко) */}
      <section className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgEducation} opacity={0.94} />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <RevealSection>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center mb-4" style={{ color: "var(--graphite)" }}>
              Что изменится после работы
            </h2>
            <p className="font-golos text-center mb-14" style={{ color: "var(--warm-gray)" }}>Реальные эффекты, которые замечают клиенты</p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {effects.map((e, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-4 py-10 px-6 rounded-2xl transition-all hover:shadow-sm" style={{ backgroundColor: "rgba(247,244,239,0.85)", backdropFilter: "blur(4px)" }}>
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

      {/* 6. EXPERT — Чем отличается спортивный от терапевтического */}
      <section className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgWhy} opacity={0.95} />
        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>Экспертный блок</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              Спортивный vs терапевтический массаж
            </h2>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--cream)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--green-pale)" }}>
                  <Icon name="Zap" size={24} style={{ color: "var(--green)" }} />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-4" style={{ color: "var(--graphite)" }}>Спортивный массаж</h3>
                <ul className="font-golos text-sm leading-relaxed space-y-2" style={{ color: "var(--graphite-light)" }}>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} /> Для спортсменов и активных людей</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} /> Ускоряет восстановление после тренировок</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} /> Снижает риск травм</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} /> Интенсивная работа с мышцами</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} /> Фокус на конкретные группы мышц</li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                  <Icon name="Heart" size={24} style={{ color: "#fff" }} />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-4">Терапевтический массаж</h3>
                <ul className="font-golos text-sm leading-relaxed space-y-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fff" }} /> Для всех, у кого есть боль или дискомфорт</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fff" }} /> Работа с причиной, а не симптомом</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fff" }} /> Мягкое и бережное воздействие</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fff" }} /> Комплексный подход к телу</li>
                  <li className="flex gap-2"><Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fff" }} /> Долгосрочный результат без таблеток</li>
                </ul>
              </div>
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <p className="font-golos text-sm text-center mt-8 max-w-2xl mx-auto" style={{ color: "var(--warm-gray)" }}>
              Не знаете, что выбрать? Напишите — я подскажу, какой подход подойдёт именно вам.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  );
}