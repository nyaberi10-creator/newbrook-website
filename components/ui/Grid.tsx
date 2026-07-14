import { ReactNode } from "react";
import clsx from "clsx";

interface GridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function Grid({
  children,
  columns = 3,
  className,
}: GridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={clsx(
        "grid gap-8",
        gridCols[columns],
        className
      )}
    >
      {children}
    </div>
  );
}