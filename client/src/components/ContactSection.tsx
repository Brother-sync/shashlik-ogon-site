import { Phone, MapPin, Clock, Utensils } from "lucide-react";

/**
 * Contact Section Component
 * Displays business hours, location, and contact information
 * Design: Warm Mediterranean with warm orange accents
 */
export default function ContactSection() {
  const workingHours = [
    { day: "Понедельник", time: "до 22:00" },
    { day: "Вторник", time: "до 22:00" },
    { day: "Среда", time: "до 22:00" },
    { day: "Четверг", time: "до 22:00" },
    { day: "Пятница", time: "до 22:00" },
    { day: "Суббота", time: "до 22:00" },
    { day: "Воскресенье", time: "до 22:00" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Найти нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в самом центре Калининграда. Приходите в гости!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Позвонить</h3>
            <a
              href="tel:+79527977509"
              className="text-primary hover:text-orange-700 font-semibold transition-colors"
            >
              +7 (952) 797-75-09
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Адрес</h3>
            <p className="text-muted-foreground">
              ул. Кутаисская
              <br />
              Калининград
            </p>
          </div>

          {/* Average Bill */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Utensils className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Средний чек</h3>
            <p className="text-primary font-semibold text-lg">200–500 ₽</p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Clock className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Режим работы</h3>
            <p className="text-primary font-semibold">Ежедневно</p>
            <p className="text-muted-foreground text-sm">до 22:00</p>
          </div>
        </div>

        {/* Working Hours Table */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md border border-orange-100 mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Часы работы</h3>
          <div className="space-y-3">
            {workingHours.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-3 border-b border-orange-100 last:border-0">
                <span className="text-foreground font-medium">{item.day}</span>
                <span className="text-primary font-semibold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Link */}
        <div className="text-center">
          <a
            href="https://maps.yandex.ru/22/kaliningrad/?ll=20.579150%2C54.710853&mode=poi&poi%5Bpoint%5D=20.578777%2C54.710956&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D59646585937&z=18.44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-lg"
          >
            <MapPin size={20} />
            Открыть на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
}
