import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

/**
 * Navigation Component
 * Sticky header with logo, menu items, and contact info
 * Design: Warm Mediterranean aesthetic with burnt orange accents
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Меню", href: "#menu" },
    { label: "О нас", href: "#about" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-orange-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🔥
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">Шашлык Огонь</span>
                <span className="text-xs text-muted-foreground">Калининград</span>
              </div>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+79527977509"
              className="flex items-center gap-2 text-primary hover:text-orange-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">+7 (952) 797-75-09</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-orange-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+79527977509"
                className="flex items-center gap-2 text-primary hover:text-orange-700 transition-colors px-2 py-2 font-semibold"
              >
                <Phone size={18} />
                +7 (952) 797-75-09
              </a>
              <a
                href="https://maps.yandex.ru/22/kaliningrad/?ll=20.579150%2C54.710853&mode=poi&poi%5Bpoint%5D=20.578777%2C54.710956&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D59646585937&z=18.44"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-orange-700 transition-colors px-2 py-2 font-semibold"
              >
                <MapPin size={18} />
                Как найти
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
