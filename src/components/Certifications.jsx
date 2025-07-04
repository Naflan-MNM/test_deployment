import React from "react";
import { CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Meta Front-End Developer Certificate",
    provider: "Coursera",
    year: "2024",
    link: "https://coursera.org/verify/xyz123", // change to actual link
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    year: "2023",
    link: "https://freecodecamp.org/certificate/abc456", // change to actual link
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
          Here are some of the certifications I have earned to enhance my skills
          and expertise.
        </p>
      </div>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center bg-slate-800/50 p-4 rounded-xl shadow-md"
          >
            <CheckCircle className="text-green-500 mr-3" />
            <div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                {cert.title}
              </a>
              <p className="text-sm text-gray-400">
                {cert.provider} – {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
