import Image from "next/image";
import { FaGithub, FaLinkedin, FaJava, FaDocker, FaExternalLinkAlt } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiGo, SiPostgresql, SiMongodb } from "react-icons/si";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-neutral-900 backdrop-blur-sm text-neutral-900 dark:text-white relative z-10">
        {/* Theme Toggle */}
        <div className="container mx-auto px-6 pt-6 flex justify-end">
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">Peepat Khantharacha</h1>
            <p className="text-xl font-semibold text-neutral-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">Software Engineer</p>
          </div>

          {/* Bio Section */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-300 dark:border-gray-800 rounded-2xl p-8 hover:border-neutral-400 dark:hover:border-gray-600 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Photo Section */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-neutral-300 dark:border-gray-700 group-hover:border-neutral-400 dark:group-hover:border-gray-500 transition-all duration-300 shadow-2xl">
                      <Image src="/graduation.png" alt="Peepat Khantharacha - Graduation Photo" width={350} height={350} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-gray-200 underline underline-offset-8 decoration-4 decoration-neutral-500 dark:decoration-gray-500">About</h2>
                  <p className="text-neutral-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                    Full Stack Developer passionate about programming, not only as a way to solve problems but also as a medium to express creativity and bring ideas to life. I strongly believe in continuous learning and self-improvement
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-700 dark:text-gray-300 mb-3 underline underline-offset-8 decoration-4 decoration-neutral-500 dark:decoration-gray-500">I ♥</h3>
                      <p className="text-neutral-600 dark:text-gray-400">Coding, Workout, Learning and Chinese series</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-700 dark:text-gray-300 mb-3 underline underline-offset-8 decoration-4 decoration-neutral-500 dark:decoration-gray-500">Bio</h3>
                      <span className="font-semibold">2002</span>
                      <span className="text-neutral-600 dark:text-gray-400"> - Born in Khon Kaen, Thailand</span>
                      <br />
                      <span className="font-semibold">2024</span>
                      <span className="text-neutral-600 dark:text-gray-400"> - Bachelor&apos;s Degree in Computer Engineering, Faculty of Engineering, Khon Kaen University</span>
                      <br />
                      <span className="font-semibold">2024 - Present</span>
                      <span className="text-neutral-600 dark:text-gray-400"> - Working at Smart Shift Solution</span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-300 dark:border-gray-800 rounded-2xl p-8 hover:border-neutral-400 dark:hover:border-gray-600 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-8 text-neutral-800 dark:text-gray-200 underline underline-offset-8 decoration-4 decoration-neutral-500 dark:decoration-gray-500">Tech Stack</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <FaJava className="text-4xl text-orange-500" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">Java</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <SiSpringboot className="text-4xl text-green-500" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">Spring Boot</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <SiNextdotjs className="text-4xl text-neutral-900 dark:text-white" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <SiGo className="text-4xl text-cyan-400" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">Golang</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <SiPostgresql className="text-4xl text-blue-400" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <SiMongodb className="text-4xl text-green-400" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-all duration-300">
                    <FaDocker className="text-4xl text-blue-500" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-gray-400">Docker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-300 dark:border-gray-800 rounded-2xl p-8 hover:border-neutral-400 dark:hover:border-gray-600 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-8 text-neutral-800 dark:text-gray-200 underline underline-offset-8 decoration-4 decoration-neutral-500 dark:decoration-gray-500">Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://coquetbeauty.com" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden h-full border border-neutral-300 dark:border-gray-700 group-hover:border-neutral-400 dark:group-hover:border-gray-500 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                      <Image src="/work-coquet.png" alt="Coquet Beauty" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-gray-200">Coquet Beauty</h3>
                        <FaExternalLinkAlt className="text-neutral-500 dark:text-gray-500 group-hover:text-neutral-700 dark:group-hover:text-gray-300 transition-colors" />
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-gray-500">coquetbeauty.com</p>
                    </div>
                  </div>
                </a>
                <a href="https://admission.gs.kku.ac.th" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden h-full border border-neutral-300 dark:border-gray-700 group-hover:border-neutral-400 dark:group-hover:border-gray-500 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                      <Image src="/work-kku.png" alt="KKU Admission" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-gray-200">KKU Admission</h3>
                        <FaExternalLinkAlt className="text-neutral-500 dark:text-gray-500 group-hover:text-neutral-700 dark:group-hover:text-gray-300 transition-colors" />
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-gray-500">admission.kku.ac.th</p>
                    </div>
                  </div>
                </a>
                <a href="https://e-payment.pi.ac.th" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden h-full border border-neutral-300 dark:border-gray-700 group-hover:border-neutral-400 dark:group-hover:border-gray-500 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                      <Image src="/work-pi.png" alt="PI E-Payment" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-gray-200">PI E-Payment</h3>
                        <FaExternalLinkAlt className="text-neutral-500 dark:text-gray-500 group-hover:text-neutral-700 dark:group-hover:text-gray-300 transition-colors" />
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-gray-500">e-payment.pi.ac.th</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-6 bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center gap-6 border-t border-neutral-300 dark:border-gray-800">
          <a href="https://github.com/peepatkhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-2xl">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/peepat-khantharacha-6ba7b4252/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </main>
    </>
  );
}
