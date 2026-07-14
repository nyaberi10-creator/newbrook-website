interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: Props) {
  const progress = (current / total) * 100;

  return (
    <div className="mb-10">

      <div className="mb-4 flex items-center justify-between">

        <span className="font-semibold text-slate-600">
          Step {current} of {total}
        </span>

        <span className="font-semibold text-blue-600">
          {Math.round(progress)}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}