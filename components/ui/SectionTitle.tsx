import Badge from "./Badge";

type Props = {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <Badge>{badge}</Badge>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}