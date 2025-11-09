import { motion, AnimatePresence } from "framer-motion";

export default function AdoptModal({ pet, onClose }) {
  if (!pet) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 text-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          >
            ✖
          </button>

          <img
            src={pet.image}
            alt={pet.name}
            className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-700">{pet.name}</h3>
          <p className="text-gray-600 mb-3">{pet.type} • {pet.age}</p>
          <p className="text-gray-500 text-sm mb-5 px-3">{pet.description}</p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full"
            onClick={() => {
              alert(`Thank you for your interest in adopting ${pet.name}!`);
              onClose();
            }}
          >
            Confirm Adoption 💚
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
