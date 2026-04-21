import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Asymmetric layout with food imagery and warm welcome message
 * Design: Warm Mediterranean with burnt orange accents and cream text
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-orange-50 to-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 z-10">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-caveat text-2xl font-bold">🔥 Добро пожаловать!</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Шашлык <span className="text-primary">Огонь</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Посмотреть меню
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+79527977509"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                Позвонить
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                <p className="text-sm text-muted-foreground">Режим работы</p>
                <p className="text-lg font-semibold text-foreground">до 22:00</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                <p className="text-sm text-muted-foreground">Средний чек</p>
                <p className="text-lg font-semibold text-foreground">200–500 ₽</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-200/10 rounded-3xl" />
            <img
              src="/logo_bw.png"
              alt="Логотип Шашлык Огонь"
              className="relative z-10 w-full h-full object-contain shadow-2xl hover:shadow-3xl transition-shadow duration-300 p-8" style={{backgroundColor: '#f0e7d5', borderStyle: 'groove'}}
            />
          </div>
        </div>
      </div>

      {/* Flame Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary opacity-60" />
    </section>
  );
}
