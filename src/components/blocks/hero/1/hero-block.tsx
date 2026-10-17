import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconPlaceholder } from "@/components/icons/icon-placeholder";

const WHATSAPP = "https://wa.me/6562851278";
const PRESS = ["CNA Lifestyle", "SethLui", "Eatbook", "BestLah", "Lemon8"];

export default function HeroBlock() {
  return (
    <section
      id="top"
      className="flex w-full items-center justify-center bg-background px-6 pb-16 pt-12 text-foreground sm:pt-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Badge variant="secondary">
          <IconPlaceholder
            lucide="Sparkles"
            tabler="IconSparkles"
            hugeicons="SparklesIcon"
            phosphor="Sparkle"
            remixicon="RiSparkling2Line"
            data-icon="inline-start"
            aria-hidden="true"
          />
          Serangoon Gardens · Since 2008
        </Badge>

        <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Real durian. Real fruit.{" "}
          <span className="text-primary">Served till late.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Traditional Chinese desserts done properly — our famous durian mousse,
          mango pomelo sago and slow-simmered tong sui, in the heart of
          Serangoon Gardens.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            render={<a href="#menu" />}
            nativeButton={false}
            className="active:scale-[0.97] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            Explore the menu
            <IconPlaceholder
              lucide="ArrowDown"
              tabler="IconArrowDown"
              hugeicons="ArrowDownIcon"
              phosphor="ArrowDown"
              remixicon="RiArrowDownLine"
              data-icon="inline-end"
              aria-hidden="true"
            />
          </Button>
          <Button
            variant="outline"
            render={<a href={WHATSAPP} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="active:scale-[0.97] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            WhatsApp to order
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

        <div className="mt-12 w-full overflow-hidden rounded-2xl border border-border shadow-2xl">
          <img
            src="./images/hero-durian-mousse.jpg"
            alt="Durian mousse topped with fresh durian pulp at Dessert Bowl"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          The signature durian mousse — made with real D24 pulp since 2008.
        </p>

        <Separator className="mt-12 w-full max-w-md" />

        <p className="mt-6 text-sm text-muted-foreground">
          4.5 stars from 1,300+ Google reviews — and featured in:
        </p>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PRESS.map((name) => (
            <li
              key={name}
              className="font-heading text-base font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
