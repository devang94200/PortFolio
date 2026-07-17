import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const ClimberInstance = ({ leftPos, startY, endY, scrollYProgress, speedFactor, wiggleOffset }) => {
  // Translate scrollProgress to background Y position
  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);
  
  const [isScrolling, setIsScrolling] = useState(false);
  const [wiggle, setWiggle] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolling(true);
    // Create alternating crawl leg angles using math
    setWiggle(Math.sin(latest * 180 + wiggleOffset) * 15);
  });

  useEffect(() => {
    if (!isScrolling) return;
    const timer = setTimeout(() => setIsScrolling(false), 300);
    return () => clearTimeout(timer);
  }, [isScrolling]);

  return (
    <div 
      className="absolute top-0 bottom-0 w-16 pointer-events-none flex flex-col items-center justify-center"
      style={{ left: leftPos }}
    >
      {/* Dashed Web Thread */}
      <div className="w-[1.5px] h-full bg-gradient-to-b from-[var(--accent-color)]/5 via-[var(--accent-color)]/20 to-[var(--accent-color)]/5 absolute left-1/2 -translate-x-1/2 border-l border-dashed border-[var(--accent-color)]/20" />

      {/* Spider-Man SVG Character */}
      <motion.div 
        style={{ y, rotate: isScrolling ? wiggle * 0.15 : 0 }}
        className="absolute w-16 h-16 flex items-center justify-center"
      >
        <svg viewBox="0 0 60 60" className="w-14 h-14 drop-shadow-[2px_4px_6px_rgba(196,149,106,0.12)]">
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

          {/* Torso */}
          <rect x="21" y="23" width="18" height="20" rx="9" fill="#5a7fa3" stroke="#2d2724" strokeWidth="1.5" />
          
          {/* Emblem */}
          <circle cx="30" cy="31" r="3" fill="#d05a5a" />
          <path d="M30,27 L30,35 M26,31 L34,31" stroke="#2d2724" strokeWidth="1" />

          {/* Head */}
          <circle cx="30" cy="16" r="9.5" fill="#d05a5a" stroke="#2d2724" strokeWidth="1.5" />
          
          {/* Eyes */}
          <path d="M24,16 Q27,17 28,14 Q28,18 24,18 Z" fill="white" stroke="#2d2724" strokeWidth="1.2" />
          <path d="M36,16 Q33,17 32,14 Q32,18 36,18 Z" fill="white" stroke="#2d2724" strokeWidth="1.2" />
        </svg>
      </motion.div>
    </div>
  );
};

const SpidermanBgClimber = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden opacity-[0.22]">
      {/* Climber 1: Left background strand, climbs from bottom to top */}
      <ClimberInstance 
        leftPos="10%" 
        startY="105vh" 
        endY="-10vh" 
        scrollYProgress={scrollYProgress} 
        wiggleOffset={0} 
      />

      {/* Climber 2: Middle right background strand, climbs slower */}
      <ClimberInstance 
        leftPos="48%" 
        startY="140vh" 
        endY="-25vh" 
        scrollYProgress={scrollYProgress} 
        wiggleOffset={100} 
      />

      {/* Climber 3: Right background strand, climbs at different offset */}
      <ClimberInstance 
        leftPos="85%" 
        startY="120vh" 
        endY="-15vh" 
        scrollYProgress={scrollYProgress} 
        wiggleOffset={200} 
      />
    </div>
  );
};

export default SpidermanBgClimber;
