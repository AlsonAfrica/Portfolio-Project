import React from "react";
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  GitBranch,
  Cloud,
  FileCode,
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  // SiMicrosoft,
  SiExpress,
  SiDotnet,
  // SiMicrosoftsqlserver,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiExpo,
  SiFlutter,
  SiFigma,
} from "react-icons/si";

const SkillsGrid = () => {
  const skillCategories = {
    Frontend: [
      { name: "React JS", icon: <SiReact color="#1399e7ff" title="React" /> },
      { name: "HTML & CSS", icon: <SiHtml5 color="#F16529" title="HTML & CSS" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" title="JavaScript" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#0dcbecff" title="Tailwind" /> },
      { name: "Redux State Management", icon: <SiRedux color="#ee1313ff" title="Redux" /> },
      { name: "TypeScript", icon: <SiTypescript color="#0f6be4ff" title="TypeScript" /> },
      // { name: "C# Razor", icon: <SiMicrosoft color="#1737ecff" title="C#" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs color="#68A063" title="Node.js" /> },
      { name: "Express.js", icon: <SiExpress color="#000000" title="Express.js" /> },
      { name: "RESTful APIs", icon: <SiPostman color="#FF6C37" title="RESTful APIs" /> },
      { name: "C#", icon: <SiDotnet color="#512BD4" title="C#" /> },
      {
        name: "SQL Server Management Studio",
        // icon: <SiMicrosoftsqlserver color="#CC2927" title="SQL Server" />,
      },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" title="MongoDB" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" title="PostgreSQL" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" title="MySQL" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" title="Firebase" /> },
    ],
    Mobile: [
      { name: "React Native", icon: <SiReact color="#61DAFB" title="React Native" /> },
      { name: "Expo", icon: <SiExpo color="#000020" title="Expo" /> },
      { name: "Cross-Platform Development", icon: <SiFlutter color="#02569B" title="Flutter" /> },
    ],
    "Other Tools": [
      { name: "Git", icon: <GitBranch className="w-8 h-8 text-orange-600" /> },
      { name: "Microsoft Azure", icon: <Cloud className="w-8 h-8 text-orange-500" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" title="Postman" /> },
      { name: "Figma", icon: <SiFigma color="#a259ff" title="Figma" /> },
      { name: "Slack", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
      { name: "VS Code & Visual Studio", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
      { name: "cPanel", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
      { name: "Zoho", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
      { name: "Webmail", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
      { name: "QContact", icon: <FileCode className="w-8 h-8 text-blue-600" /> },
    ],
  };

  const getProficiencyColor = (proficiency) => {
    const colors = {
      Expert: "text-purple-600",
      Advanced: "text-blue-600",
      Intermediate: "text-green-600",
      Beginner: "text-yellow-600",
    };
    return colors[proficiency] || "text-gray-600";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: <Layout className="w-6 h-6" />,
      Backend: <Server className="w-6 h-6" />,
      Database: <Database className="w-6 h-6" />,
      Mobile: <Smartphone className="w-6 h-6" />,
      "Other Tools": <Wrench className="w-6 h-6" />,
    };
    return icons[category];
  };

  const getCategoryColor = (category) => {
    const colors = {
      Frontend: "from-blue-500 to-cyan-500",
      Backend: "from-green-500 to-emerald-500",
      Database: "from-purple-500 to-pink-500",
      Mobile: "from-orange-500 to-red-500",
      "Other Tools": "from-gray-600 to-gray-800",
    };
    return colors[category];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Skills Portfolio
        </h1>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 bg-gradient-to-r ${getCategoryColor(
                  category
                )} rounded-lg text-white`}
              >
                {getCategoryIcon(category)}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-gray-300 to-transparent rounded"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group cursor-pointer transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="mb-3 transform transition-transform group-hover:scale-125 duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {skill.name}
                  </h3>
                  {/* <span
                    className={`text-sm font-medium ${
                      getProficiencyColor(skill.proficiency)
                    } px-3 py-1 rounded-full bg-opacity-10 ${
                      getProficiencyColor(skill.proficiency || "Beginner").replace(
                        "text-",
                        "bg-"
                      )
                    }`}
                  >
                    {skill.proficiency || "Beginner"}
                  </span> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
