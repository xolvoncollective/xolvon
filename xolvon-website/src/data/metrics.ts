/**
 * Metrics data for Xolvon Comprehensive Website
 * Six achievement metrics showcasing Xolvon's track record
 */

import type { Metric } from '../types/metric';

export const metrics: Metric[] = [
  {
    id: 'field-experiments',
    value: '45+',
    numericValue: 45,
    label: 'field experiments shipped'
  },
  {
    id: 'reusable-playbooks',
    value: '120',
    numericValue: 120,
    label: 'reusable playbooks'
  },
  {
    id: 'automation-hours',
    value: '1.4k+',
    numericValue: 1400,
    unit: 'mo',
    label: 'automation hours/mo'
  },
  {
    id: 'real-time-signals',
    value: '2.7M',
    numericValue: 2700000,
    unit: 'mo',
    label: 'real-time signals/mo'
  },
  {
    id: 'data-assets',
    value: '420+',
    numericValue: 420,
    label: 'data assets'
  },
  {
    id: 'avg-response',
    value: '~38s',
    numericValue: 38,
    unit: 's',
    label: 'avg response'
  }
];
