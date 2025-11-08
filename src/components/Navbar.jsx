import { Link } from "react-router-dom";

export default function Navbar() {
  const name = localStorage.getItem("userName");

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">FurEver Care</Link>
        <div className="flex gap-6 text-gray-600">
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/feedback" className="hover:text-blue-600">Feedback</Link>
        </div>
        {name && <span className="text-sm text-gray-500">Hi, {name}!</span>}
      </div>
    </nav>
  );
}
