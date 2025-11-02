"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import CodeBlock from "@/components/CodeBlock";

export default function Experience() {
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

      {/* Experience Content */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <CommandPrompt>
            <span className="terminal-text-amber text-5xl font-bold block mb-4">cat experience.log</span>
            <span className="terminal-text text-xl block max-w-3xl mx-auto">
              A journey through my professional experience, showcasing skills developed
              and impact made at various organizations.
            </span>
          </CommandPrompt>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff41] to-[#065f46]"></div>

          <div className="space-y-12">
            {/* Freelance */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-3">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#065f46] flex items-center justify-center border-4 border-[#06b6d4]">
                  <span className="text-2xl font-bold text-black">F</span>
                </div>
              </div>

              <div className="flex-1 terminal-window p-8 border-2 border-[#065f46]">
                <div className="flex justify-between items-start mb-4">
                  <CommandPrompt>
                    <span className="terminal-text-amber text-2xl font-bold block mb-2">Freelance Developer</span>
                    <span className="terminal-text-cyan text-lg font-semibold block">Full Stack Developer</span>
                    <span className="terminal-text text-sm mt-1 text-[#065f46]">January 2024 - Present</span>
                  </CommandPrompt>
                  <span className="bg-[#00ff41]/20 text-[#00ff41] px-3 py-1 rounded-full text-sm font-medium border border-[#00ff41]">
                    Ongoing
                  </span>
                </div>

                <div className="mt-6 terminal-text text-sm leading-relaxed mb-6">
                  Working as a freelance developer, delivering custom web applications and solutions
                  for various clients across different industries, from startups to established businesses.
                </div>

                <div className="mb-6">
                  <span className="terminal-text-amber text-lg font-semibold block mb-4">Notable Projects</span>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TerminalWindow title="project-1.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">E-commerce Platform</span>
                        <p className="terminal-text text-xs">
                          Built a complete e-commerce solution with payment integration,
                          inventory management, and admin dashboard for a retail client.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="project-2.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Portfolio Websites</span>
                        <p className="terminal-text text-xs">
                          Created responsive portfolio websites for creative professionals,
                          focusing on performance and user experience.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="project-3.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">SaaS Dashboard</span>
                        <p className="terminal-text text-xs">
                          Developed a comprehensive analytics dashboard for a SaaS startup,
                          including real-time data visualization and reporting features.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="project-4.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">API Development</span>
                        <p className="terminal-text text-xs">
                          Built RESTful APIs and microservices for various clients,
                          ensuring scalability and proper documentation.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                  </div>
                </div>

                <div>
                  <span className="terminal-text-amber text-lg font-semibold block mb-3">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "AWS", "Python", "Node.js", "PostgreSQL", "Stripe", "Vercel"].map((tech) => (
                      <span key={tech} className="tech-badge text-xs px-3 py-1 rounded border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Procesaur.com */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-1">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-[#00ff41]">
                  <Image
                    src="/images/procesaur-logo.webp"
                    alt="Procesaur.com"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 terminal-window p-8 border-2 border-[#065f46]">
                <div className="flex justify-between items-start mb-4">
                  <CommandPrompt>
                    <span className="terminal-text-amber text-2xl font-bold block mb-2">Procesaur.com</span>
                    <span className="terminal-text-cyan text-lg font-semibold block">Backend Developer</span>
                    <span className="terminal-text text-sm mt-1 text-[#065f46]">February 2025 - May 2025</span>
                  </CommandPrompt>
                  <span className="bg-[#06b6d4]/20 text-[#06b6d4] px-3 py-1 rounded-full text-sm font-medium border border-[#06b6d4]">
                    4 months
                  </span>
                </div>

                <div className="mt-6 terminal-text text-sm leading-relaxed mb-6">
                  Worked as a Backend Developer at Procesaur.com, where I was responsible
                  for developing and maintaining key features that enhance user engagement and streamline
                  feature deployments.
                </div>

                <div className="mb-6">
                  <span className="terminal-text-amber text-lg font-semibold block mb-4">Key Achievements</span>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TerminalWindow title="achievement-1.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Infrastructure Maintenance</span>
                        <p className="terminal-text text-xs">
                          Engineered and maintained backend services with a focus on performance and reliability, 
                          while configuring and optimizing Nginx-based server infrastructure.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="achievement-2.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">CI/CD</span>
                        <p className="terminal-text text-xs">
                          Designed and implemented a fully automated CI/CD pipeline, significantly reducing 
                          manual intervention and accelerating the software release process.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="achievement-3.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">A/B Test and Deployment</span>
                        <p className="terminal-text text-xs">
                          Managed end-to-end application deployments across staging and production environments, 
                          introducing process improvements that enhanced release stability.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="achievement-4.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Performance Optimization</span>
                        <p className="terminal-text text-xs">
                          Optimized database queries and implemented caching strategies
                          that reduced page load times by 60%.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                  </div>
                </div>

                <div>
                  <span className="terminal-text-amber text-lg font-semibold block mb-3">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "Express.js", "Python", "GitHub Actions", "Azure"].map((tech) => (
                      <span key={tech} className="tech-badge text-xs px-3 py-1 rounded border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HNG */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-2">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-[#ffb000]">
                  <Image
                    src="/images/HNG_logo.webp"
                    alt="HNG"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 terminal-window p-8 border-2 border-[#065f46]">
                <div className="flex justify-between items-start mb-4">
                  <CommandPrompt>
                    <span className="terminal-text-amber text-2xl font-bold block mb-2">HNG</span>
                    <span className="terminal-text-cyan text-lg font-semibold block">Lead DevOps Engineer</span>
                    <span className="terminal-text text-sm mt-1 text-[#065f46]">November 2024 - January 2025</span>
                  </CommandPrompt>
                  <span className="bg-[#ffb000]/20 text-[#ffb000] px-3 py-1 rounded-full text-sm font-medium border border-[#ffb000]">
                    3 months
                  </span>
                </div>

                <div className="mt-6 terminal-text text-sm leading-relaxed mb-6">
                  Worked as a Lead DevOps engineer at HNG, focusing on configuring servers, optimizing builds 
                  and deployment time, and managing databases.
                </div>

                <div className="mb-6">
                  <span className="terminal-text-amber text-lg font-semibold block mb-4">Key Achievements</span>
                  <div className="grid md:grid-cols-2 gap-4">
                    <TerminalWindow title="devops-1.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Server Administration</span>
                        <p className="terminal-text text-xs">
                          Configured and maintained production servers using Nginx and related tools to ensure 
                          high availability, scalability, and secure delivery of web applications.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="devops-2.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">CI/CD Automation</span>
                        <p className="terminal-text text-xs">
                          Designed and implemented a robust CI/CD pipeline, automating testing, builds, and 
                          deployments for faster, more reliable software delivery.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="devops-3.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Performance Monitoring</span>
                        <p className="terminal-text text-xs">
                          Led deployment operations and established DORA metrics monitoring to track deployment 
                          frequency, lead time, change failure rate, and MTTR.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                    <TerminalWindow title="devops-4.sh" className="border border-[#065f46]">
                      <CommandPrompt>
                        <span className="terminal-text-cyan font-semibold block mb-2">Performance Improvements</span>
                        <p className="terminal-text text-xs">
                          Reduced deployment bundle size by 35% via lazy loading and component optimization; 
                          integrated into CI/CD for faster production performance.
                        </p>
                      </CommandPrompt>
                    </TerminalWindow>
                  </div>
                </div>

                <div>
                  <span className="terminal-text-amber text-lg font-semibold block mb-3">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {["Bash", "GitHub Actions", "ESlint", "Prometheus", "Git", "Grafana", "Alert Manager"].map((tech) => (
                      <span key={tech} className="tech-badge text-xs px-3 py-1 rounded border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 animate-fade-in-up">
          <CommandPrompt>
            <span className="terminal-text-amber text-3xl font-bold mb-8 block text-center">Skills Developed</span>
          </CommandPrompt>
          <div className="grid md:grid-cols-3 gap-6">
            <TerminalWindow title="frontend.sh" className="text-center border-2 border-[#065f46] hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="text-4xl block mb-4">🚀</span>
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Backend Development</span>
                  <p className="terminal-text text-sm">
                    Expert in Node.js, Python, database design, and API development.
                    Experience with scalable architecture patterns.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>
            <TerminalWindow title="backend.sh" className="text-center border-2 border-[#065f46] hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="text-4xl block mb-4">⚙️</span>
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Infrastructure & DevOps</span>
                  <p className="terminal-text text-sm">
                    Proficient in containerization, CI/CD pipelines, cloud platforms,
                    and monitoring tools for production applications.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>
            <TerminalWindow title="devops.sh" className="text-center border-2 border-[#065f46] hover:border-[#00ff41] transition-colors">
              <CommandPrompt>
                <div className="mt-4">
                  <span className="text-4xl block mb-4">☁️</span>
                  <span className="terminal-text-amber text-xl font-bold block mb-3">Cloud & Deployment</span>
                  <p className="terminal-text text-sm">
                    Skilled in AWS, Azure, Vercel, container orchestration,
                    and automated deployment strategies.
                  </p>
                </div>
              </CommandPrompt>
            </TerminalWindow>
          </div>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            href="https://drive.google.com/file/d/1a60J5w_OJ6ArBxpTq7tG8UtNB-nHRZiT/view?usp=sharing"
            className="inline-flex items-center bg-[#065f46] hover:bg-[#00ff41] text-black hover:text-black px-8 py-4 rounded transition-all transform hover:scale-105 font-medium border-2 border-[#00ff41]"
          >
            <span className="terminal-text-cyan">wget</span> Download Full Resume
          </Link>
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
            <Link href="/projects" className="text-[#065f46] hover:text-[#00ff41] transition-colors">
              projects
            </Link>
            <Link href="/experience" className="text-[#00ff41] transition-colors">
              experience
            </Link>
          </div>
          <p className="text-[#065f46]">© 2025 samuel@portfolio</p>
        </div>
      </footer>
    </main>
  );
}
