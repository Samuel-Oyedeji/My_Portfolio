import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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
            <Link href="/projects" className="text-white transition-colors text-sm font-medium">
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

      {/* Projects Content */}
      <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 gradient-text-teal-purple">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my expertise in building scalable applications,
            solving complex problems, and delivering exceptional user experiences.
          </p>
        </div>

        <div className="space-y-12">
          {/* Hezalt Project */}
          <div className="project-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm animate-fade-in-up-delay-1">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 rounded-xl p-3 flex-shrink-0 mr-4">
                    <span className="text-xl font-bold text-white">Rs</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">RealSocial</h2>
                    <p className="text-purple-400">An app where land owners and househunters meet</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Hezalt revolutionizes the job application process by using advanced AI to automatically
                  fill out job applications with personalized, contextually relevant information. The
                  Chrome extension integrates seamlessly with any job site, saving users hours of repetitive work.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">AI-powered form field detection and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Smart response generation using OpenAI API</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Universal compatibility with job sites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">95% reduction in application time</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="https://realsocial.vercel.app"
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    {/* <Image
                      src="https://ext.same-assets.com/125383012/1084437595.svg"
                      alt="External link"
                      width={16}
                      height={16}
                      className="mr-2 filter brightness-0 invert"
                    /> */}
                    Visit Project
                  </Link>
                  <span className="text-green-400 font-medium">✅ Live & Active</span>
                </div>
              </div>

              <div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Vercel"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-600/50 text-center">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TaskFlow Project */}
          <div className="project-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm animate-fade-in-up-delay-2">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 rounded-xl p-3 flex-shrink-0 mr-4">
                    <span className="text-xl font-bold text-white">A</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">AnyDB</h2>
                    <p className="text-emerald-400">A realtime database management app</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  TaskFlow is a modern project management solution designed for distributed teams.
                  It combines real-time collaboration, advanced analytics, and cross-platform
                  accessibility to streamline team productivity and project delivery.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Real-time collaborative workspaces</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Advanced task filtering and custom views</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Integrated time tracking and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Cross-platform desktop and mobile apps</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="https://anydb.name.ng/"
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    {/* <Image
                      src="https://ext.same-assets.com/125383012/1084437595.svg"
                      alt="External link"
                      width={16}
                      height={16}
                      className="mr-2 filter brightness-0 invert"
                    /> */}
                    Visit Project
                  </Link>
                  <span className="text-green-400 font-medium">✅ Live & Active</span>
                </div>
              </div>

              <div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["React", "TypeScript", "Render", "vercel", "PostgreSQL", "MySQL", "Mongodb"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-600/50 text-center">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DevTools Analytics Project */}
          <div className="project-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm animate-fade-in-up-delay-3">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-xl p-3 flex-shrink-0 mr-4">
                    <span className="text-xl font-bold text-white">M</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Social Manager</h2>
                    <p className="text-blue-400">Social media manager</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  A comprehensive development analytics platform that provides real-time insights
                  into application performance, code quality, and team productivity. Designed to
                  help development teams identify bottlenecks and optimize their workflows.
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Real-time performance monitoring and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Automated security vulnerability scanning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">CI/CD pipeline integration with rollbacks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">Team collaboration and detailed reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="https://anydb.name.ng/"
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    {/* <div className="inline-flex items-center bg-gray-700/50 text-gray-300 px-6 py-3 rounded-xl font-medium"> */}
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      View Code
                    {/* </div> */}
                  </Link>

                  <span className="text-blue-400 font-medium">⚡ In Development</span>
                </div>
              </div>

              <div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Next.js", "Unsplash", "Shadcn", "Gemini API", "PostgreSQL", "Supabase", "TypeScript"].map((tech) => (
                      <span key={tech} className="tech-badge bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-600/50 text-center">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 gradient-text-teal-purple">Interested in Collaborating?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, innovative ideas, or opportunities to create something amazing together.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-medium"
          >
            Let's Connect
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
            <Link href="/projects" className="text-white transition-colors">
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
