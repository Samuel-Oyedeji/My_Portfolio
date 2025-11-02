"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TerminalNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/experience", label: "experience" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

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

