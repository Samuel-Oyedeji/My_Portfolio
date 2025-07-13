import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#070709] text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-8 py-4 border border-gray-800/40">
          <div className="flex items-center space-x-10">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Projects
            </Link>
            <Link href="/experience" className="text-white transition-colors text-sm font-medium">
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

      {/* Experience Content */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 gradient-text-teal-purple">My Experience</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my professional experience, showcasing the skills I've developed
            and the impact I've made at various organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500"></div>

          <div className="space-y-12">

            {/* Additional Experience - Freelance */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-3">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border-4 border-blue-500">
                  <span className="text-2xl font-bold text-white">F</span>
                </div>
              </div>

              <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Freelance Developer</h2>
                    <p className="text-blue-400 text-lg font-semibold">Full Stack Developer</p>
                    <p className="text-gray-400 mt-1">January 2024 - Present</p>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Ongoing
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Working as a freelance developer, delivering custom web applications and solutions
                  for various clients across different industries, from startups to established businesses.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Notable Projects</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-blue-400 mb-2">E-commerce Platform</h4>
                      <p className="text-gray-300 text-sm">
                        Built a complete e-commerce solution with payment integration,
                        inventory management, and admin dashboard for a retail client.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-blue-400 mb-2">Portfolio Websites</h4>
                      <p className="text-gray-300 text-sm">
                        Created responsive portfolio websites for creative professionals,
                        focusing on performance and user experience.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-blue-400 mb-2">SaaS Dashboard</h4>
                      <p className="text-gray-300 text-sm">
                        Developed a comprehensive analytics dashboard for a SaaS startup,
                        including real-time data visualization and reporting features.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-blue-400 mb-2">API Development</h4>
                      <p className="text-gray-300 text-sm">
                        Built RESTful APIs and microservices for various clients,
                        ensuring scalability and proper documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "AWS", "Python", "Node.js", "PostgreSQL", "Stripe", "Vercel"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Procesaur.com */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-1">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-teal-500">
                  <Image
                    src="/images/Procesaur-logo.png"
                    alt="Procesaur.com"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Procesaur.com</h2>
                    <p className="text-teal-400 text-lg font-semibold">Backend Developer</p>
                    <p className="text-gray-400 mt-1">Febuary 2025 - May 2025</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    4 months
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Worked as a Backend Developer at Procesaur.com, where I was responsible
                  for developing and maintaining key features that enhance user engagement and streamline
                  feature deployments.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-teal-400 mb-2">Infrastructure Maintenance</h4>
                      <p className="text-gray-300 text-sm">
                         Engineered and maintained backend services with a focus on performance and reliability, while configuring and optimizing Nginx-based server
                          infrastructure to support scalable deployments.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-teal-400 mb-2">CI/CD</h4>
                      <p className="text-gray-300 text-sm">
                        Designed and implemented a fully automated CI/CD pipeline, significantly reducing manual intervention and accelerating the software release
                        process.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-teal-400 mb-2">A/B Test and Deployment</h4>
                      <p className="text-gray-300 text-sm">
                        Managed end-to-end application deployments across staging and production environments, introducing process improvements that enhanced
                        release stability and developer productivity.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-teal-400 mb-2">Performance Optimization</h4>
                      <p className="text-gray-300 text-sm">
                        Optimized database queries and implemented caching strategies
                        that reduced page load times by 60%.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "Express.js", "Python", "GitHub Actions", "Azure"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HNG */}
            <div className="relative flex items-start space-x-8 animate-fade-in-up-delay-2">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-purple-500">
                  <Image
                    src="/images/HNG_logo.webp"
                    alt="HNG"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">HNG</h2>
                    <p className="text-purple-400 text-lg font-semibold">Lead Devops engineer</p>
                    <p className="text-gray-400 mt-1"> November 2024 - January 2025</p>
                  </div>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    3 months
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Worked as a Lead Devops engineer at HNG, focusing on configuring servers, optimizing builds and deployment time 
                   and managing database.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-purple-400 mb-2">Server Administration</h4>
                      <p className="text-gray-300 text-sm">
                        Configured and maintained production servers using Nginx and related tools to ensure high availability, scalability, and secure delivery of web
                        applications.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-purple-400 mb-2">CI/CD Automation</h4>
                      <p className="text-gray-300 text-sm">
                        Designed and implemented a robust CI/CD pipeline, automating testing, builds, and deployments for faster, more reliable software delivery.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-purple-400 mb-2">Performance Monitoring</h4>
                      <p className="text-gray-300 text-sm">
                        Led deployment operations and established DORA metrics monitoring to track deployment frequency, lead time, change failure rate, and MTTR,
                        enabling data-driven improvements in DevOps performance.
                      </p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-purple-400 mb-2">Performance Improvements</h4>
                      <p className="text-gray-300 text-sm">
                        Reduced deployment bundle size by 35% via lazy loading and component optimization; integrated into CI/CD for faster 
                        production performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Bash", "GitHub Ations", "ESlint", "Prometheus", "Git", "Grafana", "Alert Manager"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50">
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
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text-teal-purple">Skills Developed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-gray-300 text-sm">
                Expert in React, Vue.js, TypeScript, and modern CSS frameworks.
                Focus on responsive design and user experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-gray-300 text-sm">
                Proficient in Node.js, Python, database design, and API development.
                Experience with scalable architecture patterns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3">DevOps & Deployment</h3>
              <p className="text-gray-300 text-sm">
                Skilled in cloud platforms, containerization, CI/CD pipelines,
                and monitoring tools for production applications.
              </p>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            href="https://drive.google.com/file/d/1a60J5w_OJ6ArBxpTq7tG8UtNB-nHRZiT/view?usp=sharing"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-medium"
          >
            Download Full Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="text-white transition-colors">
              Experience
            </Link>
          </div>
          <p className="text-gray-400">© 2025 Oyedeji Samuel</p>
        </div>
      </footer>
    </main>
  );
}
