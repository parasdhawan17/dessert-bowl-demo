import { menuCourses } from "@/data/site";

export default function MenuBlock() {
  return (
    <section
      id="menu"
      className="w-full scroll-mt-16 bg-background px-6 py-16 text-foreground sm:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-md border border-border px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            The menu
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Made fresh through the day, served till late
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Prices are nett. The durian series uses real fruit, stocked 365 days
            a year.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {menuCourses.map((course) => (
            <section key={course.title}>
              <h3 className="font-heading text-sm font-semibold tracking-[0.18em] uppercase text-primary">
                {course.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {course.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{dish.name}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-4 flex-1 translate-y-[-0.2rem] border-b border-dotted border-border"
                      />
                      <span className="font-medium tabular-nums">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {dish.detail}
                      {dish.note ? (
                        <>
                          {" "}
                          <span className="font-medium text-primary">
                            · {dish.note}
                          </span>
                        </>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Menu and prices confirmed January 2025 — ask our team about the latest
          seasonal specials.
        </p>
      </div>
    </section>
  );
}
