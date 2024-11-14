import { Code2, BookOpen, Briefcase, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Let's Code</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
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
    </nav>
  );
}