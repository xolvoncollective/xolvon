import React from 'react';
import { Link } from 'react-router-dom';
const Instagram = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import Heading from '../common/Heading';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--black)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-extrabold text-white font-poppins tracking-tight mb-4 block">
              Xolvon<span className="text-[var(--purple-light)]">.</span>
            </span>
            <p className="text-[var(--gray-500)] max-w-md font-poppins mb-6">
              67 Alpha-stage Digital Production Lab. Human-AI End-to-End Attention Systems solving society conundrums.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/projectxolvon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--gray-500)] hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
          
          <div>
            <Heading level={4} className="text-white mb-6">Platform</Heading>
            <ul className="space-y-3 font-poppins text-[var(--gray-500)]">
              <li><a href="/#projects" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Marketplace</a></li>
              <li><a href="/#capabilities" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Capabilities</a></li>
              <li><a href="/#team" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Team</a></li>
            </ul>
          </div>
          
          <div>
            <Heading level={4} className="text-white mb-6">Legal</Heading>
            <ul className="space-y-3 font-poppins text-[var(--gray-500)]">
              <li><Link to="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Terms of Service</Link></li>
              <li><a href="https://www.instagram.com/projectxolvon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--purple-primary)] rounded">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-poppins text-sm text-[var(--gray-500)]">
          <p>&copy; {currentYear} Project Xolvon. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Human-AI Collaboration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
