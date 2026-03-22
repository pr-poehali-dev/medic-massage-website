import Icon from "@/components/ui/icon";
import {
  TG_URL, WA_URL, PHOTOS,
  services, symptoms, trustPoints, steps, effects,
  RevealSection,
} from "@/components/shared";

export default function ServicesSections() {
  return (
    <>
      {/* SYMPTOMS — С какими запросами обращаются */}
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

      {/* SERVICES — Направления работы */}
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

      {/* ABOUT — Обо мне */}
      <section id="about" className="py-24" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--beige-dark)" }}>
                  <img
                    src={PHOTOS.about}
                    alt="Дмитрий Хохлов за работой"
                    className="w-full h-full object-cover object-top"
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

      {/* TRUST — Почему мне доверяют */}
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

      {/* PROCESS — Как проходит работа */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={PHOTOS.processWork} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "rgba(247,244,239,0.93)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-5 relative z-10">
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

      {/* EFFECTS — Польза и эффекты */}
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

      {/* CERTIFICATES — Образование и сертификаты */}
      <section id="certificates" className="py-24" style={{ backgroundColor: "var(--graphite)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green-light)" }}>Образование и квалификация</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "#f7f4ef" }}>
              Подтверждённая экспертиза
            </h2>
            <p className="font-golos text-base mb-12 max-w-xl" style={{ color: "rgba(247,244,239,0.6)" }}>
              Медицинское образование — база. Остальное — годы практики, курсы и работа с реальными запросами.
            </p>
          </RevealSection>

          {/* Образование */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "GraduationCap", title: "Медицинское образование", desc: "Базовое медицинское образование — фундамент понимания анатомии, физиологии и патологий. Работаю не по ощущениям, а по знаниям." },
              { icon: "Activity", title: "ЛФК и спортивная медицина", desc: "Специализация в лечебной физкультуре и реабилитации. Работа с двигательными паттернами, восстановлением после травм и операций." },
              { icon: "Layers", title: "Миофасциальные техники", desc: "Углублённая подготовка по работе с фасциальными цепями. Снятие ограничений подвижности через мягкое воздействие на соединительную ткань." },
              { icon: "RefreshCw", title: "Кинезиотерапия", desc: "Сертифицированная подготовка по кинезиотерапии. Движение как инструмент лечения и восстановления функции." },
              { icon: "Hand", title: "Мануальная терапия", desc: "Курсы по мягким техникам работы с суставами и позвоночником. Мобилизация без форсирования." },
              { icon: "Sparkles", title: "Эстетические техники", desc: "Обучение работе с лицом и телом: скульптурирующий массаж, работа с тонусом и мимическими зажимами." },
            ].map((item, i) => (
              <RevealSection key={i} delay={(i % 2) * 120}>
                <div
                  className="flex gap-4 p-6 rounded-2xl transition-all hover:bg-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(107,143,121,0.2)" }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: "var(--green-light)" }} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-1.5" style={{ color: "#f7f4ef" }}>{item.title}</h3>
                    <p className="font-golos text-sm leading-relaxed" style={{ color: "rgba(247,244,239,0.6)" }}>{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Фото сертификатов / обучения */}
          <RevealSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[PHOTOS.cert1, PHOTOS.cert2, PHOTOS.cert3, PHOTOS.cert4].map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden aspect-[4/3]"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <img
                    src={src}
                    alt={`Сертификат ${i + 1}`}
                    className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <p className="font-golos text-xs text-center mt-4" style={{ color: "rgba(247,244,239,0.3)" }}>
              Оригиналы сертификатов — по запросу
            </p>
          </RevealSection>
        </div>
      </section>

      {/* WHEN TO BOOK — Когда пора записаться */}
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
    </>
  );
}