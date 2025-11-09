import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "/images/food1.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const roles = [
    { id: "petowner", label: "Pet Owner", icon: "🐾", path: "/petowner" },
    { id: "veterinarian", label: "Veterinarian", icon: "🩺", path: "/veterinarian" },
    { id: "shelter", label: "Animal Shelter", icon: "🏠", path: "/shelter" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role) {
      setError("Please enter your name and select a role.");
      return;
    }
    setError("");
    localStorage.setItem("userName", name);
    localStorage.setItem("userRole", role);
    const selected = roles.find((r) => r.id === role);
    navigate(selected.path);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-16">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-blue-700 leading-tight mb-4">
            Welcome to <span className="text-blue-600">FurEver Care</span> 🐾
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            A smart platform connecting pet owners, veterinarians, and shelters —
            making pet care simple, connected, and joyful.
          </p>
        </div>

        <motion.img
          src={heroImg}
          alt="Happy pets"
          className="md:w-1/2 w-80 mx-auto rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </section>

      {/* Input + Role Selection Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Let’s Get Started
        </h2>
        <p className="text-gray-600 mb-6">
          Please enter your name and choose your role to continue.
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        {/* Role Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {roles.map((r) => (
            <motion.button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl border-2 text-sm font-medium ${
                role === r.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100"
              }`}
            >
              <div className="text-3xl mb-1">{r.icon}</div>
              {r.label}
            </motion.button>
          ))}
        </div>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md font-semibold w-full"
        >
          Continue →
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
