import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

function Dialog(props: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger {...props} />;
}

function DialogPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DialogBackdrop({
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

function DialogPopup({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid max-h-[90vh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-lg border border-border bg-background p-6 text-foreground shadow-lg transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogPopup className={className} {...props}>
        {children}
        {showCloseButton && (
          <BaseDialog.Close
            aria-label="Close dialog"
            className="absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <X />
          </BaseDialog.Close>
        )}
      </DialogPopup>
    </DialogPortal>
  );
}

function DialogTitle({
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

function DialogDescription({
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

function DialogClose(props: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close {...props} />;
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
