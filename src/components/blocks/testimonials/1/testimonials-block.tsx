import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconPlaceholder } from "@/components/icons/icon-placeholder";
import { testimonials } from "@/data/site";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TestimonialsBlock() {
  return (
    <section
      id="reviews"
      className="flex w-full scroll-mt-16 items-center justify-center bg-background px-6 py-20 text-foreground"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-block rounded-md border border-border px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Reviews
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Regulars since 2008
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            4.5 stars across 1,300+ Google reviews — here is what people say
            about the bowls.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {testimonials.map(({ quote, name, detail }) => (
            <Card
              key={name}
              className="flex flex-col gap-0 border-0 bg-card p-8 transition-colors duration-200 hover:bg-muted"
            >
              <CardContent className="flex flex-1 flex-col gap-5 p-0">
                <IconPlaceholder
                  lucide="Quote"
                  tabler="IconQuotes"
                  hugeicons="QuotesIcon"
                  phosphor="Quotes"
                  remixicon="RiDoubleQuotesL"
                  className="size-8 text-foreground opacity-20"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </CardContent>

              <CardFooter className="mt-8 gap-4 border-t border-border px-0 pt-6 pb-8">
                <Avatar className="size-10 border border-border">
                  <AvatarFallback className="bg-primary/15 text-xs font-semibold text-primary">
                    {getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    {name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {detail}
                  </span>
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
