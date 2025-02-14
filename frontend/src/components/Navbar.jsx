import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left Section: Logo & Courses */}
        <div className="flex items-center gap-6">
          <span className="text-2xl font-bold text-gray-900">LOGO</span>
          <button className="hidden md:block px-5 py-2 text-gray-800 border border-gray-300 rounded-lg transition hover:bg-gray-100">
            Courses
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Fullscreen Overlay */}
        <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-lg text-gray-800 transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} md:hidden`}>
          <ul className="text-center space-y-6 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>For Business</a></li>
            <li><a href="#" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Resources</a></li>
            <li><a href="#" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>More</a></li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg transition hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Login
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Try for free
            </button>
          </div>

          {/* Close Button */}
          <button className="absolute top-6 right-6 text-gray-800" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-6 text-gray-700 text-lg font-medium">
            <li><a href="#" className="hover:text-blue-600 transition">For Business</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Resources</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">More</a></li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-6">
            <button className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg transition hover:bg-gray-100">
              Login
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
