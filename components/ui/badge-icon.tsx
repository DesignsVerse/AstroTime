import { cn } from "@/lib/utils";

interface BadgeIconProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function BadgeIcon({ icon, text, className }: BadgeIconProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700", className)}>
      {icon}
      <span>{text}</span>
    </div>
  );
}