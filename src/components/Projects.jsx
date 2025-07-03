import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Gexmoo – Full-Stack E-commerce Web Application",
    description:
      "Gexmoo is a fully functional e-commerce platform built with the MERN stack. The frontend, developed using React, Vite, and Tailwind CSS, offers a fast, responsive user experience with seamless navigation via React Router and real-time feedback using React Toastify. The backend is powered by Node.js, Express, and MongoDB, with Mongoose for data modeling. It features secure user authentication with JWT and bcrypt, image uploading via Multer, and cloud storage integration with Cloudinary. The system ensures robust form validation, environment management using dotenv, and cross-origin communication with CORS. Gexmoo is designed to be scalable and maintainable, with a modular structure and well-documented codebase.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "bcryptjs",
      "jsonwebtoken",
      "validator",
      "multer",
      "cloudinary",
      "dotenv",
      "cors",
    ],
    github: "https://github.com/Naflan-MNM/seat-reservation-system---frontend-",
    github1: "https://github.com/Naflan-MNM/seat-reservation-system---backend-",
    live: "d",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "JavaScript", "Supabase", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions, forecasts, and weather maps with a beautiful, intuitive interface.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Tailwind", "Weather API"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media managers to track engagement, growth, and performance across multiple platforms.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-slate-800/90 text-white rounded-full hover:bg-slate-700 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  {project.github1 && (
                    <a
                      href={project.github1}
                      className="p-2 bg-slate-800/90 text-white rounded-full hover:bg-slate-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="p-2 bg-blue-600/90 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description.length > 150
                    ? project.description.slice(0, 150) + "..."
                    : project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-emerald-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setViewDetail(true);
                  }}
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay for Detail View (outside map!) */}
        {viewDetail && selectedProject && (
          <div className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-6">
            <div className="relative max-w-2xl w-full bg-slate-800 rounded-2xl p-6 shadow-lg max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                onClick={() => setViewDetail(false)}
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 text-emerald-400 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                  >
                    <Github />
                  </a>
                )}
                {selectedProject.github1 && (
                  <a
                    href={selectedProject.github1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                  >
                    <Github />
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                  >
                    <ExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "View Less Projects" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
