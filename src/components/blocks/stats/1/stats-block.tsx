import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "2008", label: "Making durian mousse since" },
  { value: "4.5★", label: "Google rating" },
  { value: "1,300+", label: "Customer reviews" },
  { value: "11:30pm", label: "Open till late, Fri–Sun" },
];

export default function StatsBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A Serangoon Gardens institution
          </h2>
          <p className="mt-3 text-muted-foreground">
            One shophouse, one speciality, seventeen years of regulars.
          </p>
        </div>

        <Separator className="mt-12" />
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center border-border px-6 py-8 text-center md:[&:nth-child(2)]:border-r [&:nth-child(odd)]:border-r"
            >
              <dt className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {value}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
        <Separator />
      </div>
    </section>
  );
}
