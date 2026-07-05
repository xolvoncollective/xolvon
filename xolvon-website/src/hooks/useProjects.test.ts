import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useProjects } from './useProjects';

describe('useProjects hook', () => {
  it('throws an error if used outside of ProjectDataProvider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => renderHook(() => useProjects())).toThrow('useProjects must be used within a ProjectDataProvider');
    
    consoleSpy.mockRestore();
  });
});
