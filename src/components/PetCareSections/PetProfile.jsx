export default function PetProfile() {
  const profile = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    vaccinations: "Up to date (Rabies, DHPP, Bordetella)"
  };

  return (
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">🐶 Pet Profile</h3>
      <ul className="text-gray-700 leading-relaxed space-y-1">
        <li><b>Name:</b> {profile.name}</li>
        <li><b>Species:</b> {profile.species}</li>
        <li><b>Breed:</b> {profile.breed}</li>
        <li><b>Age:</b> {profile.age}</li>
        <li><b>Vaccinations:</b> {profile.vaccinations}</li>
      </ul>
    </div>
  );
}
