import { icons as lucideIcons } from "lucide-react";
import { cn } from "@/lib/utils";

type IconPlaceholderProps = {
  lucide?: keyof typeof lucideIcons;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
  className?: string;
} & Omit<React.SVGProps<SVGSVGElement>, "className">;

/**
 * Renders the named icon from the preferred icon library.
 * 21st.dev blocks declare icons for several libraries; this project uses lucide-react.
 */
export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  className,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide ? lucideIcons[lucide] : undefined;
  if (!Icon) {
    return (
      <span
        className={cn("inline-block size-4 shrink-0", className)}
        aria-hidden="true"
      />
    );
  }
  return (
    <Icon
      className={cn("size-4 shrink-0", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
