import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </motion.div>
  );
}
