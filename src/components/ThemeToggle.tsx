"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-20 right-4 md:top-6 md:right-8 z-50 px-4 py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm transition-all ${
        theme === "terminal"
          ? "bg-[#065f46] border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black shadow-[0_0_20px_rgba(0,255,65,0.3)]"
          : "bg-[#FF006E] border-4 border-black text-white shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:translate-x-[3px] hover:translate-y-[3px]"
      } rounded-lg`}
      aria-label="Toggle theme"
    >
      {theme === "terminal" ? (
        <span className="flex items-center gap-1 md:gap-2">
          <span className="animate-pulse">⚡</span>
          <span className="hidden sm:inline">Explore, if you dare</span>
          <span className="sm:hidden">Explore</span>
        </span>
      ) : (
        <span className="flex items-center gap-1 md:gap-2">
          <span>↩</span>
          <span className="hidden sm:inline">Back to Terminal</span>
          <span className="sm:hidden">Back</span>
        </span>
      )}
    </button>
  );
}

