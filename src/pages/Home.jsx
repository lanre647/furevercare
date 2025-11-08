import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name || !role) return alert("Please enter your name and select a role!");
    localStorage.setItem("userName", name);
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-5xl font-bold text-blue-700 mb-2">🐾 FurEver Care</h1>
      <p className="text-gray-600 mb-6">They Deserve Forever Love</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-64 text-center mb-4"
      />

      <div className="flex gap-6 mb-4">
        {["PetOwner", "Veterinarian", "Shelter"].map((r) => (
          <label key={r} className="flex items-center gap-2">
            <input type="radio" name="role" value={r} onChange={() => setRole(r)} />
            {r}
          </label>
        ))}
      </div>

      <button
        onClick={handleStart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow"
      >
        Get Started
      </button>
    </div>
  );
}
