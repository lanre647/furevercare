import React from "react";
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🐾 FurEver Care</h1>
      <p className="text-gray-600 text-lg">
        Tailwind CSS is working perfectly!
      </p>
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow">
        Get Started
      </button>
    </div>
  );
};

export default App;
