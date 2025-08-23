import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 backdrop-blur-sm text-white relative z-10">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Peepat Khantharacha</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">Software Engineer ( Full-Stack Engineer )</p>
        </div>

        {/* Bio Section */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
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
                <h2 className="text-2xl font-semibold mb-6 text-gray-200">About</h2>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Full Stack Developer passionate about programming, not only as a way to solve problems but also as a medium to express creativity and bring ideas to life. I strongly believe in continuous learning and self-improvement
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300 mb-3">I ♥</h3>
                    <p className="text-gray-400">Coding, Workout, Learning and Chinese series</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-300 mb-3">Currently</h3>
                    <p className="text-gray-400">Learning Golang for fintech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Let&apos;s Connect</h2>
          <p className="text-gray-400 mb-8">Interested in working together? Let&apos;s build something amazing.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-200">Get in Touch</button>
            <button className="border border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-lg hover:border-gray-400 hover:text-white transition-all duration-200">View Resume</button>
          </div>
        </div>
      </div>
    </main>
  );
}
