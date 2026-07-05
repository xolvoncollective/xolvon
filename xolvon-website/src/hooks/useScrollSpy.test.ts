import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useScrollSpy } from './useScrollSpy';

describe('useScrollSpy hook', () => {
  let mockGetElementById: any;

  beforeEach(() => {
    mockGetElementById = vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      // Mock elements with different bounding rects to simulate scrolling
      if (id === 'section1') {
        return {
          getBoundingClientRect: () => ({ top: -100, bottom: 500 }),
        } as HTMLElement;
      }
      if (id === 'section2') {
        return {
          getBoundingClientRect: () => ({ top: 550, bottom: 1000 }),
        } as HTMLElement;
      }
      return null;
    });
  });

  afterEach(() => {
    mockGetElementById.mockRestore();
  });

  it('identifies the active section based on scroll position', () => {
    const { result } = renderHook(() => useScrollSpy(['section1', 'section2'], 100));
    
    // Initially, section1 should be active because its top <= 100 and bottom >= 100
    expect(result.current).toBe('section1');
  });
});
