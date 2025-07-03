import React from "react";

const educationData = [
  {
    degree: "BSc in Information Communication Technology",
    institution: "University of Sri Jayewardenepura",
    duration: "2020 - 2025",
    gpa: "GPA: 3.61",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Zahira College",
    duration: "2017 - 2019",
    gpa: "Commerce Stream",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-12 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="text-sm text-gray-400">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
