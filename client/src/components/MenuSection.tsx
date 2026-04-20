import { useState } from "react";
import { Flame } from "lucide-react";

interface MenuItem {
  name: string;
  price: string | { [key: string]: string };
  tag?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Шашлыки",
    items: [
      { name: "Шашлык из куриного бедра", price: "370 ₽" },
      { name: "Шашлык из шеи свинины", price: "390 ₽" },
    ],
  },
  {
    name: "Шаверма",
    items: [
      { name: "Шаверма с курицей (L)", price: "270 ₽" },
      { name: "Шаверма с курицей (X)", price: "350 ₽" },
      { name: "Шаверма с курицей (XXL)", price: "500 ₽" },
      { name: "Шаверма со свининой (L)", price: "300 ₽" },
      { name: "Шаверма со свининой (X)", price: "360 ₽" },
      { name: "Шаверма со свининой (XXL)", price: "550 ₽" },
    ],
  },
  {
    name: "Люля-кебаб",
    items: [
      { name: "Люля-кебаб с говядиной", price: "400 ₽" },
    ],
  },
  {
    name: "Бургеры",
    items: [
      { name: "Чикен бургер", price: "300 ₽", tag: "ХИТ" },
      { name: "Гамбургер с говядиной", price: "400 ₽", tag: "ХИТ" },
    ],
  },
  {
    name: "Закуски",
    items: [
      { name: "Картофель фри 150гр", price: "150 ₽" },
      { name: "Наггетсы 8 шт.", price: "150 ₽" },
      { name: "Сырные палочки 5 шт.", price: "250 ₽" },
      { name: "Фри по-деревенски 150гр", price: "170 ₽" },
      { name: "Креветки 4 шт.", price: "260 ₽" },
      { name: "Креветки 8 шт.", price: "460 ₽" },
    ],
  },
  {
    name: "Напитки",
    items: [
      { name: "Американо", price: "70–90 ₽" },
      { name: "Капучино", price: "100–140 ₽" },
      { name: "Латте", price: "100–140 ₽" },
      { name: "Чай", price: "50 ₽" },
    ],
  },
];

/**
 * Menu Section Component
 * Displays menu items organized by categories
 * Design: Warm Mediterranean with cards that lift on hover
 */
export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Flame className="text-primary" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Наше меню</h2>
            <Flame className="text-primary" size={28} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждое блюдо готовится с любовью и лучшими ингредиентами
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuData.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-white text-foreground border-2 border-orange-200 hover:border-primary hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/manus-storage/1_cleaned_final_81f2fc91.jpg"
              alt="Меню - Часть 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/manus-storage/4_cleaned_final_63293e3b.jpg"
              alt="Меню - Часть 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[selectedCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-orange-100 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="ml-2 inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-primary">
                {typeof item.price === "string" ? item.price : Object.values(item.price)[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
