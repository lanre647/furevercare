import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) {
      alert("Please provide a rating and feedback comment.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setRating(0);
    setComment("");
  };

  const ratings = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="p-8 pt-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
        We Value Your Feedback 💬
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Your thoughts help us improve FurEver Care for pet owners and veterinarians alike.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
        whileHover={{ scale: 1.01 }}
      >
        <label className="block font-medium text-gray-700 mb-2">
          Rate your experience:
        </label>
        <div className="flex justify-center gap-2 mb-4">
          {ratings.map((r) => (
            <motion.button
              key={r}
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setRating(r)}
              className={`w-10 h-10 rounded-full text-white font-semibold transition ${
                rating >= r ? "bg-yellow-500" : "bg-gray-300"
              }`}
            >
              {r}⭐
            </motion.button>
          ))}
        </div>

        <label className="block font-medium text-gray-700 mb-2">Comments:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Share your experience..."
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-sm"
        >
          Submit Feedback
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-full"
          >
            🎉 Thank you for your feedback!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
