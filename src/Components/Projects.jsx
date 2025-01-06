import React from 'react';
import { Github, ExternalLink, Code, Boxes, AlertCircle } from 'lucide-react';

const ProjectGrid = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "/api/placeholder/400/300",
      description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      keyFeatures: [
        "User authentication",
        "Product filtering",
        "Payment integration",
        "Order tracking"
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project"
    },
    {
      title: "Task Management App",
      image: "/api/placeholder/400/300",
      description: "A collaborative task management application with real-time updates and team workspace features.",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
      keyFeatures: [
        "Real-time collaboration",
        "Task categorization",
        "File attachments",
        "Progress tracking"
      ],
      challenges: [
        "Managing real-time data synchronization",
        "Implementing drag-and-drop functionality"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project"
    },
    {
      title: "Weather Dashboard",
      image: "/api/placeholder/400/300",
      description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
      techStack: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      keyFeatures: [
        "5-day forecast",
        "Interactive weather maps",
        "Location search",
        "Weather alerts"
      ],
      challenges: [
        "Handling API rate limits",
        "Optimizing weather data visualization"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project"
    }
  ];


  // Group Projects
  const GroupProjects = [
 
    {
      title: "Restaurant App",
      image: "/api/placeholder/400/300",
      description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      keyFeatures: [
        "User authentication",
        "Product filtering",
        "Payment integration",
        "Order tracking"
      ],
      TeamMembers:[
        "Nhlakanipho Radebe", "Oscar Poco"
      ],
      CollaborationExperience: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project"
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Individual Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Description */}
              <p className="text-gray-600">{project.description}</p>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Code className="w-4 h-4 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Boxes className="w-4 h-4 mr-2" />
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Challenges
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Group Projects */}
      <div className="text-center mb-12 mt-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Group Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GroupProjects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Description */}
              <p className="text-gray-600">{project.description}</p>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Code className="w-4 h-4 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Boxes className="w-4 h-4 mr-2" />
                  Team Memembers
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.TeamMembers.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

             {/* Key Features */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Boxes className="w-4 h-4 mr-2" />
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Collaboration Experience
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.CollaborationExperience.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;