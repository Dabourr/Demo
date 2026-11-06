const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold text-cream">Ember &amp; Bean</p>
          <p className="mt-2 text-sm max-w-xs">Specialty coffee and fresh pastries, served daily in Brooklyn.</p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-caramel transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-cream/10">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-cream/60 text-center md:text-left">
          &copy; {new Date().getFullYear()} Ember &amp; Bean. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
