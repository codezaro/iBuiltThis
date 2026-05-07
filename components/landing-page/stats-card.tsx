import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <div className={cn("space-y-2", hasBorder && "border-x border-border/50")}>
      <div className="flex items-center justify-center gap-2">
        <Icon className="text-primary/70 size-5" />
        <p className="text-3xl sm:text-4xl font-bold">{value}</p>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
