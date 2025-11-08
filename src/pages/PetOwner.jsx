export default function PetOwner() {
  const name = localStorage.getItem("userName");
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-2">
        Welcome, {name}! 🐶
      </h2>
      <p className="text-gray-600">
        This is your Pet Owner dashboard. Soon you’ll see pet profiles, feeding
        guides, grooming videos, and more here!
      </p>
    </div>
  );
}
