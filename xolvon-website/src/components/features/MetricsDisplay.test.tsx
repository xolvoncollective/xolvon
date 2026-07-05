import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MetricsDisplay from './MetricsDisplay';
import { metrics } from '../../data/metrics';

// Mock motion to skip animations during testing
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
  animate: () => ({ stop: vi.fn() }),
}));

describe('MetricsDisplay Component', () => {
  it('renders all metrics', () => {
    render(<MetricsDisplay />);
    
    // Verify each metric label is rendered
    metrics.forEach(metric => {
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it('renders counter fallback or initial value', () => {
    render(<MetricsDisplay />);
    
    // Since animation is mocked to do nothing but return stop, 
    // the value might stay at 0 or update based on effect.
    // At minimum, we should see the initial 0s or the text.
    const zeroes = screen.getAllByText('0');
    expect(zeroes.length).toBeGreaterThan(0);
  });
});
