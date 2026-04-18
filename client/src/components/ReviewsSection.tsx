import { Star } from "lucide-react";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    author: "Александра Ш.",
    rating: 5,
    text: "Вкусная и огромная шаурма - муж берет обычно большую и сразу делит ее на две части, мне нравится с креветками. В каждой много мяса и овощей. Брали ланч боксы - огромные!",
    date: "Февраль 2025",
  },
  {
    author: "Елена",
    rating: 5,
    text: "Очень достойная, вкусная, сочная, впечатляющего размера! Лучшая в нашем районе. Готовят быстро и очень вежливо.",
    date: "Декабрь 2024",
  },
  {
    author: "Владимир Дымнич",
    rating: 5,
    text: "Я этому повару руки целовал. Очень вкусно приготовил шашлык, угостил чаем. Все безумно вкусное, и вежливый хозяин. Теперь самое любимое заведение.",
    date: "Ноябрь 2024",
  },
  {
    author: "Виктория М",
    rating: 5,
    text: "Вкусно, сытно и быстро! Владелец приятный и очень гостеприимный человек. Угостил нас чаем. Очень вкусный картофель фри!",
    date: "Октябрь 2024",
  },
  {
    author: "Сергей",
    rating: 5,
    text: "Очень вкусные шашлыки из курицы и свинины. Шаверма и бургер с говядиной и сыром вообще огонь. Повар приветливый, готовит быстро и самое главное - вкусно!",
    date: "Сентябрь 2024",
  },
  {
    author: "Анастасия Поликарпова",
    rating: 5,
    text: "Вкусный шашлык, готовят быстро. Порции большие! Очень вкусно, быстро и приятно по цене. Приходите, здесь вкусно!",
    date: "Август 2024",
  },
];

/**
 * Reviews Section Component
 * Displays customer testimonials with star ratings
 * Design: Warm Mediterranean with alternating left-right layout
 */
export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Отзывы наших гостей</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 39 положительных оценок на Яндекс.Картах. Вот что говорят наши постоянные клиенты:
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 ${
                index % 2 === 0 ? "md:translate-y-0" : "md:translate-y-4"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-orange-100 pt-4">
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://yandex.com/maps/22/kaliningrad/?ll=20.579150%2C54.710853&mode=poi&poi%5Bpoint%5D=20.578777%2C54.710956&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D59646585937&z=18.44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-lg"
          >
            Смотреть все отзывы на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
}
