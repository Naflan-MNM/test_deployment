import React from "react";
import { motion } from "framer-motion";
import { School, CalendarDays, BadgeCheck } from "lucide-react";

const educationData = [
  {
    degree: "BICT Hons Special In Software Engineering",
    institution: "University of Sri Jayewardenepura",
    duration: "2021 - 2025",
    gpa: "GPA: 3.61",
  },
  {
    degree: "G.C.E. Advanced Level - Technology Stream",
    institution: "MT/Ajmeer National School",
    duration: "2017 - 2019",
    gpa: "Z-Score: 1.8",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-12 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Educations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 ">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-800/50 p-6 rounded-xl "
            >
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>

              <p className="flex items-center gap-2 text-gray-300 mt-2">
                <School size={18} className="text-emerald-400" />
                {edu.institution}
              </p>

              <p className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <CalendarDays size={16} className="text-blue-400" />
                {edu.duration}
              </p>

              <p className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <BadgeCheck size={16} className="text-yellow-400" />
                {edu.gpa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
