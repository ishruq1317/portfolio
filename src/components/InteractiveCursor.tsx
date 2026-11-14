'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

function subscribeFinePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(pointer: fine)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

function getServerPointerSnapshot() {
  return false;
}

export default function InteractiveCursor() {
  const isFinePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getServerPointerSnapshot
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact mouse positions
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth spring for trailing ring
  const ringX = useSpring(rawX, { damping: 28, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(rawY, { damping: 28, stiffness: 220, mass: 0.5 });

  // Spring for ambient background light
  const ambientX = useSpring(rawX, { damping: 35, stiffness: 120 });
  const ambientY = useSpring(rawY, { damping: 35, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover on interactive targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-target, [data-interactive="true"]'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [rawX, rawY]);

  const ambientBg = useMotionTemplate`radial-gradient(650px circle at ${ambientX}px ${ambientY}px, rgba(139, 92, 246, 0.09), rgba(6, 182, 212, 0.04) 45%, transparent 75%)`;

  return (
    <>
      {/* Ambient Cursor Light in Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: ambientBg,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Custom Trailing Ring & Dot Cursor (fine pointers / desktop only) */}
      {isFinePointer && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {/* Outer Trailing Ring */}
          <motion.div
            style={{
              x: ringX,
              y: ringY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
              opacity: isVisible ? (isHovered ? 0.9 : 0.6) : 0,
              borderColor: isHovered ? 'rgba(56, 189, 248, 0.85)' : 'rgba(167, 139, 250, 0.6)',
              backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
            }}
            transition={{
              scale: { type: 'spring', damping: 20, stiffness: 300 },
              opacity: { duration: 0.15 },
              borderColor: { duration: 0.2 },
              backgroundColor: { duration: 0.2 },
            }}
            className="w-9 h-9 rounded-full border border-violet-400/60 shadow-[0_0_15px_rgba(139,92,246,0.25)]"
          />

          {/* Central Precision Dot */}
          <motion.div
            style={{
              x: rawX,
              y: rawY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isHovered ? 0.5 : isClicking ? 1.4 : 1,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
          />
        </div>
      )}
    </>
  );
}
