interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function Heading({
  eyebrow,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <span className="font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}