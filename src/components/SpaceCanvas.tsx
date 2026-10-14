import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  sprite: HTMLCanvasElement;
  speed: number;
}

export const SpaceCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const colors = ["#00F5FF", "#835F9E", "#A378C6", "#ffffff", "#00C2CB"];

    // Pre-render glowing star sprites once to avoid expensive per-frame ctx.shadowBlur on mobile GPUs
    const sprites: HTMLCanvasElement[] = colors.map((color) => {
      const sCanvas = document.createElement("canvas");
      sCanvas.width = 24;
      sCanvas.height = 24;
      const sCtx = sCanvas.getContext("2d");
      if (sCtx) {
        sCtx.beginPath();
        sCtx.arc(12, 12, 3, 0, Math.PI * 2);
        sCtx.fillStyle = color;
        sCtx.shadowColor = color;
        sCtx.shadowBlur = 8;
        sCtx.fill();
      }
      return sCanvas;
    });

    const starCount = isMobile ? 95 : 180;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.8 + 0.4,
        sprite: sprites[Math.floor(Math.random() * sprites.length)],
        speed: Math.random() * 0.3 + 0.1
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const render = () => {
      if (!isMobile) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle radial cosmic glow centered on mouse
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        10,
        mouseX,
        mouseY,
        width * 0.7
      );
      gradient.addColorStop(0, "rgba(0, 245, 255, 0.04)");
      gradient.addColorStop(0.5, "rgba(131, 95, 158, 0.02)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render drifting stars using hardware-accelerated pre-rendered glowing sprites
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        const renderX = star.x - offsetX * star.z;
        const renderY = star.y - offsetY * star.z;
        const drawSize = star.size * 5.5;

        ctx.drawImage(
          star.sprite,
          renderX - drawSize / 2,
          renderY - drawSize / 2,
          drawSize,
          drawSize
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
