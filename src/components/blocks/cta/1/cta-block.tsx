import { Button } from "@/components/ui/button";
import { IconPlaceholder } from "@/components/icons/icon-placeholder";

const WHATSAPP = "https://wa.me/6562851278";

export default function CtaBlock() {
  return (
    <section
      id="visit"
      className="flex w-full scroll-mt-16 items-center justify-center bg-background px-6 py-12 text-foreground"
    >
      <div className="w-full max-w-3xl rounded-xl border border-border bg-muted/30 px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Craving dessert tonight?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          We are on the second floor at 80A Serangoon Garden Way — open till
          10:30pm on weeknights and 11:30pm on weekends. Walk in, or WhatsApp us
          for takeaway.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            render={
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dessert+Bowl+80A+Serangoon+Garden+Way+Singapore+555976"
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
            className="w-full sm:w-auto active:scale-[0.97] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            Get directions
            <IconPlaceholder
              lucide="MapPin"
              tabler="IconMapPin"
              hugeicons="MapPinIcon"
              phosphor="MapPin"
              remixicon="RiMapPinLine"
              data-icon="inline-end"
              aria-hidden="true"
            />
          </Button>
          <Button
            variant="secondary"
            render={<a href={WHATSAPP} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="w-full sm:w-auto active:scale-[0.97] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            WhatsApp +65 6285 1278
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Closed on Mondays · Split shift Tue–Sun with a dinner break 5:30–6:15pm
        </p>
      </div>
    </section>
  );
}
