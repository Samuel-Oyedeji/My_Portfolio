"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import CodeBlock from "@/components/CodeBlock";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41]">
      <TerminalNavigation />

      {/* Profile Avatar - Top Left */}
      <div className="fixed top-8 left-8 z-40">
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
