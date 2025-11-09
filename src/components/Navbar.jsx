import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/petowner", label: "Pet Owner" },
    { path: "/veterinarian", label: "Veterinarian" },
    { path: "/shelter", label: "Shelter" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/feedback", label: "Feedback" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "backdrop-blur-md bg-white/80 shadow-md"
          : "bg-gradient-to-r from-blue-700 to-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white drop-shadow-sm"
        >
          <Link to="/">FurEver Care 🐾</Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    scrolling
                      ? active
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      : active
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-300 rounded"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden bg-white/90 backdrop-blur-md flex flex-col items-center py-3 shadow-md`}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
