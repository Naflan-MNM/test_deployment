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
    <section id="certifications" className="py-10 px-5 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-4 rounded-xl shadow-md"
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
