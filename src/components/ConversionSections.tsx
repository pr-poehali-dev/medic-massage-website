import Icon from "@/components/ui/icon";
import { TG_URL, WA_URL, VK_URL, PHOTOS, prices, RevealSection } from "@/components/shared";

const BgPhoto = ({ src, opacity = 0.93, light = true }: { src: string; opacity?: number; light?: boolean }) => (
  <div className="absolute inset-0">
    <img src={src} alt="" className="w-full h-full object-cover object-center" />
    <div
      className="absolute inset-0"
      style={{ background: light ? `rgba(247,244,239,${opacity})` : `rgba(22,26,30,${opacity})` }}
    />
  </div>
);

export default function ConversionSections() {
  return (
    <>
      {/* PRICE — Прайс */}
      <section id="price" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgPrice} opacity={0.94} />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
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

      {/* PROMO — Акция на первое посещение */}
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

      {/* CASE — Кейсы / результаты */}
      <section id="cases" className="py-24 relative overflow-hidden">
        <BgPhoto src={PHOTOS.bgCase} opacity={0.93} />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <RevealSection>
            <span className="inline-block text-xs font-golos font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green)" }}>История клиента</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--graphite)" }}>
              «Не мог нормально спать из-за шеи»
            </h2>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-5">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--cream)" }}>
                  <p className="font-golos text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--warm-gray)" }}>Ситуация</p>
                  <p className="font-golos text-base leading-relaxed" style={{ color: "var(--graphite-light)" }}>
                    Мужчина, 38 лет. Сидячая работа, долгое время беспокоила шейно-воротниковая зона — напряжение, ощущение «каски» на голове. Из-за этого сложно засыпать, часто просыпается ночью.
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--cream)" }}>
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
                <div className="rounded-xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--cream)" }}>
                  <img src={PHOTOS.bgServices} alt="Массаж — процесс работы" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "var(--cream)" }}>
                  <p className="font-cormorant text-4xl font-light mb-1" style={{ color: "var(--green)" }}>5</p>
                  <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>сеансов в курсе</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CONTACTS — Локация и контакты */}
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

          {/* Мессенджеры */}
          <RevealSection delay={200}>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={TG_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-golos font-medium transition-all hover:scale-105"
                style={{ backgroundColor: "var(--green)", color: "#fff" }}>
                <Icon name="Send" size={20} />
                Telegram
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-golos font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: "var(--green)", color: "var(--green)", backgroundColor: "rgba(247,244,239,0.9)" }}>
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
              <a href={VK_URL} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-golos font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: "var(--beige-dark)", color: "var(--graphite-light)", backgroundColor: "rgba(247,244,239,0.9)" }}>
                <Icon name="Users" size={20} />
                ВКонтакте
              </a>
            </div>
          </RevealSection>

          {/* Футер */}
          <RevealSection delay={300}>
            <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--beige-dark)" }}>
              <p className="font-cormorant text-2xl font-light" style={{ color: "var(--graphite)" }}>Дмитрий Хохлов</p>
              <p className="font-golos text-xs" style={{ color: "var(--warm-gray)" }}>Медицинский массаж и реабилитация · Одинцово и Москва</p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}