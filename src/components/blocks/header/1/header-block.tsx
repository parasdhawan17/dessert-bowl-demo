"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconPlaceholder } from "@/components/icons/icon-placeholder";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Signatures", href: "#signatures" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const WHATSAPP = "https://wa.me/6562851278";

function BowlMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M9 12V7a3 3 0 0 1 6 0v5" />
      <path d="M12 21v-2" />
    </svg>
  );
}

export default function HeaderBlock() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-6 border-b border-border bg-background/90 px-4 text-foreground backdrop-blur sm:px-6">
      <a href="#top" className="flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <BowlMark className="size-5" />
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
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Button
          render={<a href={WHATSAPP} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className="hidden md:inline-flex"
        >
          WhatsApp Us
          <IconPlaceholder
            lucide="ArrowUpRight"
            tabler="IconArrowUpRight"
            hugeicons="ArrowUpRightIcon"
            phosphor="ArrowUpRight"
            remixicon="RiArrowRightUpLine"
            data-icon="inline-end"
            aria-hidden="true"
          />
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" />
            }
            aria-label="Open menu"
          >
            <IconPlaceholder
              lucide="Menu"
              tabler="IconMenu"
              hugeicons="MenuIcon"
              phosphor="List"
              remixicon="RiMenuLine"
              aria-hidden="true"
            />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BowlMark className="size-4" />
                </span>
                Dessert Bowl
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-2">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.label}
                  render={<a href={link.href} />}
                  nativeButton={false}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                render={<a href={WHATSAPP} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="w-full"
              >
                WhatsApp Us
                <IconPlaceholder
                  lucide="ArrowUpRight"
                  tabler="IconArrowUpRight"
                  hugeicons="ArrowUpRightIcon"
                  phosphor="ArrowUpRight"
                  remixicon="RiArrowRightUpLine"
                  data-icon="inline-end"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
