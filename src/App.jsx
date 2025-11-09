import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PetOwner from "./pages/PetOwner";
import Veterinarian from "./pages/Veterinarian";
import Shelter from "./pages/Shelter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // start loader whenever path changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // short delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
        <Routes location={location} key={location.pathname}>
          {[
            { path: "/", element: <Home /> },
            { path: "/petowner", element: <PetOwner /> },
            { path: "/veterinarian", element: <Veterinarian /> },
            { path: "/shelter", element: <Shelter /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/feedback", element: <Feedback /> },
          ].map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div {...pageTransition} className="min-h-[70vh]">
                  {element}
                </motion.div>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="grow overflow-hidden">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
