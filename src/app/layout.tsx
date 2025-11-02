import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "samuel@portfolio:~$ - Backend Developer & DevOps Engineer",
  description: "Backend developer and DevOps engineer specializing in scalable architectures, CI/CD pipelines, and infrastructure automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={jetbrainsMono.variable} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
        {children}
      </body>
    </html>
  );
}
