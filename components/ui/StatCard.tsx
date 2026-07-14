interface StatCardProps {
  title: string;
  description: string;
}

export default function StatCard({
  title,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

      <h3 className="text-4xl font-black text-blue-600">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

    </div>
  );
}