import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { metrics } from '../../data/metrics';
import Section from '../common/Section';

const Counter = ({ value }: { value: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (node && isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(value) {
          if (node) {
            // Check if it's a floating point number based on value
            const formatted = value % 1 !== 0 || value < 10 ? value.toFixed(1) : Math.floor(value);
            node.textContent = formatted.toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={nodeRef}>0</span>;
};

const MetricsDisplay: React.FC = () => {
  return (
    <Section className="bg-[var(--purple-primary)] py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center text-white"
          >
            <div className="text-3xl md:text-4xl font-extrabold font-poppins mb-2 flex items-center justify-center">
              {metric.value.includes('~') && '~'}
              <Counter value={metric.numericValue} />
              {metric.value.includes('+') && '+'}
              {metric.value.includes('k') && 'k+'}
              {metric.value.includes('M') && 'M'}
              {metric.unit && metric.unit}
            </div>
            <p className="text-sm md:text-base text-[var(--purple-light)] font-poppins font-medium">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default MetricsDisplay;
