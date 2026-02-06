"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

export default function VoiceWave({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * DPR);
      canvas.height = Math.floor(rect.height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const fixedTime = 4;
    let t = 0;
    let phase = fixedTime;

    const draw = () => {
      const speed = 0.035;
      const ampBoost = 1;
      phase += speed;
      const time = phase;

      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const mid = height * 0.52;
      const center = width * 0.5;

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(52, 140, 255, 0.05)");
      gradient.addColorStop(0.3, "rgba(90, 175, 255, 0.35)");
      gradient.addColorStop(0.5, "rgba(145, 210, 255, 0.75)");
      gradient.addColorStop(0.7, "rgba(90, 175, 255, 0.35)");
      gradient.addColorStop(1, "rgba(52, 140, 255, 0.05)");

      const waveY = (
        x: number,
        phase: number,
        ampScale: number,
        yOffset: number
      ) => {
        const dist = Math.abs(x - center) / center;
        const envelope = Math.pow(1 - dist, 2.0) * 1.3;

        return (
          mid +
          yOffset +
          Math.sin(x * 0.010 + phase) * (48 * envelope * ampScale) +
          Math.sin(x * 0.024 + phase * 1.25) * (24 * envelope * ampScale) +
          Math.sin(x * 0.046 + phase * 1.7) * (11 * envelope * ampScale)
        );
      };

      const drawWave = (
        phase: number,
        ampScale: number,
        yOffset: number,
        lineWidth: number,
        alpha: number,
        glow: boolean
      ) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = gradient;
        ctx.shadowColor = glow ? "rgba(120, 190, 255, 0.65)" : "transparent";
        ctx.shadowBlur = glow ? 18 : 0;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          ctx.lineTo(x, waveY(x, phase, ampScale, yOffset));
        }
        ctx.stroke();
        ctx.restore();
      };

      const drawMesh = (
        phase: number,
        ampScale: number,
        yOffset: number,
        alpha: number
      ) => {
        const strands = 6;
        for (let s = 0; s < strands; s += 1) {
          const localPhase = phase + s * 0.08;
          const localOffset = yOffset + (s - (strands - 1) / 2) * 1.4;
          const localAlpha = alpha * (0.8 - s * 0.03);
          drawWave(localPhase, ampScale * 0.92, localOffset, 0.8, localAlpha, false);
        }
      };

      // layered filaments
      const layers = 12;
      for (let i = 0; i < layers; i += 1) {
        const offset = (i - (layers - 1) / 2) * 3.8;
        const amp = (1.0 + i * 0.04) * ampBoost;
        const alpha = 0.08 + i * 0.03;
        const widthPx = 0.85 + i * 0.12;
        const layerPhase = time + i * 0.18;
        drawWave(layerPhase, amp, offset, widthPx, alpha, false);
        drawMesh(layerPhase, amp * 0.85, offset, alpha * 0.65);
      }

      t += 0.0105;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
