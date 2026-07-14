interface Props {
  challenge: string;
  solution: string;
}

export default function ChallengeSolution({
  challenge,
  solution,
}: Props) {
  return (
    <section className="grid gap-10 lg:grid-cols-2">

      <div className="rounded-3xl bg-red-50 p-10">

        <h2 className="text-3xl font-black text-slate-900">
          The Challenge
        </h2>

        <p className="mt-6 leading-8 text-slate-700">
          {challenge}
        </p>

      </div>

      <div className="rounded-3xl bg-green-50 p-10">

        <h2 className="text-3xl font-black text-slate-900">
          The Solution
        </h2>

        <p className="mt-6 leading-8 text-slate-700">
          {solution}
        </p>

      </div>

    </section>
  );
}