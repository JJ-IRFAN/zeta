import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/IMG_6322.PNG" 
              alt="Zeta Innovations Logo" 
              className="h-10 w-10 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zeta Innovations
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <a
              href="#solutions"
              className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              AI Solutions
            </a>
            <a
              href="#founder"
              className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              About Founder
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                AI Solutions
              </a>
              <a
                href="#founder"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                About Founder
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;