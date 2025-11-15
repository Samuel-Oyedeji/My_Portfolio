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

export default function About() {
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

        {/* About Content */}
        <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="neubrutalism-avatar rounded-full inline-block mb-6 overflow-hidden bg-white">
              <Image
                src="/images/pic1.png"
                alt="Oyedeji Samuel"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h1 className="neubrutalism-heading text-5xl md:text-6xl mb-4">whoami</h1>
            <p className="text-xl font-bold neubrutalism-text">Backend Developer & DevOps Engineer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="neubrutalism-card-blue">
                <h2 className="text-2xl font-black mb-4 neubrutalism-text-bold">My Journey</h2>
                <div className="neubrutalism-text leading-relaxed space-y-4">
                  <p>
                    Hi! I'm Oyedeji Samuel, a backend developer and DevOps engineer 
                    passionate about building scalable systems and automating infrastructure.
                  </p>
                  <p>
                    I specialize in backend development with Node.js and Python, 
                    designing robust APIs, optimizing databases, and implementing 
                    CI/CD pipelines that ensure reliable deployments.
                  </p>
                  <p>
                    My approach combines engineering excellence with automation-first 
                    thinking, ensuring systems are not just functional, but maintainable 
                    and scalable.
                  </p>
                  <p>
                    When I'm not coding, I explore new technologies, contribute to 
                    open-source projects, and share knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="neubrutalism-card-pink">
                <h2 className="text-2xl font-black mb-4 neubrutalism-text-bold">Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3 text-[#FF006E]">Frontend Development:</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "JavaScript"].map((skill) => (
                        <span key={skill} className="neubrutalism-badge-blue text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-[#FF006E]">Backend Development:</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                        <span key={skill} className="neubrutalism-badge-green text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-[#FF006E]">DevOps & Infrastructure:</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Kubernetes", "AWS", "Azure", "Vercel", "Git", "GitHub Actions", "Nginx", "CI/CD"].map((skill) => (
                        <span key={skill} className="neubrutalism-badge-purple text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="neubrutalism-heading text-3xl md:text-4xl mb-8 text-center">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="neubrutalism-card-yellow text-center">
                <span className="text-5xl block mb-4">🚀</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Backend Development</h3>
                <p className="neubrutalism-text text-sm leading-relaxed">
                  Building scalable APIs and services using Node.js, Python, and modern frameworks.
                  Designing database schemas, optimizing queries, and implementing authentication systems.
                </p>
              </div>

              <div className="neubrutalism-card-green text-center">
                <span className="text-5xl block mb-4">⚙️</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Infrastructure & Deployment</h3>
                <p className="neubrutalism-text text-sm leading-relaxed">
                  Architecting scalable infrastructure on cloud platforms. Setting up CI/CD pipelines 
                  with GitHub Actions and Jenkins. Containerizing applications with Docker and managing 
                  deployments with Kubernetes.
                </p>
              </div>

              <div className="neubrutalism-card-cyan text-center">
                <span className="text-5xl block mb-4">☁️</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Performance Optimization</h3>
                <p className="neubrutalism-text text-sm leading-relaxed">
                  Optimizing application performance through query optimization, caching strategies, 
                  and infrastructure tuning. Reducing load times and improving system efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Skills as JSON */}
          <div className="mt-16">
            <div className="neubrutalism-card max-w-2xl mx-auto bg-black text-[#9D4EDD] font-mono text-sm">
              <div className="mb-2 font-bold border-b-2 border-current pb-2">tech-stack.json</div>
              <pre className="overflow-x-auto">
{`{
  "languages": ["JavaScript", "TypeScript", "Python", "SQL"],
  "backend": {
    "frameworks": ["Node.js", "Express", "FastAPI"],
    "databases": ["PostgreSQL", "MongoDB", "Redis"],
    "apis": ["REST", "GraphQL"]
  },
  "devops": {
    "containers": ["Docker", "Kubernetes"],
    "ci_cd": ["GitHub Actions", "Jenkins"],
    "cloud": ["AWS", "Azure", "Vercel"],
    "monitoring": ["Prometheus", "Grafana"]
  },
  "infrastructure": {
    "servers": ["Nginx", "Apache"],
    "version_control": "Git",
    "testing": ["Jest", "Pytest"]
  }
}`}
              </pre>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="neubrutalism-card-purple max-w-2xl mx-auto">
              <h2 className="neubrutalism-heading text-3xl mb-6">Let's Connect</h2>
              <p className="neubrutalism-text mb-8 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects,
                or just having a chat about technology and infrastructure.
              </p>
              <div className="flex justify-center space-x-6">
                <Link href="https://x.com/samissudo" className="neubrutalism-badge-blue hover:scale-110 transition-transform">
                  Twitter/X
                </Link>
                <Link href="https://github.com/Samuel-Oyedeji" className="neubrutalism-badge-purple hover:scale-110 transition-transform">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/samuel-oyedeji004/" className="neubrutalism-badge-cyan hover:scale-110 transition-transform">
                  LinkedIn
                </Link>
              </div>
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
              <Link href="/about" className="text-[#0066FF]">
                about
              </Link>
              <Link href="/projects" className="hover:text-[#FF006E] transition-colors">
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

      {/* About Content */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="terminal-window rounded-full p-2 border-2 border-[#065f46] inline-block mb-6">
            <Image
              src="/images/pic1.png"
              alt="Oyedeji Samuel"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <CommandPrompt>
            <span className="terminal-text-amber text-5xl font-bold block mb-4">whoami</span>
            <span className="terminal-text text-xl block">Backend Developer & DevOps Engineer</span>
          </CommandPrompt>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up-delay-1">
            <TerminalWindow title="journey.md">
              <CommandPrompt>
                <div className="mt-4 terminal-text leading-relaxed space-y-4">
                  <p>
                    Hi! I'm Oyedeji Samuel, a backend developer and DevOps engineer 
                    passionate about building scalable systems and automating infrastructure.
                  </p>
                  <p>
                    I specialize in backend development with Node.js and Python, 
                    designing robust APIs, optimizing databases, and implementing 
                    CI/CD pipelines that ensure reliable deployments.
                  </p>
                  <p>
                    My approach combines engineering excellence with automation-first 
                    thinking, ensuring systems are not just functional, but maintainable 
                    and scalable.
                  </p>
                  <p>
                    When I'm not coding, I explore new technologies, contribute to 
                    open-source projects, and share knowledge with the developer community.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <TerminalWindow title="skills.json">
              <CommandPrompt>
                <div className="mt-4 space-y-6">
                  <div>
                    <span className="terminal-text-amber">Frontend Development:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "JavaScript"].map((skill) => (
                        <span key={skill} className="tech-badge text-xs px-3 py-1 rounded border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="terminal-text-amber">Backend Development:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                        <span key={skill} className="tech-badge text-xs px-3 py-1 rounded border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="terminal-text-amber">DevOps & Infrastructure:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Docker", "Kubernetes", "AWS", "Azure", "Vercel", "Git", "GitHub Actions", "Nginx", "CI/CD"].map((skill) => (
                        <span key={skill} className="tech-badge text-xs px-3 py-1 rounded border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CommandPrompt>
            </TerminalWindow>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-3">
          <CommandPrompt>
            <span className="terminal-text-amber text-2xl font-bold mb-6 block text-center">What I Do</span>
          </CommandPrompt>
          <div className="grid md:grid-cols-3 gap-8">
            <TerminalWindow title="backend-dev.sh" className="hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Backend Development</span>
                  <p className="terminal-text text-sm leading-relaxed">
                    Building scalable APIs and services using Node.js, Python, and modern frameworks.
                    Designing database schemas, optimizing queries, and implementing authentication systems.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>

            <TerminalWindow title="devops-automate.sh" className="hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Infrastructure & Deployment</span>
                  <p className="terminal-text text-sm leading-relaxed">
                    Architecting scalable infrastructure on cloud platforms. Setting up CI/CD pipelines 
                    with GitHub Actions and Jenkins. Containerizing applications with Docker and managing 
                    deployments with Kubernetes.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>

            <TerminalWindow title="optimize.sh" className="hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Performance Optimization</span>
                  <p className="terminal-text text-sm leading-relaxed">
                    Optimizing application performance through query optimization, caching strategies, 
                    and infrastructure tuning. Reducing load times and improving system efficiency.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>
          </div>
        </div>

        {/* Skills as JSON */}
        <div className="mt-16 animate-fade-in-up">
          <TerminalWindow title="tech-stack.json" className="max-w-2xl mx-auto">
            <CodeBlock
              code={`{
  "languages": ["JavaScript", "TypeScript", "Python", "SQL"],
  "backend": {
    "frameworks": ["Node.js", "Express", "FastAPI"],
    "databases": ["PostgreSQL", "MongoDB", "Redis"],
    "apis": ["REST", "GraphQL"]
  },
  "devops": {
    "containers": ["Docker", "Kubernetes"],
    "ci_cd": ["GitHub Actions", "Jenkins"],
    "cloud": ["AWS", "Azure", "Vercel"],
    "monitoring": ["Prometheus", "Grafana"]
  },
  "infrastructure": {
    "servers": ["Nginx", "Apache"],
    "version_control": "Git",
    "testing": ["Jest", "Pytest"]
  }
}`}
              language="json"
            />
          </TerminalWindow>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <TerminalWindow title="connect.sh" className="max-w-2xl mx-auto">
            <CommandPrompt>
              <div className="mt-4">
                <span className="terminal-text-amber text-2xl font-bold block mb-6">Let's Connect</span>
                <p className="terminal-text mb-8 max-w-2xl mx-auto">
                  I'm always interested in discussing new opportunities, innovative projects,
                  or just having a chat about technology and infrastructure.
                </p>
                <div className="flex justify-center space-x-6">
                  <Link href="https://x.com/samissudo" className="hover:opacity-80 transition-opacity p-3 border border-[#065f46] rounded hover:border-[#00ff41]">
                    <Image
                      src="https://ext.same-assets.com/125383012/3293094908.svg"
                      alt="Twitter/X"
                      width={24}
                      height={24}
                      className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                      style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
                    />
                  </Link>
                  <Link href="https://github.com/Samuel-Oyedeji" className="hover:opacity-80 transition-opacity p-3 border border-[#065f46] rounded hover:border-[#00ff41]">
                    <Image
                      src="https://ext.same-assets.com/125383012/1114742367.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                      style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/samuel-oyedeji004/" className="hover:opacity-80 transition-opacity p-3 border border-[#065f46] rounded hover:border-[#00ff41]">
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
            <Link href="/about" className="text-[#00ff41] transition-colors">
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
