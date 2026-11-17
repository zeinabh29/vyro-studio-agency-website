import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, textarea, select');
      if (interactive) {
        setIsHovering(true);
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovering ? (cursorText ? 44 : 28) : 16),
          y: mousePosition.y - (isHovering ? (cursorText ? 44 : 28) : 16),
          width: isHovering ? (cursorText ? 88 : 56) : 32,
          height: isHovering ? (cursorText ? 88 : 56) : 32,
          backgroundColor: isHovering ? 'rgba(166, 255, 77, 0.95)' : 'rgba(166, 255, 77, 0.08)',
          borderColor: isHovering ? '#A6FF4D' : 'rgba(166, 255, 77, 0.45)',
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          borderWidth: isHovering && cursorText ? '0px' : '1px',
          borderStyle: 'solid',
        }}
      >
        {cursorText && (
          <span className="text-[11px] font-bold text-[#101116] uppercase tracking-wider font-mono">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#A6FF4D] rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 35,
            stiffness: 450,
          }}
        />
      )}
    </div>
  );
};
