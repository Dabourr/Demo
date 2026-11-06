import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
        alt="Fresh cup of coffee on a wooden table"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/65" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-2xl">
          <p className="text-caramel font-medium tracking-widest uppercase text-sm mb-4">
            Specialty Coffee &amp; Bakery
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
            Slow mornings start with a great cup.
          </h1>
          <p className="mt-6 text-lg text-cream/85 max-w-xl">
            Freshly roasted beans, handcrafted drinks, and pastries baked every morning in a warm, welcoming space.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="rounded-full bg-caramel px-8 py-3 text-center font-medium text-white hover:bg-mocha transition-colors"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/70 px-8 py-3 text-center font-medium text-cream hover:bg-cream hover:text-espresso transition-colors"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
