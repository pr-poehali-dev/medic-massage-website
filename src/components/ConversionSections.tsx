import Icon from "@/components/ui/icon";
import { TG_URL, WA_URL, VK_URL, PHOTOS, prices, RevealSection } from "@/components/shared";

export default function ConversionSections() {
  return (
    <>
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
              { city: "Одинцово", address: "ул. Чистяковой, 42", place: "Салон красоты «Мастер»" },
              { city: "Москва", address: "ул. Янковского, 1с2", place: "Салон красоты «Шёлк»" },
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
    </>
  );
}
