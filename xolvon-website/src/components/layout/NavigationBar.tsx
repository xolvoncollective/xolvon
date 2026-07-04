import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

const NavigationBar: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu, activeSection } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Team', href: '#team' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-50 focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded" onClick={closeMenu}>
          <span className="text-2xl font-extrabold text-[var(--purple-primary)] font-poppins tracking-tight">
            Xolvon<span className="text-[var(--blue-primary)]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-poppins font-medium transition-colors duration-200 hover:text-[var(--purple-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded ${
                activeSection === link.href.substring(1) && isHomePage
                  ? 'text-[var(--purple-primary)]'
                  : 'text-[var(--gray-800)]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/projectxolvon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[var(--purple-primary)] text-white font-poppins font-semibold rounded-lg hover:bg-[var(--purple-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 z-50 text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-poppins font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded ${
                activeSection === link.href.substring(1) && isHomePage
                  ? 'text-[var(--purple-primary)]'
                  : 'text-[var(--gray-800)]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/projectxolvon"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 bg-[var(--purple-primary)] text-white font-poppins font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
