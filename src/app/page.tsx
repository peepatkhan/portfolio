import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-900 backdrop-blur-sm text-white relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Peepat Khantharacha</h1>
            <p className="text-xl font-semibold text-gray-400 max-w-2xl mx-auto leading-relaxed">Software Engineer ( Full-Stack Engineer )</p>
          </div>

          {/* Bio Section */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Photo Section */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-gray-500 transition-all duration-300 shadow-2xl">
                      <Image src="/graduation.png" alt="Peepat Khantharacha - Graduation Photo" width={350} height={350} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-200 underline underline-offset-8 decoration-4 decoration-gray-500">About</h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    Full Stack Developer passionate about programming, not only as a way to solve problems but also as a medium to express creativity and bring ideas to life. I strongly believe in continuous learning and self-improvement
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-3 underline underline-offset-8 decoration-4 decoration-gray-500">I ♥</h3>
                      <p className="text-gray-400">Coding, Workout, Learning and Chinese series</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-3 underline underline-offset-8 decoration-4 decoration-gray-500">Bio</h3>
                      <span className="font-semibold">2002</span>
                      <span className="text-gray-400"> - Born in Khon Kaen, Thailand</span>
                      <br />
                      <span className="font-semibold">2024</span>
                      <span className="text-gray-400"> - Bachelor’s Degree in Computer Engineering, Faculty of Engineering, Khon Kaen University</span>
                      <br />
                      <span className="font-semibold">2025 - Present</span>
                      <span className="text-gray-400"> - Working at Smart Shift Solution</span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Section */}
        </div>
        <div className="w-full py-6 bg-neutral-900 flex justify-center items-center gap-6">
          <a href="https://github.com/peepatkhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/peepat-khantharacha-6ba7b4252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </main>

    </>
  );
}
