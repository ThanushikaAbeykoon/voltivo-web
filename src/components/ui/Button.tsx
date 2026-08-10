import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const variants = {
    primary: "bg-cta text-ink hover:bg-cta-2",
    outline:
      "border border-border-strong text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
