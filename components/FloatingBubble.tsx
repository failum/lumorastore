"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

type Bubble = {
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

export function FloatingBubbles({ count = 12 }: { count?: number }) {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: count }).map(() => ({
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      driftX: Math.random() * 40 - 20,
      driftY: -Math.random() * 60 - 20,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            top: `${b.y}%`,
            opacity: 0.45, // ✅ stays visible
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(96,165,250,0.3) 40%, rgba(59,130,246,0.15) 70%)",
            border: "1px solid rgba(147,197,253,0.5)",
          }}
          animate={{
            transform: [
              "translate(0px, 0px)",
              `translate(${b.driftX}px, ${b.driftY}px)`,
              "translate(0px, 0px)",
            ],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
