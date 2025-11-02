"use client";

import { ReactNode } from "react";

interface CommandPromptProps {
  user?: string;
  host?: string;
  path?: string;
  command?: string;
  children?: ReactNode;
  className?: string;
}

export default function CommandPrompt({
  user = "samuel",
  host = "portfolio",
  path = "~",
  command,
  children,
  className = "",
}: CommandPromptProps) {
  const prompt = `${user}@${host}:${path}$`;
  
  return (
    <div className={`terminal-text ${className}`}>
      <span className="terminal-text-cyan">{prompt}</span>
      {command && (
        <>
          {" "}
          <span className="terminal-text">{command}</span>
        </>
      )}
      {children && (
        <div className="mt-2 command-output">
          {children}
        </div>
      )}
    </div>
  );
}

