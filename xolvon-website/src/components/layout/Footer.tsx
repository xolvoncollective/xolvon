import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Copy */}
        <div className="text-center md:text-left">
          <p className="mb-2 text-white font-medium">PT Xolvon Kehidupan Cerdas Abadi</p>
          <p className="text-sm">Jakarta, Indonesia</p>
          <p className="text-xs mt-4">© {new Date().getFullYear()} Project Xolvon. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
          <a href="#" className="hover:text-purple-400 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500 rounded px-1">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500 rounded px-1">Terms of Service</a>
          
          <div className="flex items-center gap-4 mt-2 sm:mt-0 sm:ml-4 pl-0 sm:pl-4 sm:border-l border-gray-700">
            <a 
              href="https://www.instagram.com/projectxolvon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact Us on Instagram"
              className="text-gray-400 hover:text-purple-500 transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-purple-500 rounded p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <div className="flex flex-col text-xs text-left">
              <span>@projectxolvon</span>
              <span>@xolvon.ai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
