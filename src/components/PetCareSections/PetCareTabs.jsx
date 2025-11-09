import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PetProfile from "./PetProfile";
import FeedingGuide from "./FeedingGuide";
import GroomingVideos from "./GroomingVideos";
import HealthTips from "./HealthTips";
import TrainingTips from "./TrainingTips";

export default function PetCareTabs() {
  const tabs = ["Profile", "Feeding", "Grooming", "Health", "Training"];

  // 🧠 Load last active tab from localStorage (default to "Profile")
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activeTab") || "Profile";
  });

  // 💾 Save active tab whenever it changes
  useEffect(() => {
    localStorage.setItem("activeTab", active);
  }, [active]);

  // 🎞 Animation variants
  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const renderTabContent = () => {
    switch (active) {
      case "Profile":
        return <PetProfile />;
      case "Feeding":
        return <FeedingGuide />;
      case "Grooming":
        return <GroomingVideos />;
      case "Health":
        return <HealthTips />;
      case "Training":
        return <TrainingTips />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg mt-10">
      {/* 🏷 Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
              active === tab
                ? "bg-blue-600 text-white scale-105"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🎞 Animated Tab Content */}
      <div className="min-h-[300px] flex justify-center items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
