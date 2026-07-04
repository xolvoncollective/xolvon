import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = sectionId;
          }
        }
      }
      
      if (currentSection !== activeId && currentSection !== '') {
        setActiveId(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check immediately
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, activeId]);

  return activeId;
};
