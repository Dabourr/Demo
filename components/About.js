import Image from "next/image";

const stats = [
  { value: "2015", label: "Established" },
  { value: "12+", label: "Origin Beans" },
  { value: "100%", label: "Baked In-House" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
            alt="Cozy café interior with wooden tables"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-caramel font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight">
            A neighborhood café built on good coffee and good company.
          </h2>
          <p className="mt-6 text-mocha leading-relaxed">
            Ember &amp; Bean started as a small corner shop with one espresso machine and a love for honest, well-made coffee.
            Today we still roast in small batches, work directly with farmers, and bake everything fresh each morning.
          </p>
          <p className="mt-4 text-mocha leading-relaxed">
            Whether you need a quiet spot to work, a place to catch up with friends, or just a quick flat white on your way,
            our doors are always open.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-sand pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-mocha">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
