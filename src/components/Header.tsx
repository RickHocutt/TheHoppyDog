import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/70 backdrop-blur-md border-b border-amber-600/10'
        : 'bg-gray-900 border-b border-amber-600/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🐕</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">The Hoppy Dog</h1>
              <p className="text-amber-400 text-xs">Indoor Dog Park & Taproom</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer ${
                  currentPage === page.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800/50'
                }`}
              >
                {page.label}
              </button>
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
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                    currentPage === page.id
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800/50'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
