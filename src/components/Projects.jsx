import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Seat Reservation System",
    description:
      "The Seat Reservation System is a full-stack web application designed to manage seat bookings within an organization. Built using React.js on the frontend and Node.js/Express on the backend, the system enables employees or trainees to book, cancel, and manage seat reservations based on their assigned working floor. The frontend interface is rich with features such as a date picker, drag-and-drop seat allocation, QR code generation for check-ins, and export functionalities for reports in PDF and CSV formats. Authentication is handled via Google Sign-In using OAuth2, and task-critical emails like confirmations and cancellations are sent via Nodemailer. On the backend, MongoDB is used to persist booking data, and sessions are managed securely using express-session. Admin users have capabilities to view seat usage, manage holidays, and export attendance records. This project gave me in-depth experience with integrating complex frontend components and building secure, scalable backend APIs for enterprise use.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Axios",
      "Express",
      "MongoDB",
      "Nodemailer",
      "Google Auth",
      "REST APIs",
      "React Router",
      "Material UI",
      "Express Session",
      "JWT",
      "Passport",
      "Nodemailer",
    ],
    github: "https://github.com/Naflan-MNM/seat-reservation-system---frontend-",
    github1: "https://github.com/Naflan-MNM/seat-reservation-system---backend-",
    live: "https://www.linkedin.com/posts/naflan-mohammed_demo-video-seat-reservation-system-in-activity-7330520524428587008-kZjE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8GjgwB4RfDRAXUs_iHzK4murYbtVAtYr0",
    featured: true,
  },
  {
    title: "Gexmoo – E-commerce Web Application",
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
    github: "https://github.com/Naflan-MNM/GeXMoo",
    live: "d",
    featured: true,
  },
  {
    title: "To-Do List Web App",
    description:
      "This is a responsive and user-friendly To-Do List web application developed using React and Material UI. It allows users to efficiently manage their daily tasks through a clean and modern interface. Key features include the ability to add, edit, and delete tasks, mark tasks as complete or incomplete, filter tasks based on their completion status, and search for tasks using keywords. The application also uses the browser’s local storage to ensure data persistence across sessions. Through this project, I gained practical experience in React component design, state management, and UI integration with Material UI. Additionally, I strengthened my skills in implementing reusable components and managing client-side storage for improved scalability and user experience.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.JS", "JavaScript", "HTML", "Pure CSS"],
    github: "https://github.com/Naflan-MNM/To-Do-List",
    live: "https://www.linkedin.com/posts/naflan-mohammed_webdevelopment-fullstack-todolist-activity-7215244149212499968-GrOP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8GjgwB4RfDRAXUs_iHzK4murYbtVAtYr0",
    featured: false,
  },
  {
    title: " GPA Calculator Pro – University of Sri Jayewardenepura",
    description:
      "GPA Calculator Pro is a mobile application developed using Flutter and Android Studio, specifically designed for students of the University of Sri Jayewardenepura. This app simplifies the process of calculating Grade Point Averages (GPA) and Cumulative GPA (CGPA) based on the university's unique grading system and academic structure. With an intuitive user interface and seamless performance, students can easily input their subject grades, credit values, and calculate accurate results instantly. The app supports semester-wise calculations, real-time GPA updates, and error handling to ensure data accuracy. It also provides options to save, reset, and review results for academic planning. This project enhanced my skills in cross-platform mobile development, state management in Flutter, and designing user-centric educational tools. It was built with a focus on usability, precision, and alignment with university policies, making it a valuable utility for fellow undergraduates..",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Flutter", "AndroidStudio"],
    github: "https://github.com/Naflan-MNM/GPA-Calculator-Pro",
    live: "https://www.linkedin.com/posts/naflan-mohammed_excited-to-introducegpa-calculator-pro-activity-7169395582388686849-pPoE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8GjgwB4RfDRAXUs_iHzK4murYbtVAtYr0",
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
          <div className="fixed inset-y-0 left-0 right-80 bg-gray-900/90 z-50 flex items-center justify-center p-6">
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
