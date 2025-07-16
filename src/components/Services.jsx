import React from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "💻",
    description:
      "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern web standards.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: "📱",
    description:
      "Creating cross-platform mobile apps with React Native and Expo, ensuring high performance and user-friendly design.",
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: "🧩",
    description:
      "Developing full-stack web applications using the MERN stack, from REST APIs to seamless frontend integration.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: "🎨",
    description:
      "Designing user-centric interfaces using Figma, focusing on clean, modern visuals and intuitive experiences.",
  },
  {
    id: 5,
    title: "API Integration",
    icon: "🔗",
    description:
      "Integrating third-party APIs and backend services to enrich applications with dynamic and real-time features.",
  },
  {
    id: 6,
    title: "Performance Optimization",
    icon: "⚡",
    description:
      "Improving load speed, responsiveness, and SEO by optimizing frontend code, images, and lazy loading.",
  },
];

const Services = () => {
  return (
    <section className="py-10 px-1" id="services">
      <div className="text-center mb-12 ">
        <h2 className="text-4xl md:text-5xl font-bold  bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
          I offer a range of development services tailored to bring your digital
          ideas to life — from responsive web and mobile apps to full-stack
          solutions designed for performance and user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
