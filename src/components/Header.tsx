import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import smallLogo from '../assets/hoppy-dog-logo-sm.jpg';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pages = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (isActive: boolean) =>
    `px-4 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer ${
      isActive ? 'bg-amber-600 text-white shadow-lg' : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800/50'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/70 backdrop-blur-md border-b border-amber-600/10'
        : 'bg-gray-900 border-b border-amber-600/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={smallLogo} className="w-12 rounded-full" />
            <div style={{ fontFamily: "'Original Surfer', sans-serif" }}>
              <h1 className="text-white text-xl font-bold">The Hoppy Dog</h1>
              <p className="text-amber-400 text-xs">Indoor Dog Park & Taproom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <NavLink key={page.to} to={page.to} className={({ isActive }) => linkClass(isActive)}>
                {page.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all duration-200 ${
            isScrolled ? 'border-gray-700/50' : 'border-gray-700'
          }`}>
            <nav className="flex flex-col space-y-2">
              {pages.map((page) => (
                <NavLink
                  key={page.to}
                  to={page.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-amber-600 text-white' : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800/50'
                  }`}
                >
                  {page.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
