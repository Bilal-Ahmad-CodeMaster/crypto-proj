export default function ResultCards() {
    const items = [
        { label: "Profit per day", value: "$ 3.15" },
        { label: "Profit per week", value: "$ 22.08" },
        { label: "Profit per month", value: "$ 94.64" },
        { label: "Profit per year", value: "$ 1,151.46" },
    ];

    return (
        <div className="grid gap-4 w-full lg:grid-cols-2">
            {items.map((i) => (
                <div key={i.label} className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <div className="text-gray-700 text-sm">{i.label}</div>
                    <div className="text-2xl font-semibold text-green-700">{i.value}</div>
                </div>
            ))}
        </div>
    );
}
