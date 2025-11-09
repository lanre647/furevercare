export default function TrainingTips() {
  const tips = [
    "Use positive reinforcement — reward your pet for good behavior.",
    "Keep training sessions short and consistent.",
    "Be patient — pets learn through repetition.",
    "Use calm tone and consistent commands."
  ];

  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">🎓 Training Tips</h3>
      <ul className="list-disc text-gray-700 max-w-lg mx-auto text-left space-y-2">
        {tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
