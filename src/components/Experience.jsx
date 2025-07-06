import React from "react";
import { Calendar, MapPin, Building, Download } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Freelancing & Research Project",
    location: "Remote",
    period: "January 2025 - Present",
    description:
      "Led frontend development for CEYWAY, an AI-powered travel planning app, and Gexmoo, a full-stack e-commerce web application. CEYWAY was built as part of a 3-member academic research project using GPT-3.5-turbo and RAG architecture, while Gexmoo was developed as a freelance project with a modern MERN stack. Focused on building scalable, production-quality applications with strong UI/UX design and secure API integrations.",
    achievements: [
      "Designed and implemented 20+ mobile UI screens for CEYWAY using React Native and Tailwind-style styling",
      "Integrated Context API for state management and built user flows for location input, preferences, and AI itinerary generation",
      "Collaborated on backend integration using LangChain, Pinecone, and GPT-3.5-turbo with RAG architecture",
      "Implemented dynamic location features using Google Maps API and RESTful services",
      "Contributed to AI prompt engineering, context injection, and debugging for model accuracy",
      "Conducted unit, integration, alpha, and beta testing to ensure application stability",
      "Developed a fully functional MERN-stack e-commerce platform with secure authentication using JWT and bcrypt",
      "Handled image uploads with Multer and Cloudinary, and implemented product CRUD operations",
      "Used React, Vite, and Tailwind CSS to build a fast, responsive frontend with real-time feedback (React Toastify)",
      "Ensured modular codebase, REST API integration, and proper environment handling with dotenv and CORS",
    ],
    technologies: [
      // Common & CEYWAY
      "React Native",
      "React.js",
      "JavaScript",
      "Spring Boot",
      "GPT-3.5-turbo",
      "RAG Architecture",
      "LangChain",
      "Context API",
      "Axios",
      "REST API",
      "Expo",
      "React Navigation",
      "Figma",
      "Postman",
      "Google Maps API",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcryptjs",
      "Multer",
      "Cloudinary",
      "Vite",
      "React Toastify",
      "dotenv",
      "CORS",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "SLT Mobitel PVT LTD",
    location: "Colombo, Sri Lanka",
    period: "August 2024 - February 2025",
    description:
      "Completed a 6-month internship where I led the frontend development of a comprehensive Seat Reservation System (SRS) and contributed to the Dept Recovery System. Focused on building production-grade React applications with reusable components, advanced UI logic, and seamless integration with RESTful APIs.",
    achievements: [
      "Spearheaded the development of the entire frontend for the Seat Reservation System using React.js and Tailwind CSS, covering over 20+ pages",
      "Engineered reusable UI components to improve development efficiency and maintainability across the system",
      "Implemented key modules including user authentication (Google OAuth), seat booking, booking history, QR code generation, confirmation emails, and cancellation workflows",
      "Built a full-featured admin panel with dashboards for managing seat availability, attendance records (PDF/CSV export), trainee data, floor layouts, holiday settings, and analytics",
      "Ensured responsive design, user-friendly flows, and seamless integration with backend APIs developed by a teammate",
      "Contributed to the Dept Recovery System by developing 8+ components under the DRC and Incident Detail sections, ensuring consistent UI/UX using Tailwind and functional integration with APIs",
      "Collaborated via GitHub and Bitbucket, resolving merge conflicts and supporting integration testing and bug fixing",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "BitBucket",
      "GoogleAPI",
      "REST API",
      "JWT",
      "QR Code Generation",
      "EmailJS",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Freelancing",
    location: "Remote",
    period: "March 2022 - June 2024",
    description:
      "Worked independently as a freelance frontend developer, delivering a wide range of web and mobile solutions for clients. Developed over 10 personal and client portfolio websites using HTML, CSS, and JavaScript. Created responsive UIs and modern interfaces using React.js and Bootstrap. Built production-ready mobile applications using React Native, Flutter, and Android Studio. Collaborated closely with clients to gather requirements, deliver clean code, and ensure user-centric design and functionality.",
    achievements: [
      "Developed 10+ portfolio websites with custom HTML, CSS, and JavaScript for clients across various industries",
      "Built a Donor Blood Donation mobile app using React Native, enabling users to register, request, and donate blood efficiently",
      "Created a GPA Calculator mobile app using Flutter and Android Studio for students to compute academic results with ease",
      "Developed a fully functional Hotel Management web application using React.js and Bootstrap with admin/user dashboards",
      "Delivered a clean and interactive To-Do List web app with CRUD operations using React and local storage",
      "Provided end-to-end UI development services, including design translation, animation integration, and cross-browser testing",
      "Worked with tools like Figma for UI prototyping and implemented responsive design best practices across all projects",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Native",
      "Flutter",
      "Android Studio",
      "Bootstrap",
      "jQuery",
      "SASS",
      "PHP",
      "Python",
      "Java",
      "Figma",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent ">
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
          <a
            href="/Portfolio/naflan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-xs w-full justify-center items-center bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 gap-2 mx-auto"
          >
            <Download size={30} />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
