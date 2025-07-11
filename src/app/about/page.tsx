import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#070709] text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-8 py-4 border border-gray-800/40">
          <div className="flex items-center space-x-10">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Projects
            </Link>
            <Link href="/experience" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Experience
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Avatar - Top Left */}
      <div className="fixed top-8 left-8 z-40">
        <Link href="/">
          <Image
            src="/images/pic1.png"
            alt="Oyedeji Samuel"
            width={48}
            height={48}
            className="rounded-full hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* About Content */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Image
            src="/images/pic1.png"
            alt="Oyedeji Samuel"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 gradient-text-teal-purple">About Me</h1>
          <p className="text-xl text-gray-300">Software Engineer, Innovator, and Problem Solver</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up-delay-1">
            <h2 className="text-2xl font-bold mb-6 gradient-text-teal-purple">My Journey</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Oyedeji Samuel, a passionate software engineer who thrives on solving complex problems
                and building innovative solutions. My journey in technology began with curiosity about how
                things work, which evolved into a deep love for creating software that makes a real difference.
              </p>
              <p>
                I specialize in full-stack development, with expertise spanning from modern frontend frameworks
                to scalable backend architectures. My approach combines technical excellence with user-centered
                design, ensuring that every solution is not just functional, but truly useful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I believe in continuous learning
                and the power of collaboration to drive innovation.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <h2 className="text-2xl font-bold mb-6 gradient-text-teal-purple">Skills & Technologies</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "JavaScript"].map((skill) => (
                    <span key={skill} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                    <span key={skill} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "AWS", "Vercel", "Git", "GitHub Actions"].map((skill) => (
                    <span key={skill} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-3">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text-teal-purple">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Development</h3>
              <p className="text-gray-300">
                Building end-to-end applications with modern technologies, from responsive frontends
                to scalable backend architectures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Application Deployment</h3>
              <p className="text-gray-300">
                I archietect scalable infrastructure for applications on different cloud platforms, i also handle 
                deployment of these applications with tools like github action and jenkins.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">
                Optimizing applications for speed, scalability, and efficiency to deliver
                the best possible user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 gradient-text-teal-purple">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects,
            or just having a chat about technology. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="https://x.com/samissudo" className="hover:opacity-80 transition-opacity p-3 bg-gray-800/50 rounded-full border border-gray-700/50">
              <Image
                src="https://ext.same-assets.com/125383012/3293094908.svg"
                alt="Twitter/X"
                width={24}
                height={24}
                className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link href="https://www.instagram.com" className="hover:opacity-80 transition-opacity p-3 bg-gray-800/50 rounded-full border border-gray-700/50">
              <Image
                src="https://ext.same-assets.com/125383012/264913390.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link href="https://github.com/Samuel-Oyedeji" className="hover:opacity-80 transition-opacity p-3 bg-gray-800/50 rounded-full border border-gray-700/50">
              <Image
                src="https://ext.same-assets.com/125383012/1114742367.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/samuel-oyedeji004/" className="hover:opacity-80 transition-opacity p-3 bg-gray-800/50 rounded-full border border-gray-700/50">
              <Image
                src="https://ext.same-assets.com/125383012/2708752127.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </Link>
          </div>
          <p className="text-gray-400">© 2025 Oyedeji Samuel</p>
        </div>
      </footer>
    </main>
  );
}
