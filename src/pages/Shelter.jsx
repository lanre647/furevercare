import { useEffect, useState } from "react";
import petsData from "../data/shelterPets.json";
import PetCard from "../components/PetCard";
import AdoptModal from "../components/AdoptModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Shelter() {
  const [pets, setPets] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    setPets(petsData);
  }, []);

  const filteredPets = pets.filter((pet) => {
    const typeMatch = selectedType === "All" || pet.type === selectedType;
    const statusMatch =
      selectedStatus === "All" || pet.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  const petTypes = ["All", ...new Set(pets.map((p) => p.type))];
  const statuses = ["All", "Available", "Adopted"];

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
        Animal Shelter 🐶🐱
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Browse and adopt a loving companion from our shelter family.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {petTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedType === type
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedStatus === status
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Pet Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onAdopt={setSelectedPet} />
          ))}
        </motion.div>

        {filteredPets.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            No pets found for selected filters.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Adopt Modal */}
      <AdoptModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
    </motion.div>
  );
}
