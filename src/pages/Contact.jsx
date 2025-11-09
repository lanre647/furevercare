import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
        Contact Us 📬
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Have a question or want to reach out to our team? Fill in the form below.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
        whileHover={{ scale: 1.01 }}
      >
        <label className="block font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        <label className="block font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <label className="block font-medium text-gray-700 mb-1">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Your message here..."
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-sm"
        >
          Send Message
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
            ✅ Message sent! We’ll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
