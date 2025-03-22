import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <div
      className={cn(
        "bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
