import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Corp",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to create exceptional user experiences.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Reduced bug reports by 50% through comprehensive testing",
      "Implemented real-time features using WebSocket technology",
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    location: "Los Angeles, CA",
    period: "2019 - 2020",
    description:
      "Focused on creating beautiful, responsive user interfaces and implementing complex animations. Worked closely with design team to bring creative visions to life.",
    achievements: [
      "Delivered 20+ pixel-perfect website designs",
      "Improved user engagement by 30% through UX improvements",
      "Established company-wide CSS/JS coding standards",
    ],
    technologies: ["JavaScript", "CSS3", "SASS", "jQuery", "Figma"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to
            work with
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-slate-900"></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-emerald-400 text-sm mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-slate-300 text-sm flex items-start"
                          >
                            <span className="text-emerald-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Calendar size={20} />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
