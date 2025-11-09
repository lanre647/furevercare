import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/petowner", label: "Pet Owner" },
    { path: "/veterinarian", label: "Veterinarian" },
    { path: "/shelter", label: "Shelter" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/feedback", label: "Feedback" }
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 shadow-sm mb-3.5 ${
        scrolling ? "bg-white/90 backdrop-blur-md" : "bg-blue-600"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-2xl font-bold text-white">
          FurEver Care 🐾
        </Link>
        <div className="hidden md:flex gap-5">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-yellow-300 underline"
                  : "text-white hover:text-yellow-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
