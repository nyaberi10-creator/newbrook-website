import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "lg",
}: CardProps) {
  const paddingClass = {
    sm: "p-5",
    md: "p-7",
    lg: "p-10",
  };

  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        paddingClass[padding],
        hover &&
          "hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}