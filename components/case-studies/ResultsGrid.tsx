interface Props {
  results: string[];
}

export default function ResultsGrid({ results }: Props) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">

      {results.map((result) => (

        <div
          key={result}
          className="rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center"
        >
          <h3 className="text-3xl font-black text-blue-700">
            {result}
          </h3>
        </div>

      ))}

    </div>
  );
}