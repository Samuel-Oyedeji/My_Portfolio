"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import TypingEffect from "@/components/TypingEffect";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <div className="flex flex-col items-center mb-8">
            <div className="terminal-window rounded-full p-2 border-2 border-[#065f46] mb-6">
              <Image
                src="/images/pic1.png"
                alt="Oyedeji Samuel"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <CommandPrompt user="samuel" host="portfolio" path="~" />
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up-delay-1">
          <CommandPrompt>
            <div className="mt-4">
              <TypingEffect 
                text="whoami"
                speed={100}
                className="terminal-text text-4xl md:text-6xl font-bold block mb-4"
              />
            </div>
            <div className="mt-4 text-xl md:text-2xl terminal-text">
              <span className="terminal-text-amber">Backend Developer</span>
              <span className="terminal-text"> & </span>
              <span className="terminal-text-cyan">DevOps Engineer</span>
            </div>
          </CommandPrompt>
        </div>

        <div className="mb-12 animate-fade-in-up-delay-2">
          <TerminalWindow title="about.txt" className="mb-4">
            <CommandPrompt>
              <p className="text-base md:text-lg leading-relaxed mt-4 terminal-text">
                Passionate about building scalable backend architectures, 
                automating infrastructure, and optimizing CI/CD pipelines.
                <br /><br />
                Specializing in Node.js, Python, PostgreSQL, Docker, Kubernetes, 
                and cloud infrastructure on AWS, Azure, and Vercel.
              </p>
            </CommandPrompt>
          </TerminalWindow>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up-delay-3">
          <Link href="https://x.com/samissudo" className="hover:opacity-80 transition-opacity p-2 border border-[#065f46] rounded hover:border-[#00ff41]">
            <Image
              src="https://ext.same-assets.com/125383012/3293094908.svg"
              alt="Twitter/X"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
            />
          </Link>
          <Link href="https://github.com/Samuel-Oyedeji" className="hover:opacity-80 transition-opacity p-2 border border-[#065f46] rounded hover:border-[#00ff41]">
            <Image
              src="https://ext.same-assets.com/125383012/1114742367.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/samuel-oyedeji004/" className="hover:opacity-80 transition-opacity p-2 border border-[#065f46] rounded hover:border-[#00ff41]">
            <Image
              src="https://ext.same-assets.com/125383012/2708752127.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
            />
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-8 max-w-6xl mx-auto mb-20">
        <div className="mb-8 animate-fade-in-up">
          <CommandPrompt>
            <span className="terminal-text-amber">ls -la projects/</span>
          </CommandPrompt>
          <h2 className="text-3xl font-bold terminal-text mt-4 mb-8">Featured Projects</h2>
        </div>

        <div className="space-y-12">
          {/* RealSocial Project */}
          <div className="project-card terminal-window rounded-lg p-6 border-2 border-[#065f46] animate-fade-in-up-delay-1">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <span className="terminal-text-amber font-bold text-2xl">RealSocial</span>
                  <span className="terminal-text text-sm block mt-2 text-[#ffb000]">{'// An app where land owners and househunters meet'}</span>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    A full-stack platform connecting property owners with potential renters/buyers.
                    Built with Next.js, TypeScript, and PostgreSQL for scalability.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber">Key Features:</span>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Real-time property listings and search</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>User authentication and profiles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Database-driven architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Production-ready deployment on Vercel</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://realsocial.vercel.app"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-6 py-2 rounded transition-colors font-medium border border-[#00ff41]"
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
  "database": "PostgreSQL",
  "browser": "Supabase",
  "deployment": "Vercel"
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>

          {/* AnyDB Project */}
          <div className="project-card terminal-window rounded-lg p-6 border-2 border-[#065f46] animate-fade-in-up-delay-2">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <span className="terminal-text-amber font-bold text-2xl">AnyDB</span>
                  <span className="terminal-text text-sm block mt-2 text-[#ffb000]">{'// A realtime database management app'}</span>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    Real-time database management platform with support for multiple database types.
                    Features advanced querying, data visualization, and collaborative editing.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber">Key Features:</span>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Multi-database support (PostgreSQL, MySQL, MongoDB)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Real-time data synchronization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Query builder and visualization tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Responsive web interface</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://anydb.name.ng/"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-6 py-2 rounded transition-colors font-medium border border-[#00ff41]"
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
  ]
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>

          {/* Social Manager Project */}
          <div className="project-card terminal-window rounded-lg p-6 border-2 border-[#065f46] animate-fade-in-up-delay-3">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <CommandPrompt>
                  <span className="terminal-text-amber font-bold text-2xl">Social Manager</span>
                  <span className="terminal-text text-sm block mt-2 text-[#ffb000]">{'// Social media manager'}</span>
                </CommandPrompt>

                <div className="mt-6 terminal-text text-sm leading-relaxed">
                  <p className="mb-4">
                    Comprehensive social media management platform with AI-powered content generation
                    and scheduling capabilities. Integrates with Gemini API for intelligent content creation.
                  </p>

                  <div className="mb-4">
                    <span className="terminal-text-amber">Key Features:</span>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>AI-powered content generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Multi-platform social media scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Analytics and performance tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="terminal-text-cyan mr-2">→</span>
                        <span>Image integration with Unsplash API</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-6">
                    <Link
                      href="https://anydb.name.ng/"
                      className="inline-flex items-center bg-[#065f46] hover:bg-[#065f46] text-[#00ff41] px-6 py-2 rounded transition-colors font-medium border border-[#065f46]"
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
  "language": "TypeScript"
}`}
                    language="json"
                  />
                </TerminalWindow>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Link
            href="/projects"
            className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-6 py-3 rounded transition-colors border border-[#00ff41] font-medium"
          >
            <span className="terminal-text">cat</span> View All Projects
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 max-w-4xl mx-auto mb-20">
        <div className="mb-8 animate-fade-in-up">
          <CommandPrompt>
            <span className="terminal-text-amber">cat experience.log</span>
          </CommandPrompt>
          <h2 className="text-3xl font-bold terminal-text mt-4 mb-8">Experience</h2>
        </div>

        <div className="space-y-8">
          {/* Procesaur.com */}
          <div className="flex items-start space-x-4 animate-fade-in-up-delay-1">
            <div className="flex-shrink-0">
              <Image
                src="/images/procesaur-logo.webp"
                alt="Procesaur.com"
                width={64}
                height={64}
                className="rounded-lg border-2 border-[#065f46]"
              />
            </div>
            <div className="flex-1 terminal-window p-6 border-2 border-[#065f46]">
              <CommandPrompt>
                <span className="terminal-text-amber font-bold text-xl">Procesaur.com</span>
                <span className="terminal-text-cyan block text-sm mt-1">Backend Developer | Feb 2025 - May 2025</span>
              </CommandPrompt>
              <div className="mt-4 terminal-text text-sm space-y-2">
                <div className="flex items-start">
                  <span className="terminal-text-cyan mr-2">→</span>
                  <span>Engineered and maintained backend services with focus on performance and reliability</span>
                </div>
                <div className="flex items-start">
                  <span className="terminal-text-cyan mr-2">→</span>
                  <span>Designed and implemented fully automated CI/CD pipeline, reducing manual intervention</span>
                </div>
                <div className="flex items-start">
                  <span className="terminal-text-cyan mr-2">→</span>
                  <span>Optimized database queries and caching strategies, reducing page load times by 60%</span>
                </div>
              </div>
            </div>
          </div>

          {/* HNG */}
          <div className="flex items-start space-x-4 animate-fade-in-up-delay-2">
            <div className="flex-shrink-0">
              <Image
                src="/images/HNG_logo.webp"
                alt="HNG"
                width={64}
                height={64}
                className="rounded-lg border-2 border-[#065f46]"
              />
            </div>
            <div className="flex-1 terminal-window p-6 border-2 border-[#065f46]">
              <CommandPrompt>
                <span className="terminal-text-amber font-bold text-xl">HNG</span>
                <span className="terminal-text-cyan block text-sm mt-1">Lead DevOps Engineer | Nov 2024 - Jan 2025</span>
              </CommandPrompt>
              <div className="mt-4 terminal-text text-sm space-y-2">
                <div className="flex items-start">
                  <span className="terminal-text-cyan mr-2">→</span>
                  <span>Configured and maintained production servers using Nginx and related tools</span>
                </div>
                <div className="flex items-start">
                  <span className="terminal-text-cyan mr-2">→</span>
                  <span>Designed and implemented robust CI/CD pipeline for faster, reliable deployments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 animate-fade-in-up-delay-3">
          <Link
            href="/experience"
            className="terminal-text-cyan hover:terminal-text transition-colors font-medium mb-6 inline-block"
          >
            <span className="terminal-text">tail -f</span> Show more experience →
          </Link>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            href="https://drive.google.com/file/d/1a60J5w_OJ6ArBxpTq7tG8UtNB-nHRZiT/view?usp=sharing"
            className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-8 py-4 rounded transition-all transform hover:scale-105 font-medium border-2 border-[#00ff41]"
          >
            <span className="terminal-text-cyan">wget</span> Download Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#065f46] animate-fade-in-up">
        <div className="max-w-6xl mx-auto flex justify-between items-center terminal-text text-sm">
          <div className="flex space-x-8">
            <Link href="/about" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
              about
            </Link>
            <Link href="/projects" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
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
