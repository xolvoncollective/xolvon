import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useNavigation } from './useNavigation';

describe('useNavigation hook', () => {
  it('throws an error if used outside of NavigationProvider', () => {
    // Suppress console.error for this expected error
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => renderHook(() => useNavigation())).toThrow('useNavigation must be used within a NavigationProvider');
    
    consoleSpy.mockRestore();
  });
});
