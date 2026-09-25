type Prop = {
  grams: number;
  minutes: number;
  layers: number;
};

export default function QuoteStatistics({ grams, minutes, layers }: Prop) {
  const statistics = [
    { label: "Filament", value: `${grams} g` },
    { label: "Print Time", value: `${minutes} min` },
    { label: "Layers", value: `${layers} layers` },
  ];
  return (
    <ul className="grid grid-cols-3 gap-4 ">
      {Object.values(statistics).map((stat) => (
        <li
          key={stat.label}
          className="flex flex-col bg-surface gap-4 p-4 rounded-lg border border-line-strong text-left"
        >
          <span className="text-2xl font-semibolduppercase">{stat.label} </span>
          <span className="text-xl">{stat.value}</span>
        </li>
      ))}
    </ul>
  );
}
