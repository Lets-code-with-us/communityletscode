import { useState } from 'react';
import { Code2, BookOpen, Briefcase, User, Menu, Home } from 'lucide-react'; // Import Home icon
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu after clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Let's Code</span>
            </Link>
          </div>

          {/* Right-side Menu */}
          <div className="flex items-center space-x-8">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Full Menu (visible on larger screens) */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Link */}
              <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                <Home className="h-5 w-5" /> {/* Home icon */}
                <span>Home</span>
              </Link>
              <a 
                href="https://roadmap.sh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              >
                <BookOpen className="h-5 w-5" />
                <span>Resources</span>
              </a>
              <a 
                href="https://wellfound.com/jobs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              >
                <Briefcase className="h-5 w-5" />
                <span>Jobs</span>
              </a>
              <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Collapsible Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-start px-4 pt-4 pb-2 space-y-2">
            {/* Home Link */}
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600" onClick={closeMenu}>
              <Home className="h-5 w-5" /> {/* Home icon */}
              <span>Home</span>
            </Link>
            <a 
              href="https://roadmap.sh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              onClick={closeMenu}
            >
              <BookOpen className="h-5 w-5" />
              <span>Resources</span>
            </a>
            <a 
              href="https://wellfound.com/jobs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              onClick={closeMenu}
            >
              <Briefcase className="h-5 w-5" />
              <span>Jobs</span>
            </a>
            <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600" onClick={closeMenu}>
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
