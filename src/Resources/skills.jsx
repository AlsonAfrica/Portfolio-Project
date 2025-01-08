import { Code, Globe, Palette, Database, Layout, Cpu } from 'lucide-react';

const getProficiencyColor = (level) => {
    const colors = {
      'Beginner': 'text-blue-600',
      'Intermediate': 'text-green-600',
      'Advanced': 'text-purple-600',
      'Expert': 'text-indigo-600'
    };
    return colors[level] || 'text-gray-600';
  };

const skills = [
    {
      name: 'HTML5',
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      proficiency: 'Intermediate',
      examples: 'Semantic markup, UserInterface, Form validation',
    },
    {
      name: 'CSS3',
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      proficiency: 'Intermediate',
      examples: 'Responsive design, Animations, Custom properties',
    },
    {
      name: 'JavaScript',
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      proficiency: 'Intermediate',
      examples: 'DOM manipulation, ES6+, Async programming, BackEnd (Node.JS)',
    },
    {
      name: 'React',
      icon: <Layout className="w-8 h-8 text-cyan-500" />,
      proficiency: 'Intermediate',
      examples: 'Hooks, Context API, Custom components',
    },
    {
      name: 'React Native',
      icon: <Database className="w-8 h-8 text-green-500" />,
      proficiency: 'Intermediate',
      examples: 'REST APIs, Express.js, Cors, Database integration',
    },
    {
      name: 'Node.js',
      icon: <Database className="w-8 h-8 text-green-500" />,
      proficiency: 'Intermediate',
      examples: 'REST APIs, Express.js, Cors, Database integration',
    },
    {
      name: 'Mongo',
      icon: <Cpu className="w-8 h-8 text-blue-700" />,
      proficiency: 'Beginner',
      examples: 'Data analysis, Web scraping, Automation',
    },
    {
      name: 'Firebase',
      icon: <Cpu className="w-8 h-8 text-blue-700" />,
      proficiency: 'Beginner',
      examples: 'Data analysis, Web scraping, Automation',
    },
    {
      name: 'Vercel',
      icon: <Cpu className="w-8 h-8 text-blue-700" />,
      proficiency: 'Beginner',
      examples: 'Data analysis, Web scraping, Automation',
    },
  ];

  export  {skills,getProficiencyColor}