"use client";

import Image from "next/image";
import Link from "next/link";
import TerminalNavigation from "@/components/TerminalNavigation";
import CommandPrompt from "@/components/CommandPrompt";
import TerminalWindow from "@/components/TerminalWindow";
import ThemeTransitionAnimation from "@/components/ThemeTransitionAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function Experience() {
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

        {/* Experience Content */}
        <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="neubrutalism-heading text-5xl md:text-6xl mb-4">Experience</h1>
            <p className="text-xl neubrutalism-text max-w-3xl mx-auto">
              A journey through my professional experience, showcasing skills developed
              and impact made at various organizations.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {/* Freelance */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="neubrutalism-card-cyan w-20 h-20 flex items-center justify-center rounded-xl">
                  <span className="text-3xl font-black text-white">F</span>
                </div>
              </div>

              <div className="flex-1 neubrutalism-card-cyan">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black mb-2 neubrutalism-text-bold">Freelance Developer</h2>
                    <h3 className="text-lg font-bold text-[#06B6D4] mb-1">Full Stack Developer</h3>
                    <p className="text-sm font-semibold neubrutalism-text">January 2024 - Present</p>
                  </div>
                  <span className="neubrutalism-badge-green text-xs">
                    Ongoing
                  </span>
                </div>

                <p className="neubrutalism-text mb-6">
                  Working as a freelance developer, delivering custom web applications and solutions
                  for various clients across different industries, from startups to established businesses.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 neubrutalism-text-bold text-lg">Notable Projects</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="neubrutalism-card-blue p-4">
                      <h5 className="font-bold mb-2 text-[#0066FF]">E-commerce Platform</h5>
                      <p className="neubrutalism-text text-xs">
                        Built a complete e-commerce solution with payment integration,
                        inventory management, and admin dashboard for a retail client.
                      </p>
                    </div>
                    <div className="neubrutalism-card-pink p-4">
                      <h5 className="font-bold mb-2 text-[#FF006E]">Portfolio Websites</h5>
                      <p className="neubrutalism-text text-xs">
                        Created responsive portfolio websites for creative professionals,
                        focusing on performance and user experience.
                      </p>
                    </div>
                    <div className="neubrutalism-card-yellow p-4">
                      <h5 className="font-bold mb-2 text-[#FFBE0B]">SaaS Dashboard</h5>
                      <p className="neubrutalism-text text-xs">
                        Developed a comprehensive analytics dashboard for a SaaS startup,
                        including real-time data visualization and reporting features.
                      </p>
                    </div>
                    <div className="neubrutalism-card-green p-4">
                      <h5 className="font-bold mb-2 text-[#8AC926]">API Development</h5>
                      <p className="neubrutalism-text text-xs">
                        Built RESTful APIs and microservices for various clients,
                        ensuring scalability and proper documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 neubrutalism-text-bold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "AWS", "Python", "Node.js", "PostgreSQL", "Stripe", "Vercel"].map((tech) => (
                      <span key={tech} className="neubrutalism-badge-blue text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Procesaur.com */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="neubrutalism-card-purple w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden">
                  <Image
                    src="/images/procesaur-logo.webp"
                    alt="Procesaur.com"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              <div className="flex-1 neubrutalism-card-purple">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black mb-2 neubrutalism-text-bold">Procesaur.com</h2>
                    <h3 className="text-lg font-bold text-[#9D4EDD] mb-1">Backend Developer</h3>
                    <p className="text-sm font-semibold neubrutalism-text">February 2025 - May 2025</p>
                  </div>
                  <span className="neubrutalism-badge-cyan text-xs">
                    4 months
                  </span>
                </div>

                <p className="neubrutalism-text mb-6">
                  Worked as a Backend Developer at Procesaur.com, where I was responsible
                  for developing and maintaining key features that enhance user engagement and streamline
                  feature deployments.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 neubrutalism-text-bold text-lg">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="neubrutalism-card-blue p-4">
                      <h5 className="font-bold mb-2 text-[#0066FF]">Infrastructure Maintenance</h5>
                      <p className="neubrutalism-text text-xs">
                        Engineered and maintained backend services with a focus on performance and reliability, 
                        while configuring and optimizing Nginx-based server infrastructure.
                      </p>
                    </div>
                    <div className="neubrutalism-card-pink p-4">
                      <h5 className="font-bold mb-2 text-[#FF006E]">CI/CD</h5>
                      <p className="neubrutalism-text text-xs">
                        Designed and implemented a fully automated CI/CD pipeline, significantly reducing 
                        manual intervention and accelerating the software release process.
                      </p>
                    </div>
                    <div className="neubrutalism-card-yellow p-4">
                      <h5 className="font-bold mb-2 text-[#FFBE0B]">A/B Test and Deployment</h5>
                      <p className="neubrutalism-text text-xs">
                        Managed end-to-end application deployments across staging and production environments, 
                        introducing process improvements that enhanced release stability.
                      </p>
                    </div>
                    <div className="neubrutalism-card-green p-4">
                      <h5 className="font-bold mb-2 text-[#8AC926]">Performance Optimization</h5>
                      <p className="neubrutalism-text text-xs">
                        Optimized database queries and implemented caching strategies
                        that reduced page load times by 60%.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 neubrutalism-text-bold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "Express.js", "Python", "GitHub Actions", "Azure"].map((tech) => (
                      <span key={tech} className="neubrutalism-badge-purple text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HNG */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="neubrutalism-card-yellow w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden">
                  <Image
                    src="/images/HNG_logo.webp"
                    alt="HNG"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              <div className="flex-1 neubrutalism-card-yellow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black mb-2 neubrutalism-text-bold">HNG</h2>
                    <h3 className="text-lg font-bold text-[#FFBE0B] mb-1">Lead DevOps Engineer</h3>
                    <p className="text-sm font-semibold neubrutalism-text">November 2024 - January 2025</p>
                  </div>
                  <span className="neubrutalism-badge-purple text-xs">
                    3 months
                  </span>
                </div>

                <p className="neubrutalism-text mb-6">
                  Worked as a Lead DevOps engineer at HNG, focusing on configuring servers, optimizing builds 
                  and deployment time, and managing databases.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 neubrutalism-text-bold text-lg">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="neubrutalism-card-blue p-4">
                      <h5 className="font-bold mb-2 text-[#0066FF]">Server Administration</h5>
                      <p className="neubrutalism-text text-xs">
                        Configured and maintained production servers using Nginx and related tools to ensure 
                        high availability, scalability, and secure delivery of web applications.
                      </p>
                    </div>
                    <div className="neubrutalism-card-pink p-4">
                      <h5 className="font-bold mb-2 text-[#FF006E]">CI/CD Automation</h5>
                      <p className="neubrutalism-text text-xs">
                        Designed and implemented a robust CI/CD pipeline, automating testing, builds, and 
                        deployments for faster, more reliable software delivery.
                      </p>
                    </div>
                    <div className="neubrutalism-card-green p-4">
                      <h5 className="font-bold mb-2 text-[#8AC926]">Performance Monitoring</h5>
                      <p className="neubrutalism-text text-xs">
                        Led deployment operations and established DORA metrics monitoring to track deployment 
                        frequency, lead time, change failure rate, and MTTR.
                      </p>
                    </div>
                    <div className="neubrutalism-card-cyan p-4">
                      <h5 className="font-bold mb-2 text-[#06B6D4]">Performance Improvements</h5>
                      <p className="neubrutalism-text text-xs">
                        Reduced deployment bundle size by 35% via lazy loading and component optimization; 
                        integrated into CI/CD for faster production performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 neubrutalism-text-bold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Bash", "GitHub Actions", "ESlint", "Prometheus", "Git", "Grafana", "Alert Manager"].map((tech) => (
                      <span key={tech} className="neubrutalism-badge-yellow text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16">
            <h2 className="neubrutalism-heading text-3xl md:text-4xl mb-8 text-center">Skills Developed</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="neubrutalism-card-blue text-center">
                <span className="text-5xl block mb-4">🚀</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Backend Development</h3>
                <p className="neubrutalism-text text-sm">
                  Expert in Node.js, Python, database design, and API development.
                  Experience with scalable architecture patterns.
                </p>
              </div>
              <div className="neubrutalism-card-pink text-center">
                <span className="text-5xl block mb-4">⚙️</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Infrastructure & DevOps</h3>
                <p className="neubrutalism-text text-sm">
                  Proficient in containerization, CI/CD pipelines, cloud platforms,
                  and monitoring tools for production applications.
                </p>
              </div>
              <div className="neubrutalism-card-yellow text-center">
                <span className="text-5xl block mb-4">☁️</span>
                <h3 className="text-xl font-black mb-3 neubrutalism-text-bold">Cloud & Deployment</h3>
                <p className="neubrutalism-text text-sm">
                  Skilled in AWS, Azure, Vercel, container orchestration,
                  and automated deployment strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Download Resume */}
          <div className="text-center mt-16">
            <Link
              href="https://drive.google.com/file/d/1a60J5w_OJ6ArBxpTq7tG8UtNB-nHRZiT/view?usp=sharing"
              className="neubrutalism-button neubrutalism-button-primary text-lg"
            >
              Download Full Resume
            </Link>
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
              <Link href="/projects" className="hover:text-[#8AC926] transition-colors">
                projects
              </Link>
              <Link href="/experience" className="text-[#8AC926]">
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
