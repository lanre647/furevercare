import { motion } from "framer-motion";

export default function PetCard({ pet, onAdopt }) {
  const isAvailable = pet.status === "Available";

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg"
    >
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-blue-700">{pet.name}</h3>
        <p className="text-gray-600">{pet.type} • {pet.age}</p>
        <p className="text-sm text-gray-500 mt-2">{pet.description}</p>
        <span
          className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {pet.status}
        </span>

        {isAvailable && (
          <motion.button
            onClick={() => onAdopt(pet)}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-sm"
          >
            Adopt Me 🐾
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
