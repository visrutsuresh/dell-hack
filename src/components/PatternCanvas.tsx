import React, { useEffect, useRef } from 'react';
interface PatternCanvasProps {
  type: 'smooth' | 'jagged' | 'mixed';
  intensity?: number; // 0-1
  color?: string;
  className?: string;
  animated?: boolean;
}
export function PatternCanvas({
  type,
  intensity = 0.5,
  color = '#14B8A6',
  className = '',
  animated = false
}: PatternCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let time = 0;
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      const points = 50;
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      for (let i = 0; i <= points; i++) {
        const x = i / points * width;
        let y = centerY;
        // Generate wave based on type
        if (type === 'smooth') {
          // Sine waves for smooth
          y += Math.sin(i * 0.2 + time) * (height * 0.3 * intensity);
          y += Math.cos(i * 0.1 - time * 0.5) * (height * 0.1 * intensity);
        } else if (type === 'jagged') {
          // Noise-like for jagged
          const noise =
          Math.sin(i * 132.12 + time * 2) * Math.cos(i * 32.1 + time);
          y += noise * (height * 0.4 * intensity);
          // Add sharp spikes
          if (i % 5 === 0) {
            y += (Math.random() - 0.5) * (height * 0.3 * intensity);
          }
        } else {
          // Mixed
          y += Math.sin(i * 0.2 + time) * (height * 0.2 * intensity);
          const noise = Math.sin(i * 50 + time) * (height * 0.1 * intensity);
          y += noise;
        }
        // Soften edges
        const fade = Math.min(i, points - i) / (points * 0.1);
        const fadeFactor = Math.min(1, Math.max(0, fade));
        // Apply fade to amplitude deviation from center
        const deviation = y - centerY;
        y = centerY + deviation * fadeFactor;
        // Smooth curve to point
        if (i === 0) ctx.moveTo(x, y);else
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      if (animated) {
        time += 0.02; // Speed
        animationFrameId = requestAnimationFrame(draw);
      }
    };
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [type, intensity, color, animated]);
  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}