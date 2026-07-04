import React, { useRef, useState, useEffect } from "react";

const Card3D = ({ children, className = "", intensity = 15, scale = 1.02 }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Mouse coordinates relative to card center normalized (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // 3D rotation styles based on coordinates
  const rotateX = -coords.y * intensity;
  const rotateY = coords.x * intensity;

  const cardStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.2s ease" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`transform-3d ${className}`}
    >
      {/* Glare effect overlay */}
      {!isMobile && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-20 opacity-30 mix-blend-color-dodge transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 220px at ${(coords.x + 0.5) * 100}% ${(coords.y + 0.5) * 100}%, rgba(255, 255, 255, 0.4), transparent)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Card3D;
