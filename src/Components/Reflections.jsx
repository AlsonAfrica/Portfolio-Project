import React from 'react';
import { Quote, Clock, Calendar, TimerReset } from 'lucide-react';

const FeedbackReflections = () => {
  // Previous feedbacks array remains the same
  const feedbacks = [
    {
      quote: "Nhlakanipho demonstrates exceptional problem-solving abilities and a keen eye for design. His work on the e-commerce project showed great attention to detail and innovative solutions to complex challenges. He consistently delivers high-quality code and maintains excellent documentation practices.",
      facilitator: "Mahlatse Serathi",
      role: "Facilitator",
      date: "January 2024"
    },
   
  ];

  const goals = {
    shortTerm: [
      "Master React.JS and Redux Toolkit",
      "Understand how the server side communicates with client side",
      "Become familiar with CSS libaries and TypeScript"
    ],
    mediumTerm: [
      "Transition to a job ready junior developer",
    ],
    longTerm: [
      "Become a Competent Full Stack developer",
      "Contribute to open source projects",
      "Establish a tech community"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Previous sections remain the same */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Feedback & Reflections
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Collected feedback from project facilitators and mentors, highlighting growth, achievements, and areas of excellence.
        </p>
      </div>

      {/* Feedback Cards */}
      <div className="space-y-8 mb-12">
        {feedbacks.map((feedback, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <Quote className="w-12 h-12 text-indigo-600 opacity-20" />
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              "{feedback.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-600">
                  {feedback.facilitator.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{feedback.facilitator}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{feedback.role}</span>
                  <span>•</span>
                  <span>{feedback.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reflection Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Personal Reflections
        </h3>
        <p className="text-gray-600 mb-4">
          Throughout my journey, I've focused on continuously improving my technical skills and problem-solving abilities. The feedback received has helped me identify areas for growth and celebrate achievements.
        </p>
        <p className="text-gray-600">
          Key learning points include:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
          <li>Strengthened technical skills (writting clean code that is maintainable)</li>
          <li>Enhanced project architecture planning</li>
          <li>Improved cross-team collaboration skills</li>
          <li>Developed stronger debugging methodologies</li>
          <li>Work on my Confidence and Critical thinking</li>
        </ul>
      </div>

      {/* Personal Goals Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Personal Goals
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Short Term Goals */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
              <h4 className="text-lg font-semibold text-gray-800">Short Term</h4>
            </div>
            <ul className="space-y-3">
              {goals.shortTerm.map((goal, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Medium Term Goals */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-purple-500" />
              <h4 className="text-lg font-semibold text-gray-800">Medium Term</h4>
            </div>
            <ul className="space-y-3">
              {goals.mediumTerm.map((goal, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-purple-500 mt-1">•</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Long Term Goals */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <TimerReset className="w-6 h-6 text-green-500" />
              <h4 className="text-lg font-semibold text-gray-800">Long Term</h4>
            </div>
            <ul className="space-y-3">
              {goals.longTerm.map((goal, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReflections;