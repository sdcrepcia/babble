"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

type Props = { trigger: boolean };

export default function CelebrationOverlay({ trigger }: Props) {
  useEffect(() => {
    if (!trigger) return;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6bff"],
    });
  }, [trigger]);

  return null;
}
