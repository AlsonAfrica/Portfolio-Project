import React, { useState } from 'react';
import { Github, ExternalLink, Code, Boxes, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import projects from '../Resources/projects';
import GroupProjects from '../Resources/groupprojects';

const ProjectGrid = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index, section) => {
    setExpandedCards(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const ProjectCard = ({ project, index, section }) => {
    const isExpanded = expandedCards[`${section}-${index}`];
    
    return (
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

          {/* Tech Stack - Always Visible */}
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

          {/* Read More Button */}
          <button
            onClick={() => toggleCard(index, section)}
            className="w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="space-y-4">
              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <Boxes className="w-4 h-4 mr-2" />
                  {section === 'group' ? 'Team Members' : 'Key Features'}
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {(section === 'group' ? project.TeamMembers : project.keyFeatures).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Additional Features for Group Projects */}
              {section === 'group' && (
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
              )}

              {/* Challenges/Collaboration Experience */}
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {section === 'group' ? 'Collaboration Experience' : 'Challenges'}
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {(section === 'group' ? project.CollaborationExperience : project.challenges).map((item, i) => (
                    <li key={i}>{item}</li>
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
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Individual Projects */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Individual Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            section="individual" 
          />
        ))}
      </div>

      {/* Group Projects */}
      <div className="text-center mb-12 mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Collaborations Projects
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GroupProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            section="group" 
          />
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