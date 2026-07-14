interface Props {
  title: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({
  title,
  description,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-3xl border p-8 text-left transition-all duration-300 ${
        selected
          ? "border-blue-600 bg-blue-50 shadow-lg"
          : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg"
      }`}
    >
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-slate-600">
          {description}
        </p>
      )}
    </button>
  );
}