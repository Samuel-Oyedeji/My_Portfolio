"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import CodeBlock from "@/components/CodeBlock";
import ThemeTransitionAnimation from "@/components/ThemeTransitionAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [showAnimation, setShowAnimation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (theme === "neubrutalism" && !isAnimating) {
      setShowAnimation(true);
      setIsAnimating(true);
    }
  }, [theme, isAnimating]);

  if (theme === "neubrutalism") {
    return (
      <>
        {/* EASY TO DISABLE: Comment out the line below to remove the 3D animation */}
     <ThemeTransitionAnimation show={showAnimation} onComplete={() => setShowAnimation(false)} />
        
        <main className={`min-h-screen neubrutalism-bg ${showAnimation ? 'neubrutalism-transition-wrapper' : ''}`}>
          <TerminalNavigation />

        {/* Projects Content */}
        <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="neubrutalism-heading text-5xl md:text-6xl mb-4">My Projects</h1>
            <p className="text-xl neubrutalism-text max-w-3xl mx-auto">
              A collection of projects that showcase expertise in building scalable applications,
              solving complex problems, and delivering exceptional solutions.
            </p>
          </div>

          <div className="space-y-12">
            {/* RealSocial Project */}
            <div className="neubrutalism-card-blue">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#8b5cf6] rounded-xl p-3 flex-shrink-0 mr-4 border-4 border-black">
                      <span className="text-2xl font-bold text-white">Rs</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black neubrutalism-text-bold">RealSocial</h2>
                      <p className="text-sm font-bold text-[#0066FF]">An app where land owners and househunters meet</p>
                    </div>
                  </div>

                  <p className="neubrutalism-text mb-6 text-base">
                    RealSocial revolutionizes property connections by creating a platform where property owners 
                    and househunters can meet. Built with Next.js, TypeScript, and PostgreSQL for scalability 
                    and real-time functionality.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3 neubrutalism-text-bold">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#0066FF]">→</span>
                        <span className="neubrutalism-text">AI-powered form field detection and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#0066FF]">→</span>
                        <span className="neubrutalism-text">Smart response generation using OpenAI API</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#0066FF]">→</span>
                        <span className="neubrutalism-text">Universal compatibility with job sites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#0066FF]">→</span>
                        <span className="neubrutalism-text">95% reduction in application time</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://realsocial.vercel.app"
                      className="neubrutalism-button neubrutalism-button-primary"
                    >
                      Visit Project
                    </Link>
                    <span className="neubrutalism-badge-green">Live & Active</span>
                  </div>
                </div>

                <div className="neubrutalism-card bg-black text-[#FF006E] font-mono text-sm">
                  <div className="mb-2 font-bold border-b-2 border-current pb-2">tech-stack.json</div>
                  <pre className="overflow-x-auto">
{`{
  "frontend": "Next.js",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "backend": "Node.js",
  "database": [
    "PostgreSQL", 
    "Supabase"
  ],
  "deployment": "Vercel",
  "features": [
    "Real-time updates",
    "User authentication",
    "Property search",
    "Database-driven"
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* AnyDB Project */}
            <div className="neubrutalism-card-green">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#10b981] rounded-xl p-3 flex-shrink-0 mr-4 border-4 border-black">
                      <span className="text-2xl font-bold text-white">A</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black neubrutalism-text-bold">AnyDB</h2>
                      <p className="text-sm font-bold text-[#8AC926]">A realtime database management app</p>
                    </div>
                  </div>

                  <p className="neubrutalism-text mb-6 text-base">
                    AnyDB is a modern database management solution designed for multiple database types.
                    It combines real-time synchronization, advanced querying, and cross-platform
                    accessibility to streamline database operations and team productivity.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3 neubrutalism-text-bold">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#8AC926]">→</span>
                        <span className="neubrutalism-text">Real-time collaborative workspaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#8AC926]">→</span>
                        <span className="neubrutalism-text">Advanced task filtering and custom views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#8AC926]">→</span>
                        <span className="neubrutalism-text">Integrated time tracking and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#8AC926]">→</span>
                        <span className="neubrutalism-text">Cross-platform desktop and mobile apps</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://anydb.name.ng/"
                      className="neubrutalism-button neubrutalism-button-success"
                    >
                      Visit Project
                    </Link>
                    <span className="neubrutalism-badge-blue">Live & Active</span>
                  </div>
                </div>

                <div className="neubrutalism-card bg-black text-[#0066FF] font-mono text-sm">
                  <div className="mb-2 font-bold border-b-2 border-current pb-2">tech-stack.json</div>
                  <pre className="overflow-x-auto">
{`{
  "framework": "React",
  "language": "TypeScript",
  "hosting": ["Render", "Vercel"],
  "databases": [
    "PostgreSQL",
    "MySQL",
    "MongoDB"
  ],
  "features": [
    "Multi-database support",
    "Real-time sync",
    "Query builder",
    "Data visualization"
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Social Manager Project */}
            <div className="neubrutalism-card-yellow">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#06b6d4] rounded-xl p-3 flex-shrink-0 mr-4 border-4 border-black">
                      <span className="text-2xl font-bold text-white">M</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black neubrutalism-text-bold">Social Manager</h2>
                      <p className="text-sm font-bold text-[#FFBE0B]">Social media manager</p>
                    </div>
                  </div>

                  <p className="neubrutalism-text mb-6 text-base">
                    A comprehensive social media management platform that provides real-time insights
                    into content performance, scheduling capabilities, and AI-powered content generation.
                    Designed to help teams optimize their social media workflows.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3 neubrutalism-text-bold">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#FFBE0B]">→</span>
                        <span className="neubrutalism-text">Real-time performance monitoring and alerts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#FFBE0B]">→</span>
                        <span className="neubrutalism-text">Automated security vulnerability scanning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#FFBE0B]">→</span>
                        <span className="neubrutalism-text">CI/CD pipeline integration with rollbacks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 font-bold text-[#FFBE0B]">→</span>
                        <span className="neubrutalism-text">Team collaboration and detailed reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://anydb.name.ng/"
                      className="neubrutalism-button neubrutalism-button-accent"
                    >
                      View Code
                    </Link>
                    <span className="neubrutalism-badge-cyan">In Development</span>
                  </div>
                </div>

                <div className="neubrutalism-card bg-black text-[#FFBE0B] font-mono text-sm">
                  <div className="mb-2 font-bold border-b-2 border-current pb-2">tech-stack.json</div>
                  <pre className="overflow-x-auto">
{`{
  "framework": "Next.js",
  "ui": "Shadcn",
  "apis": [
    "Gemini API",
    "Unsplash API"
  ],
  "database": "PostgreSQL",
  "backend": "Supabase",
  "language": "TypeScript",
  "features": [
    "AI content generation",
    "Multi-platform scheduling",
    "Analytics dashboard",
    "Image integration"
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="neubrutalism-card-purple max-w-2xl mx-auto">
              <h2 className="neubrutalism-heading text-3xl mb-6">Interested in Collaborating?</h2>
              <p className="neubrutalism-text mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, innovative ideas, or opportunities 
                to create something amazing together.
              </p>
              <Link
                href="/about"
                className="neubrutalism-button neubrutalism-button-secondary inline-flex items-center"
              >
                Let's Connect →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t-4 border-black bg-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center neubrutalism-text text-sm">
            <div className="flex space-x-8 font-bold">
              <Link href="/" className="hover:text-[#0066FF] transition-colors">
                home
              </Link>
              <Link href="/about" className="hover:text-[#FF006E] transition-colors">
                about
              </Link>
              <Link href="/projects" className="text-[#FF006E]">
                projects
              </Link>
              <Link href="/experience" className="hover:text-[#8AC926] transition-colors">
                experience
              </Link>
            </div>
            <p className="font-bold">© 2025 samuel@portfolio</p>
          </div>
        </footer>
      </main>
      </>
    );
  }

  // Terminal theme (original design)
  return (
    <main className="min-h-screen bg-black text-[#00ff41]">
      <TerminalNavigation />

      {/* Profile Avatar - Top Left (hidden on mobile to prevent overlap) */}
      <div className="hidden md:block fixed top-8 left-8 z-40">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <div className="terminal-window rounded-full p-1 border-2 border-[#065f46]">
            <Image
              src="/images/pic1.png"
              alt="samuel@portfolio"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </Link>
      </div>

      {/* Projects Content */}
      <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <CommandPrompt>
            <span className="terminal-text-amber text-5xl font-bold block mb-4">ls -la projects/</span>
            <span className="terminal-text text-xl block max-w-3xl mx-auto">
              A collection of projects that showcase expertise in building scalable applications,
              solving complex problems, and delivering exceptional solutions.
            </span>
          </CommandPrompt>
        </div>

        <div className="space-y-12">
          {/* RealSocial Project */}
          <div className="project-card terminal-window rounded-lg p-8 border-2 border-[#065f46] animate-fade-in-up-delay-1">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#8b5cf6] rounded-xl p-3 flex-shrink-0 mr-4 border border-[#a855f7]">
                      <span className="text-xl font-bold text-black">Rs</span>
                    </div>
                    <div>
                      <span className="terminal-text-amber font-bold text-3xl block">RealSocial</span>
                      <span className="terminal-text-amber text-sm block mt-1">{'// An app where land owners and househunters meet'}</span>
                    </div>
                  </div>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    RealSocial revolutionizes property connections by creating a platform where property owners 
                    and househunters can meet. Built with Next.js, TypeScript, and PostgreSQL for scalability 
                    and real-time functionality.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber font-semibold block mb-3">Key Features:</span>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>AI-powered form field detection and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Smart response generation using OpenAI API</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Universal compatibility with job sites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>95% reduction in application time</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://realsocial.vercel.app"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-6 py-3 rounded transition-colors font-medium border border-[#00ff41]"
                    >
                      <span className="terminal-text-cyan">curl</span> Visit Project
                    </Link>
                    <span className="terminal-text-amber text-sm">✓ Live & Active</span>
                  </div>
                </div>
              </div>

              <div>
                <TerminalWindow title="tech-stack.json">
                  <CodeBlock
                    code={`{
  "frontend": "Next.js",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "backend": "Node.js",
  "database": [
    "PostgreSQL", 
    "Supabase"
  ],
  "deployment": "Vercel",
  "features": [
    "Real-time updates",
    "User authentication",
    "Property search",
    "Database-driven"
  ]
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>

          {/* AnyDB Project */}
          <div className="project-card terminal-window rounded-lg p-8 border-2 border-[#065f46] animate-fade-in-up-delay-2">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#10b981] rounded-xl p-3 flex-shrink-0 mr-4 border border-[#34d399]">
                      <span className="text-xl font-bold text-black">A</span>
                    </div>
                    <div>
                      <span className="terminal-text-amber font-bold text-3xl block">AnyDB</span>
                      <span className="terminal-text-amber text-sm block mt-1">{'// A realtime database management app'}</span>
                    </div>
                  </div>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    AnyDB is a modern database management solution designed for multiple database types.
                    It combines real-time synchronization, advanced querying, and cross-platform
                    accessibility to streamline database operations and team productivity.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber font-semibold block mb-3">Key Features:</span>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Real-time collaborative workspaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Advanced task filtering and custom views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Integrated time tracking and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Cross-platform desktop and mobile apps</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://anydb.name.ng/"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-6 py-3 rounded transition-colors font-medium border border-[#00ff41]"
                    >
                      <span className="terminal-text-cyan">curl</span> Visit Project
                    </Link>
                    <span className="terminal-text-amber text-sm">✓ Live & Active</span>
                  </div>
                </div>
              </div>

              <div>
                <TerminalWindow title="tech-stack.json">
                  <CodeBlock
                    code={`{
  "framework": "React",
  "language": "TypeScript",
  "hosting": ["Render", "Vercel"],
  "databases": [
    "PostgreSQL",
    "MySQL",
    "MongoDB"
  ],
  "features": [
    "Multi-database support",
    "Real-time sync",
    "Query builder",
    "Data visualization"
  ]
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>

          {/* Social Manager Project */}
          <div className="project-card terminal-window rounded-lg p-8 border-2 border-[#065f46] animate-fade-in-up-delay-3">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#06b6d4] rounded-xl p-3 flex-shrink-0 mr-4 border border-[#22d3ee]">
                      <span className="text-xl font-bold text-black">M</span>
                    </div>
                    <div>
                      <span className="terminal-text-amber font-bold text-3xl block">Social Manager</span>
                      <span className="terminal-text-amber text-sm block mt-1">{'// Social media manager'}</span>
                    </div>
                  </div>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    A comprehensive social media management platform that provides real-time insights
                    into content performance, scheduling capabilities, and AI-powered content generation.
                    Designed to help teams optimize their social media workflows.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber font-semibold block mb-3">Key Features:</span>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Real-time performance monitoring and alerts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Automated security vulnerability scanning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>CI/CD pipeline integration with rollbacks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Team collaboration and detailed reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://anydb.name.ng/"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#065f46] text-[#00ff41] px-6 py-3 rounded transition-colors font-medium border border-[#065f46]"
                    >
                      <span className="terminal-text-amber mr-2">⚡</span> View Code
                    </Link>
                    <span className="terminal-text-cyan text-sm">In Development</span>
                  </div>
                </div>
              </div>

              <div>
                <TerminalWindow title="tech-stack.json">
                  <CodeBlock
                    code={`{
  "framework": "Next.js",
  "ui": "Shadcn",
  "apis": [
    "Gemini API",
    "Unsplash API"
  ],
  "database": "PostgreSQL",
  "backend": "Supabase",
  "language": "TypeScript",
  "features": [
    "AI content generation",
    "Multi-platform scheduling",
    "Analytics dashboard",
    "Image integration"
  ]
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <TerminalWindow title="collaborate.sh" className="max-w-2xl mx-auto">
            <CommandPrompt>
              <div className="mt-4">
                <span className="terminal-text-amber text-3xl font-bold block mb-6">Interested in Collaborating?</span>
                <p className="terminal-text mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, innovative ideas, or opportunities 
                  to create something amazing together.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-8 py-4 rounded transition-all transform hover:scale-105 font-medium border-2 border-[#00ff41]"
                >
                  <span className="terminal-text-cyan">ssh</span> Let's Connect
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </CommandPrompt>
          </TerminalWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#065f46]">
        <div className="max-w-6xl mx-auto flex justify-between items-center terminal-text text-sm">
          <div className="flex space-x-8">
            <Link href="/" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
              home
            </Link>
            <Link href="/about" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
              about
            </Link>
            <Link href="/projects" className="text-[#00ff41] transition-colors">
              projects
            </Link>
            <Link href="/experience" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
              experience
            </Link>
          </div>
          <p className="text-[#065f46]">© 2025 samuel@portfolio</p>
        </div>
      </footer>
    </main>
  );
}
