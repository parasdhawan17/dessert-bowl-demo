import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

function Sheet(props: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root {...props} />;
}

function SheetTrigger(props: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger {...props} />;
}

function SheetClose(props: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close {...props} />;
}

function SheetPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return (
    <BaseDialog.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/80 transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

const sheetVariants = cva(
  "fixed z-50 flex flex-col gap-4 bg-background text-foreground shadow-lg transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto border-b border-border data-[ending-style]:-translate-y-4 data-[starting-style]:-translate-y-4",
        bottom:
          "inset-x-0 bottom-0 h-auto border-t border-border data-[ending-style]:translate-y-4 data-[starting-style]:translate-y-4",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border data-[ending-style]:-translate-x-4 data-[starting-style]:-translate-x-4 sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l border-border data-[ending-style]:translate-x-4 data-[starting-style]:translate-x-4 sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup> &
  VariantProps<typeof sheetVariants> & { showCloseButton?: boolean }) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <BaseDialog.Popup
        className={cn(sheetVariants({ side }), "p-6", className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <BaseDialog.Close
            aria-label="Close menu"
            className="absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <X />
          </BaseDialog.Close>
        )}
      </BaseDialog.Popup>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetBackdrop,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
};
