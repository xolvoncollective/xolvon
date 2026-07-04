import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface NavigationContextType {
  isMenuOpen: boolean;
  activeSection: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveSection: (sectionId: string) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSectionState] = useState('');

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const setActiveSection = (sectionId: string) => setActiveSectionState(sectionId);

  return (
    <NavigationContext.Provider value={{ isMenuOpen, activeSection, toggleMenu, closeMenu, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};
