export default function FeedingGuide() {
  const feedingData = [
    { type: "Puppy (0-6 months)", meals: "3–4 times/day", food: "Puppy dry/wet food, high protein" },
    { type: "Adult Dog", meals: "2 times/day", food: "Balanced adult dry food, treats occasionally" },
    { type: "Cat", meals: "2–3 times/day", food: "High-protein cat food, occasional wet food" }
  ];

  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">🍽 Feeding Guide</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-xl">
        <thead>
          <tr className="bg-blue-100 text-blue-700">
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Meals/Day</th>
            <th className="py-2 px-4 border-b">Recommended Food</th>
          </tr>
        </thead>
        <tbody>
          {feedingData.map((row, idx) => (
            <tr key={idx} className="text-gray-700 border-b">
              <td className="py-2 px-4">{row.type}</td>
              <td className="py-2 px-4">{row.meals}</td>
              <td className="py-2 px-4">{row.food}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
