import { CheckCircle2 } from "lucide-react";

/**
 * About Section Component
 * Displays cafe features and benefits
 * Design: Warm Mediterranean with feature highlights
 */
export default function AboutSection() {
  const features = [
    {
      icon: "🔥",
      title: "Огонь вкуса",
      description: "Каждое блюдо готовится на открытом огне с использованием традиционных методов",
    },
    {
      icon: "👨‍🍳",
      title: "Опытные повара",
      description: "Наша команда знает свое дело и готовит с любовью и мастерством",
    },
    {
      icon: "🥘",
      title: "Качественные ингредиенты",
      description: "Используем только свежие и натуральные продукты высочайшего качества",
    },
    {
      icon: "⚡",
      title: "Быстрое обслуживание",
      description: "Готовим быстро, но без спешки - каждое блюдо получается идеальным",
    },
    {
      icon: "😊",
      title: "Гостеприимство",
      description: "Приветливая атмосфера и внимательное отношение к каждому гостю",
    },
    {
      icon: "💰",
      title: "Справедливые цены",
      description: "Отличное соотношение цены и качества - вы получаете максимум за свои деньги",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Почему выбирают нас?</h2>
          <p className="text-lg text-muted-foreground">
            Мы не просто готовим еду - мы создаем впечатления и делимся традициями кавказской кухни
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-primary group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-orange-200/10 rounded-2xl p-12 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437593076/TwB4qfG9od4wKjWyk64msg/cafe-interior-DzYbh2g8DCCvgqJwGAsp3Z.webp"
                alt="Интерьер кафе"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Добро пожаловать в нашу семью!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы открыли "Шашлык Огонь" с одной целью - поделиться подлинным вкусом кавказской и ближневосточной кухни с жителями Калининграда.
              </p>
              <ul className="space-y-3">
                {[
                  "Более 39 положительных отзывов на Яндекс.Картах",
                  "Постоянные клиенты, которые приходят снова и снова",
                  "Рейтинг 5.0 за качество и обслуживание",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-lg mt-4"
              >
                Посмотреть меню
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
