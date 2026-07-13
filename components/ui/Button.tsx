import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300",
    {
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-lg":
        variant === "primary",

      "bg-slate-900 text-white hover:bg-black":
        variant === "secondary",

      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100":
        variant === "outline",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}