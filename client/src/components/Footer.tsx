import { Heart } from "lucide-react";

/**
 * Footer Component
 * Simple footer with copyright and links
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Шашлык Огонь</h3>
            <p className="text-sm opacity-90">
              Аутентичная кавказская и ближневосточная кухня в самом центре Калининграда.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-orange-300 transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-300 transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-300 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-sm opacity-90">
              <a href="tel:+79527977509" className="hover:text-orange-300 transition-colors">
                +7 (952) 797-75-09
              </a>
            </p>
            <p className="text-sm opacity-90 mt-2">
              ул. Кутаисская, Калининград
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex items-center justify-center gap-2 text-sm opacity-75">
            <span>Сделано с</span>
            <Heart size={16} className="fill-current" />
            <span>для вас</span>
          </div>
          <p className="text-center text-xs opacity-60 mt-4">
            © 2025 Шашлык Огонь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
