import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionRootProps = Omit<
  React.ComponentProps<typeof BaseAccordion.Root>,
  "defaultValue" | "value"
> & {
  defaultValue?: string | string[] | null;
  value?: string | string[] | null;
  multiple?: boolean;
};

function Accordion({
  defaultValue,
  value,
  multiple,
  ...props
}: AccordionRootProps) {
  const normalise = (v: string | string[] | null | undefined) =>
    Array.isArray(v) && !multiple ? (v[0] ?? null) : v;
  return (
    <BaseAccordion.Root
      multiple={multiple}
      defaultValue={normalise(defaultValue) as never}
      value={normalise(value) as never}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      className={cn("border-b border-border last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header className="flex">
      <BaseAccordion.Trigger
        className={cn(
          "flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&[data-panel-open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      className={cn(
        "h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
        className
      )}
      {...props}
    >
      {children}
    </BaseAccordion.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
