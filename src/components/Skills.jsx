import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 95 },
      { name: "Spring Boot", level: 60 },
      { name: "Java", level: 60 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Postman", level: 90 },
      { name: "Azure/Azure DevOps", level: 60 },
      { name: "AWS/Cloud", level: 60 },
      { name: "Git/GitHub", level: 95 },
      { name: "Figma/Design", level: 80 },
      { name: "Android Studio", level: 70 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Also Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL",
              "React Native",
              "Python",
              "Java",
              "PHP",
              "C",
              "C#",
              "SQL",
              "MySQL",
              "NoSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
