import { Separator } from "@/components/ui/separator";
import { openingHours } from "@/data/site";

const exploreLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Signatures", href: "#signatures" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function FooterBlock() {
  return (
    <section className="flex w-full flex-col justify-center bg-background text-foreground">
      <Separator />
      <footer className="w-full px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M4 12h16a8 8 0 0 1-16 0Z" />
                  <path d="M9 12V7a3 3 0 0 1 6 0v5" />
                  <path d="M12 21v-2" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-tight">
                  Dessert Bowl
                </span>
                <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
                  一碗甜品
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Traditional Chinese desserts in Serangoon Gardens since 2008.
              Famous for our durian mousse, made with real D24 pulp, 365 days a
              year.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              Opening hours
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {openingHours.map(({ days, hours }) => (
                <li key={days} className="text-sm">
                  <span className="font-medium text-foreground">{days}</span>
                  <br />
                  <span className="text-muted-foreground">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mt-10" />

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            80A Serangoon Garden Way, Singapore 555976 · +65 6285 1278
          </p>
          <p>© 2026 Dessert Bowl 一碗甜品. Demo site.</p>
        </div>
      </footer>
    </section>
  );
}
