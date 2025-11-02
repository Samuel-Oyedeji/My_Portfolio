"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({ code, language = "json", className = "" }: CodeBlockProps) {
  return (
    <div className={className}>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          background: "#0a0a0a",
          border: "1px solid #065f46",
          borderRadius: "4px",
          padding: "1rem",
          fontSize: "0.875rem",
          fontFamily: "'JetBrains Mono', monospace",
          margin: 0,
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

