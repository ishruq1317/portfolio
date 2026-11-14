'use client';

import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);
  const mouseX = useSpring(rawX, { damping: 25, stiffness: 150 });
  const mouseY = useSpring(rawY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawX, rawY]);

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.03) 45%, transparent 75%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{ background }}
    />
  );
}
