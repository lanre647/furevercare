import { useEffect, useState } from "react";
import VetCard from "../components/VetCard";
import vetsData from "../data/vets.json";
import { motion, AnimatePresence } from "framer-motion";

export default function Veterinarian() {
  const name = localStorage.getItem("userName") || "Guest";
  const [vets, setVets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setVets(vetsData);
  }, []);

  const filteredVets = vets.filter((v) =>
    v.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
        Welcome, Dr. {name}! 🩺
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Manage veterinary staff information, time slots, and past medical cases.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Search by specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Vet Cards */}
      <AnimatePresence mode="wait">
        {filteredVets.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredVets.map((vet) => (
              <VetCard key={vet.id} vet={vet} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="noresult"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            No veterinarians found for “{search}”
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
