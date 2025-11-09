import { useEffect, useState } from "react";

export default function GeoLocation() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude.toFixed(3),
          lon: pos.coords.longitude.toFixed(3),
        });
      },
      (err) => setError("Location access denied.")
    );
  }, []);

  return (
    <span className="font-mono text-sm text-gray-700">
      {error
        ? error
        : location.lat
        ? `📍 ${location.lat}, ${location.lon}`
        : "📍 Locating..."}
    </span>
  );
}
