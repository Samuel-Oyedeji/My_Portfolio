"use client";

import { useEffect, useState } from "react";

interface ThemeTransitionAnimationProps {
  show: boolean;
  onComplete: () => void;
}

export default function ThemeTransitionAnimation({ show, onComplete }: ThemeTransitionAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="neubrutalism-transition-burst" />
  );
}

/* 
 * TO DISABLE THE ANIMATION:
 * 
 * Option 1: Comment out the entire component export and replace with:
 * export default function ThemeTransitionAnimation() { return null; }
 * 
 * Option 2: In the pages where this is used, simply don't render it
 * 
 * Option 3: Remove the animation classes from globals.css:
 * - .neubrutalism-transition-wrapper
 * - .neubrutalism-transition-burst
 * - @keyframes explodeIn
 * - @keyframes colorBurst
 */

