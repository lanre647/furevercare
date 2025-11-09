import { useEffect, useState } from "react";

export default function ClockTicker() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-sm text-gray-700">
      🕒 {time.toLocaleTimeString()}
    </span>
  );
}
