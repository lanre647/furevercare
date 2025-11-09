import { motion } from "framer-motion";

export default function VetCard({ vet }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={vet.image}
        alt={vet.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-blue-700">{vet.name}</h3>
        <p className="text-gray-600 mb-2">{vet.specialization}</p>
        <p className="text-sm text-gray-500 mb-1">📧 {vet.contact}</p>
        <p className="text-sm text-gray-500 mb-3">📞 {vet.phone}</p>

        <h4 className="font-semibold text-blue-600 mt-3">Available Slots</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {vet.slots.map((slot, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 text-xs md:text-sm px-3 py-1 rounded-full"
            >
              {slot}
            </span>
          ))}
        </div>

        <h4 className="font-semibold text-blue-600 mt-4">Recent Cases</h4>
        <ul className="mt-2 text-sm text-gray-700 space-y-1 text-left">
          {vet.cases.map((c, i) => (
            <li key={i}>
              🐾 <b>{c.pet}</b> — {c.condition}: <i>{c.treatment}</i>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
