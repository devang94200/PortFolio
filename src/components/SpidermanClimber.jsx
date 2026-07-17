import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const SpidermanClimber = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress (0 to 1) to vertical position on screen (from top margin to bottom margin)
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "82vh"]);
  
  const [isScrolling, setIsScrolling] = useState(false);
  const [wiggle, setWiggle] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolling(true);
    // Create alternating wiggle pattern based on scroll progress
    setWiggle(Math.sin(latest * 150) * 15);
  });

  useEffect(() => {
    if (!isScrolling) return;
    const timer = setTimeout(() => setIsScrolling(false), 300);
    return () => clearTimeout(timer);
  }, [isScrolling, scrollYProgress]);

  return (
    <div className="fixed left-2 sm:left-4 lg:left-6 top-0 bottom-0 w-12 z-[999] pointer-events-none hidden md:flex flex-col items-center justify-center">
      {/* Spider Web Thread */}
      <div className="w-[1.5px] h-full bg-gradient-to-b from-[var(--accent-color)]/20 via-[var(--accent-color)]/40 to-[var(--accent-color)]/20 absolute left-1/2 -translate-x-1/2 border-l border-dashed border-[var(--accent-color)]/30" />

      {/* Spider-Man Character */}
      <motion.div 
        style={{ y, rotate: isScrolling ? wiggle * 0.15 : 0 }}
        className="absolute w-12 h-12 flex items-center justify-center"
      >
        <svg viewBox="0 0 60 60" className="w-12 h-12 drop-shadow-sm">
          {/* Left Arm climbing */}
          <motion.path 
            d="M30,25 Q15,15 12,28" 
            stroke="#d05a5a" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none" 
            animate={{ d: isScrolling ? `M30,25 Q15,${14 + wiggle} 12,28` : "M30,25 Q15,18 12,28" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />

          {/* Right Arm climbing */}
          <motion.path 
            d="M30,25 Q45,15 48,28" 
            stroke="#d05a5a" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none"
            animate={{ d: isScrolling ? `M30,25 Q45,${14 - wiggle} 48,28` : "M30,25 Q45,18 48,28" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />

          {/* Left Leg climbing */}
          <motion.path 
            d="M24,42 Q12,50 16,56" 
            stroke="#d05a5a" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none"
            animate={{ d: isScrolling ? `M24,42 Q12,${52 - wiggle} 16,56` : "M24,42 Q12,52 16,56" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />

          {/* Right Leg climbing */}
          <motion.path 
            d="M36,42 Q48,50 44,56" 
            stroke="#d05a5a" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none"
            animate={{ d: isScrolling ? `M36,42 Q48,${52 + wiggle} 44,56` : "M36,42 Q48,52 44,56" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />

          {/* Blue Suit torso with soft dark border */}
          <rect x="21" y="23" width="18" height="20" rx="9" fill="#5a7fa3" stroke="#2d2724" strokeWidth="1.5" />
          
          {/* Spider Web Emblem on chest */}
          <circle cx="30" cy="31" r="3" fill="#d05a5a" />
          <path d="M30,27 L30,35 M26,31 L34,31" stroke="#2d2724" strokeWidth="1" />

          {/* Red Mask head */}
          <circle cx="30" cy="16" r="9.5" fill="#d05a5a" stroke="#2d2724" strokeWidth="1.5" />
          
          {/* Spidey White Eyes */}
          <path d="M24,16 Q27,17 28,14 Q28,18 24,18 Z" fill="white" stroke="#2d2724" strokeWidth="1.2" />
          <path d="M36,16 Q33,17 32,14 Q32,18 36,18 Z" fill="white" stroke="#2d2724" strokeWidth="1.2" />
        </svg>
      </motion.div>
    </div>
  );
};

export default SpidermanClimber;
