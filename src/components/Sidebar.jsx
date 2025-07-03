import React from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const navigationItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Calendar },
  { id: "contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Naflan-MNM", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/naflan-mohammed/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/naflan_mnm",
    label: "Instagram",
  },
];

function Sidebar({ activeSection, onNavigate, isMobileOpen }) {
  return (
    <aside
      className={`
      fixed top-0 right-0 h-full w-80 bg-slate-800/95 backdrop-blur-lg border-l border-slate-700/50 z-50
      transform transition-transform duration-300 ease-in-out
      ${isMobileOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
    `}
    >
      <div className="flex flex-col  p-8">
        {/* Profile Section */}
        <div className="text-center mb-4">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
            NM
          </div>
          <h2 className="text-xl font-semibold text-white">Naflan Mohammed</h2>
          <p className="text-slate-400 text-sm mt-1">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                          : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 mt-6">
          © 2025 Naflan Mohammed
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
