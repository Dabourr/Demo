const details = [
  { title: "Address", lines: ["245 Bedford Avenue", "Brooklyn, NY 11211"] },
  { title: "Opening Hours", lines: ["Mon – Fri: 7:00 AM – 8:00 PM", "Sat – Sun: 8:00 AM – 9:00 PM"] },
  { title: "Phone", lines: ["(718) 555-0142"], href: "tel:+17185550142" },
  { title: "Email", lines: ["hello@emberandbean.com"], href: "mailto:hello@emberandbean.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-caramel font-medium tracking-widest uppercase text-sm mb-3">Contact &amp; Location</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">Come say hello</h2>
          <p className="mt-4 text-mocha">We&apos;d love to see you. Drop by for a cup or get in touch with us anytime.</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="grid sm:grid-cols-2 gap-6">
            {details.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand bg-white/60 p-6">
                <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                <div className="mt-3 space-y-1 text-mocha">
                  {item.lines.map((line) =>
                    item.href ? (
                      <a key={line} href={item.href} className="block break-words hover:text-caramel transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-sand min-h-80">
            <iframe
              title="Café location map"
              src="https://www.google.com/maps?q=245+Bedford+Ave,+Brooklyn,+NY&output=embed"
              className="w-full h-full min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
