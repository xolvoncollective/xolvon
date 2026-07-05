import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import NavigationBar from './NavigationBar';
import { NavigationContext } from '../../contexts/NavigationContext';

const mockToggleMenu = vi.fn();
const mockCloseMenu = vi.fn();
const mockSetActiveSection = vi.fn();

const renderWithProviders = (ui: React.ReactElement, isMenuOpen = false, activeSection = '') => {
  return render(
    <BrowserRouter>
      <NavigationContext.Provider 
        value={{ 
          isMenuOpen, 
          toggleMenu: mockToggleMenu, 
          closeMenu: mockCloseMenu, 
          activeSection,
          setActiveSection: mockSetActiveSection
        }}
      >
        {ui}
      </NavigationContext.Provider>
    </BrowserRouter>
  );
};

describe('NavigationBar Component', () => {
  it('renders logo and desktop links', () => {
    renderWithProviders(<NavigationBar />);
    
    expect(screen.getByText('Xolvon')).toBeInTheDocument();
    
    // Links
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Projects')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Capabilities')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Team')[0]).toBeInTheDocument();
  });

  it('calls toggleMenu when mobile menu button is clicked', () => {
    renderWithProviders(<NavigationBar />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });

  it('calls closeMenu when a link is clicked', () => {
    renderWithProviders(<NavigationBar />);
    
    const homeLink = screen.getAllByText('Home')[0];
    fireEvent.click(homeLink);
    
    expect(mockCloseMenu).toHaveBeenCalled();
  });
});
