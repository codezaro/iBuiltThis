import { LucideIcon } from "lucide-react";
import { title } from "process";

export default function SectionHeader({
  title,
  icon: Icon,
  description,
}: {
  title?: string;
  icon: LucideIcon;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <Icon className="text-primary size-6" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}
