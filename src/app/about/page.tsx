"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import CodeBlock from "@/components/CodeBlock";

export default function About() {
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
