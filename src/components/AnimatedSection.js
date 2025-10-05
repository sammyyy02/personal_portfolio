import React from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      ref={ref}
      className={`animated-section ${inView ? 'in-view' : ''}`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
