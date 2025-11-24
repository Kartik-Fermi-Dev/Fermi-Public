import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import ColorLogoNoBackground from '../../imports/ColorLogoNoBackground1';

// Inline icons to avoid lucide-react runtime errors
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

type Page = 'home' | 'product' | 'brain' | 'about';

interface FermiHeaderProps {
  currentPage: Page | 'blog-post';
  onNavigate: (page: Page) => void;
}

export default function FermiHeader({ currentPage, onNavigate }: FermiHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Product', page: 'product' },
    { label: 'Brain', page: 'brain' },
    { label: 'About', page: 'about' },
  ];

  const isActive = (page: Page) => {
    if (currentPage === 'blog-post' && page === 'blog') return true;
    return currentPage === page;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-all hover:scale-105"
          >
            <div className="w-40 h-10 md:w-48 md:h-12">
              <ColorLogoNoBackground />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-base transition-all relative hover:-translate-y-0.5 ${
                  isActive(link.page)
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive(link.page) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFB800] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white rounded-md text-[16px]"
            >
              Request demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:scale-110 active:scale-90 transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-2 py-2 text-sm transition-all rounded-md hover:translate-x-1 ${
                    isActive(link.page)
                      ? 'text-gray-900 bg-[#C7E0F4]/20'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div>
                <Button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white w-full rounded-md mt-2"
                >
                  Request demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
