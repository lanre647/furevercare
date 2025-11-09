import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: "🐾",
      title: "Pet Owner Dashboard",
      desc: "Manage your pet’s feeding, grooming, and health guides — all in one place."
    },
    {
      icon: "🩺",
      title: "Veterinarian Access",
      desc: "View schedules, medical histories, and coordinate care with fellow vets."
    },
    {
      icon: "🏠",
      title: "Animal Shelter Portal",
      desc: "Browse and adopt lovable pets waiting for their forever homes."
    },
    {
      icon: "💬",
      title: "Feedback System",
      desc: "Share your experience to help improve FurEver Care for everyone."
    }
  ];

  return (
    <motion.div
      className="p-8 pt-24 bg-gradient-to-b from-blue-50 to-white min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4 text-center">
        About FurEver Care 🐶
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        FurEver Care is a web-based pet management platform designed to bring pet owners,
        veterinarians, and shelters together. Our mission is to enhance pet care through
        technology, ensuring that every furry friend gets the love, health, and attention
        they deserve.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-blue-500"
          >
            <div className="text-4xl mb-3">{feat.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {feat.title}
            </h3>
            <p className="text-gray-600">{feat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Our Mission 💙
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe pets are family. FurEver Care bridges the gap between technology
          and compassion — making pet care simpler, smarter, and more connected.
        </p>
      </div>
    </motion.div>
  );
}
