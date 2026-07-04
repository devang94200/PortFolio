import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const emojiData = [
  { emoji: "🚀", top: 12, left: 15, size: "text-3xl md:text-5xl", speed: 6 },
  { emoji: "💻", top: 25, left: 80, size: "text-2xl md:text-4xl", speed: 8 },
  { emoji: "⚡", top: 45, left: 8,  size: "text-3xl md:text-5xl", speed: 5 },
  { emoji: "🪐", top: 60, left: 85, size: "text-4xl md:text-6xl", speed: 9 },
  { emoji: "🎨", top: 82, left: 12, size: "text-2xl md:text-4xl", speed: 7 },
  { emoji: "🧠", top: 35, left: 50, size: "text-3xl md:text-5xl", speed: 10 },
  { emoji: "🔥", top: 75, left: 75, size: "text-3xl md:text-5xl", speed: 6 },
  { emoji: "🛸", top: 8,  left: 70, size: "text-3xl md:text-4xl", speed: 11 },
  { emoji: "👾", top: 55, left: 22, size: "text-2xl md:text-4xl", speed: 7 }
];

const FloatingEmojis = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {emojiData.map((item, idx) => {
        return (
          <EmojiNode
            key={idx}
            item={item}
            mousePos={mousePos}
            isMobile={isMobile}
          />
        );
      })}
    </div>
  );
};

const EmojiNode = ({ item, mousePos, isMobile }) => {
  const nodeRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;
    const node = nodeRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const nodeX = rect.left + rect.width / 2;
    const nodeY = rect.top + rect.height / 2;

    const dx = mousePos.x - nodeX;
    const dy = mousePos.y - nodeY;
    const distance = Math.hypot(dx, dy);

    // Dudge radius of 200px
    if (distance < 200) {
      const force = (200 - distance) / 2; // strength of push
      const angle = Math.atan2(dy, dx);
      // Push emoji away from mouse coordinates
      setOffset({
        x: -Math.cos(angle) * force,
        y: -Math.sin(angle) * force
      });
    } else {
      // Ease back to original coordinate
      setOffset((prev) => ({
        x: prev.x * 0.9,
        y: prev.y * 0.9
      }));
    }
  }, [mousePos, isMobile]);

  return (
    <motion.div
      ref={nodeRef}
      className={`absolute select-none pointer-events-auto cursor-grab active:cursor-grabbing hover:z-10 ${item.size}`}
      style={{
        top: `${item.top}%`,
        left: `${item.left}%`,
        animation: `float-emoji ${item.speed}s ease-in-out infinite`
      }}
      animate={{
        x: offset.x,
        y: offset.y
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      whileHover={{
        scale: 1.3,
        rotate: 15,
        transition: { duration: 0.2 }
      }}
    >
      {item.emoji}
    </motion.div>
  );
};

export default FloatingEmojis;
