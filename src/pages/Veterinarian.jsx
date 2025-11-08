export default function Veterinarian() {
  const name = localStorage.getItem("userName");
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-2">
        Hello Dr. {name}! 🩺
      </h2>
      <p className="text-gray-600">
        This is the Veterinarian page where you’ll view appointments and pet
        case studies.
      </p>
    </div>
  );
}
