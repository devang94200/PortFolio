import React, { useEffect, useRef } from "react";

const Canvas3DBg = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Particles
    const particleCount = Math.min(80, Math.floor((width * height) / 18000));
    const particles = [];
    const maxDistance = 120;

    class Particle3D {
      constructor() {
        this.x = (Math.random() - 0.5) * width;
        this.y = (Math.random() - 0.5) * height;
        this.z = (Math.random() - 0.5) * 800; // Depth
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Boundaries reset
        if (Math.abs(this.x) > width / 1.5) this.x = -this.x;
        if (Math.abs(this.y) > height / 1.5) this.y = -this.y;
        if (Math.abs(this.z) > 400) this.z = -this.z;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle3D());
    }

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseRef.current.tx = (e.clientX - width / 2) * 0.05;
      mouseRef.current.ty = (e.clientY - height / 2) * 0.05;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Perspective projection function
    const project = (x, y, z, rotationX, rotationY) => {
      // Rotate around Y axis
      let cosY = Math.cos(rotationY);
      let sinY = Math.sin(rotationY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // Rotate around X axis
      let cosX = Math.cos(rotationX);
      let sinX = Math.sin(rotationX);
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      // Perspective projection
      const fov = 400; // Field of view
      const scale = fov / (fov + z2);
      const projX = x1 * scale + width / 2;
      const projY = y2 * scale + height / 2;

      return { x: projX, y: projY, scale, visible: z2 > -fov };
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse coordinates for smooth rotation inertia
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      const rotationY = mouse.x * 0.005;
      const rotationX = -mouse.y * 0.005;

      // Update and project particles
      const projected = [];
      for (let p of particles) {
        p.update();
        const pt = project(p.x, p.y, p.z, rotationX, rotationY);
        if (pt.visible) {
          projected.push({ ...pt, particle: p });
        }
      }

      // Draw connections/mesh
      ctx.strokeStyle = "rgba(99, 102, 241, 0.07)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.15 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let p of projected) {
        const r = p.particle.radius * p.scale;
        if (r <= 0) continue;

        ctx.fillStyle = `rgba(139, 92, 246, ${0.2 * p.scale})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(99, 102, 241, 0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0; // Reset shadow for next cycles
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-transparent"
    />
  );
};

export default Canvas3DBg;
