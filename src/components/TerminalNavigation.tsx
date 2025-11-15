"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function TerminalNavigation() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const navItems = [
    { href: "/", label: "home", color: "#0066FF" },
    { href: "/about", label: "about", color: "#FF006E" },
    { href: "/projects", label: "projects", color: "#8AC926" },
    { href: "/experience", label: "experience", color: "#FFBE0B" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  if (theme === "neubrutalism") {
    return (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[calc(100vw-1rem)] md:max-w-none md:w-auto px-2 md:px-0">
        <div className="bg-white border-2 md:border-4 border-black shadow-[3px_3px_0_black] md:shadow-[6px_6px_0_black] rounded-lg md:rounded-xl p-1 md:p-2 flex items-center justify-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-bold text-[10px] sm:text-xs md:text-base px-2 py-1.5 sm:px-3 sm:py-2 md:px-6 md:py-3 border-2 md:border-3 border-black rounded md:rounded-lg transition-all ${
                isActive(item.href) ? "" : "hover:translate-x-[1px] hover:translate-y-[1px]"
              }`}
              style={{
                backgroundColor: isActive(item.href) ? item.color : "white",
                color: isActive(item.href) ? "white" : "#1A1A1A",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] md:w-auto px-4 md:px-0">
      <div className="bg-black/80 backdrop-blur-md rounded-lg px-3 py-2 md:px-6 md:py-3 border border-[#065f46]">
        <div className="flex items-center justify-center space-x-3 md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs md:text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "terminal-text"
                  : "text-[#065f46] hover:text-[#00ff41]"
              }`}
            >
              <span className="terminal-text-cyan">~</span>
              {isActive(item.href) && (
                <span className="terminal-text-cyan ml-1">/</span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

