import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-2xl font-bold text-purple-700 tracking-tight">Xolvon<span className="text-cyan-500">.</span></span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-purple-700 font-medium text-sm transition-colors">Home</button>
          <button onClick={() => navigate('/projects')} className="text-gray-600 hover:text-purple-700 font-medium text-sm transition-colors">Projects</button>
          <button onClick={() => scrollToSection('capabilities')} className="text-gray-600 hover:text-purple-700 font-medium text-sm transition-colors">Capabilities</button>
          <button onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-purple-700 font-medium text-sm transition-colors">Team</button>
        </div>

        {/* CTA */}
        <button 
          onClick={() => navigate('/projects')}
          className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
