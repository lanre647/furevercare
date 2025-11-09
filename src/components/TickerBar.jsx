import { useEffect, useState } from "react";
import ClockTicker from "./ClockTicker";
import GeoLocation from "./GeoLocation";

export default function TickerBar() {
  const [messages, setMessages] = useState([
    "🐾 Welcome to FurEver Care!",
    "💡 Tip: Keep your pet hydrated during hot weather.",
    "🩺 Remember to schedule your pet’s vaccination checkup!",
    "🎾 Explore new toys in the product section!",
  ]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-blue-100 border-t border-b border-blue-300 py-2 text-center flex flex-col md:flex-row justify-around items-center text-sm">
      <span className="text-blue-700 font-medium animate-marquee w-full md:w-auto">
        {messages[current]}
      </span>
      <ClockTicker />
      <GeoLocation />
    </div>
  );
}
