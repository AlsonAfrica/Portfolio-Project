import React from 'react';
import { Code, Globe, Palette, Database, Layout, Cpu } from 'lucide-react';
import { getProficiencyColor,skills } from '../Resources/skills';

const SkillsMatrix = () => {

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
        Skills Matrix
      </h2>
      
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 animate-slide-up"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="grid md:grid-cols-3 gap-4 items-center">
              {/* Skill Logo & Name */}
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gray-50 rounded-lg transform transition-transform group-hover:rotate-12 duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 transform transition-all duration-300 group-hover:translate-x-2">
                  {skill.name}
                </h3>
              </div>

              {/* Proficiency Level */}
              <div className="flex items-center">
                <span 
                  className={`font-medium text-lg ${getProficiencyColor(skill.proficiency)} 
                    transform transition-all duration-300 hover:scale-110 hover:font-bold`}
                >
                  {skill.proficiency}
                </span>
              </div>

              {/* Examples */}
              <div className="text-sm text-gray-600 transform transition-all duration-300 hover:text-gray-900">
                <p>{skill.examples}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SkillsMatrix;