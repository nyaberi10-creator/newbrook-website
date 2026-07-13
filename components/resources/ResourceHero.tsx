import { LucideIcon } from "lucide-react";

interface ResourceHeroProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
}

export default function ResourceHero({
  icon: Icon,
  badge,
  title,
  description,
}: ResourceHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Icon className="mr-2 h-4 w-4" />
            {badge}
          </div>

          <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            {description}
          </p>

        </div>

      </div>
    </section>
  );
}