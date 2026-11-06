"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur border-b border-sand">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-semibold text-espresso">
          Ember &amp; Bean
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-mocha hover:text-caramel transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#menu"
          className="hidden md:inline-block rounded-full bg-espresso px-5 py-2 text-sm font-medium text-cream hover:bg-mocha transition-colors"
        >
          View Menu
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-espresso"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-sand bg-cream px-4 py-4 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-mocha hover:bg-sand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
