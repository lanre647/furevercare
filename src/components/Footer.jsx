import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-blue-700 text-white mt-10 p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-center gap-4 mb-3">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/feedback" className="hover:underline">Feedback</Link>
      </div>

      <div className="flex justify-center gap-4 mb-3">
        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          🌐
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          🐦
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          📸
        </motion.a>
      </div>

      <p className="text-sm text-blue-100">
        © {year} FurEver Care | All rights reserved 🐾
      </p>
    </motion.footer>
  );
}
