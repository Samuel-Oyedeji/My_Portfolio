"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = "terminal", children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window rounded-lg overflow-hidden ${className}`}>
      <div className="terminal-window-header flex items-center">
        <div className="flex gap-1.5 mr-3">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffb000]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00ff41]"></div>
        </div>
        <span className="text-xs terminal-text">{title}</span>
      </div>
      <div className="p-4 terminal-text text-sm">
        {children}
      </div>
    </div>
  );
}

