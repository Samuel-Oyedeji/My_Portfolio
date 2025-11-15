"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-8 z-50 px-6 py-3 font-bold text-sm transition-all ${
        theme === "terminal"
          ? "bg-[#065f46] border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black shadow-[0_0_20px_rgba(0,255,65,0.3)]"
          : "bg-[#FF006E] border-4 border-black text-white shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:translate-x-[3px] hover:translate-y-[3px]"
      } rounded-lg`}
      aria-label="Toggle theme"
    >
      {theme === "terminal" ? (
        <span className="flex items-center gap-2">
          <span className="animate-pulse">⚡</span>
          <span>Explore, if you dare</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <span>↩</span>
          <span>Back to Terminal</span>
        </span>
      )}
    </button>
  );
}

