const categories = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", description: "Rich double shot of our house blend", price: "$3.00" },
      { name: "Cappuccino", description: "Espresso with steamed milk and thick foam", price: "$4.25" },
      { name: "Flat White", description: "Smooth microfoam over a ristretto shot", price: "$4.50" },
      { name: "Pour Over", description: "Single-origin beans, brewed by hand", price: "$5.00" },
    ],
  },
  {
    title: "Specialty Drinks",
    items: [
      { name: "Caramel Latte", description: "House-made caramel, espresso, and milk", price: "$5.25" },
      { name: "Iced Mocha", description: "Dark chocolate, espresso, and cold milk", price: "$5.50" },
      { name: "Matcha Latte", description: "Ceremonial-grade matcha with oat milk", price: "$5.25" },
      { name: "Cold Brew", description: "Steeped for 18 hours, served over ice", price: "$4.75" },
    ],
  },
  {
    title: "Pastries",
    items: [
      { name: "Butter Croissant", description: "Flaky, golden, baked every morning", price: "$3.50" },
      { name: "Almond Croissant", description: "Filled with almond cream and toasted almonds", price: "$4.25" },
      { name: "Cinnamon Roll", description: "Soft dough with brown sugar glaze", price: "$4.00" },
      { name: "Blueberry Muffin", description: "Loaded with fresh blueberries", price: "$3.75" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-sand/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-caramel font-medium tracking-widest uppercase text-sm mb-3">Our Menu</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">Crafted with care, served with love</h2>
          <p className="mt-4 text-mocha">
            From classic espresso to fresh-baked pastries, everything is made to order.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="rounded-2xl bg-cream p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold border-b border-sand pb-4">{category.title}</h3>
              <ul className="mt-6 space-y-6">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-medium text-espresso">{item.name}</p>
                      <p className="font-semibold text-caramel">{item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-mocha">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
