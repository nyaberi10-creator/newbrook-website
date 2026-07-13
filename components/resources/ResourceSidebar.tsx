import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface SidebarProps {
  title: string;
  items: string[];
  buttonText: string;
}

export default function ResourceSidebar({
  title,
  items,
  buttonText,
}: SidebarProps) {
  return (
    <aside>

      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-8 space-y-4">

          {items.map((item) => (
            <div
              key={item}
              className="flex items-start"
            >
              <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-600" />

              <span>{item}</span>

            </div>
          ))}

        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          {buttonText}
        </Link>

      </div>

    </aside>
  );
}