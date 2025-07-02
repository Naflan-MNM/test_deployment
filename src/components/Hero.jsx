import React from "react";
import { ArrowDown, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative"
    >
      <div className="max-w-4xl text-center">
        {/* Animated greeting */}
        <div className="mb-6 opacity-0 animate-fade-in-up">
          <span className="text-emerald-400 text-lg font-medium">
            Hello, I'm
          </span>
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-300 bg-clip-text text-transparent">
            Naflan Mohammed
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
          Full Stack Developer & UI/UX Enthusiast
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
          I craft exceptional digital experiences with modern technologies.
          Passionate about creating scalable, user-friendly applications that
          solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-800">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
          >
            View My Work
          </button>
          <a
            href="/Portfolio/naflan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-emerald-400/10"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
        <div
          className="flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
