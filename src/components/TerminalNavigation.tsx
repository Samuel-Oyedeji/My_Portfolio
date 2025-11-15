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
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="neubrutalism-nav flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`neubrutalism-nav-item ${
                isActive(item.href) ? "neubrutalism-nav-item-active" : ""
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md rounded-lg px-6 py-3 border border-[#065f46]">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
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

