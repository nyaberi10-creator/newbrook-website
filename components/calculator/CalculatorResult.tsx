interface Props {
  total: number;
}

export default function CalculatorResult({
  total,
}: Props) {
  return (
    <div className="rounded-3xl bg-blue-600 p-10 text-white">

      <h2 className="text-3xl font-black">
        Estimated Investment
      </h2>

      <p className="mt-8 text-6xl font-black">
        ${total.toLocaleString()}
      </p>

      <p className="mt-6 text-lg text-blue-100">
        This estimate provides a general starting point. After learning
        more about your goals, we'll prepare a detailed proposal tailored
        to your project.
      </p>

    </div>
  );
}