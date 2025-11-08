export default function Shelter() {
  const name = localStorage.getItem("userName");
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-2">
        Welcome to the Shelter Portal, {name}! 🐕
      </h2>
      <p className="text-gray-600">
        Here you’ll showcase adoptable pets and upcoming events.
      </p>
    </div>
  );
}
