import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-8 py-4 border border-gray-800/40">
          <div className="flex items-center space-x-10">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <Image
            src="/images/pic1.png"
            alt="Oyedeji Samuel"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6"
          />
          <h2 className="text-2xl font-medium text-white mb-2">Oyedeji Samuel</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in-up-delay-1">
          <span className="gradient-text-teal-purple">Software Engineer, Innovator,</span>
          <br />
          <span className="gradient-text-teal-purple">and Problem Solver.</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay-2">
          I'm Oyedeji Samuel, a software engineer passionate about solving problems. I specialize in
          creating scalable, user-friendly technologies, empowering individuals and businesses to
          achieve their goals efficiently and effectively.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up-delay-3">
          <Link href="https://x.com/samissudo" className="hover:opacity-80 transition-opacity p-2">
            <Image
              src="https://ext.same-assets.com/125383012/3293094908.svg"
              alt="Twitter/X"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="https://www.instagram.com" className="hover:opacity-80 transition-opacity p-2">
            <Image
              src="https://ext.same-assets.com/125383012/264913390.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="https://github.com/Samuel-Oyedeji" className="hover:opacity-80 transition-opacity p-2">
            <Image
              src="https://ext.same-assets.com/125383012/1114742367.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/samuel-oyedeji004/" className="hover:opacity-80 transition-opacity p-2">
            <Image
              src="https://ext.same-assets.com/125383012/2708752127.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="opacity-60 p-2">
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-8 max-w-6xl mx-auto mb-20">
        <div className="flex items-center mb-8 animate-fade-in-up">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
            <Image
              src="/images/projects-logo.png"
              alt="Projects"
              width={48}
              height={48}
            />
          </div>
          <h2 className="text-3xl font-bold gradient-text-teal-purple">Featured Projects</h2>
        </div>

        <p className="text-gray-400 mb-12 text-lg animate-fade-in-up-delay-1">
          A carefully curated selection of projects that showcase my expertise in building scalable applications,
          solving complex problems, and delivering exceptional user experiences.
        </p>

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


        <div className="text-center mt-12 animate-fade-in-up">
          <Link
            href="/projects"
            className="inline-flex items-center bg-gray-800/50 hover:bg-gray-800/70 text-white px-6 py-3 rounded-xl transition-colors border border-gray-700/50"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 max-w-4xl mx-auto mb-20">
        <div className="flex items-center mb-8 animate-fade-in-up">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
            <Image
              src="/images/experience-logo.png"
              alt="Experience"
              width={68}
              height={68}
            />
          </div>
          <h2 className="text-3xl font-bold gradient-text-teal-purple">Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">

          {/* Procesaur.com */}
          <div className="flex items-start space-x-4 animate-fade-in-up-delay-1">
            <Image
              src="/images/Procesaur-logo.webp"
              alt="Procesaur.com"
              width={48}
              height={48}
              className="rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Procesaur.com</h3>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Febuary 2025</div>
                  <div className="text-sm text-teal-400">May 2025</div>
                </div>
              </div>
              <p className="text-teal-400 mb-3">Backend Developer</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Engineered and maintained backend services with a focus on performance and reliability.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Designed and implemented a fully automated CI/CD pipeline, significantly reducing manual intervention.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Optimized database queries and implemented caching strategies that reduced page load times by 60%.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* HNG */}
          <div className="flex items-start space-x-4 animate-fade-in-up-delay-2">
            <Image
              src="/images/HNG_logo.webp"
              alt="HNG"
              width={48}
              height={48}
              className="rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">HNG</h3>
                <div className="text-right">
                  <div className="text-sm text-gray-400"> November 2024</div>
                  <div className="text-sm text-gray-400">January 2025</div>
                </div>
              </div>
              <p className="text-teal-400 mb-3">Lead Devops engineer</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Configured and maintained production servers using Nginx and related tools to ensure high availability.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Designed and implemented a robust CI/CD pipeline, automating testing, builds, and deployments for faster, more reliable software delivery.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 animate-fade-in-up-delay-3">
          <Link
            href="/experience"
            className="text-teal-400 hover:text-teal-300 transition-colors font-medium mb-6 inline-block"
          >
            Show 1 more experience →
          </Link>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            href="https://drive.google.com/file/d/1a60J5w_OJ6ArBxpTq7tG8UtNB-nHRZiT/view?usp=sharing"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-medium"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800/50 animate-fade-in-up">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
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
