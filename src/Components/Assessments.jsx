import React from 'react';
import { Github, ExternalLink, Calendar, Award, FileText } from 'lucide-react';

const AssessmentTable = () => {
  const assessments = [
    {
      title: "Frontend Development Challenge",
      gitLink: "https://github.com/username/frontend-challenge",
      dateCompleted: "2024-01-15",
      score: "95/100",
      notes: "Implemented responsive design with React and Tailwind CSS"
    },
    {
      title: "API Integration Project",
      gitLink: "https://github.com/username/api-project",
      dateCompleted: "2024-02-01",
      score: "90/100",
      notes: "Successfully integrated third-party APIs with error handling"
    },
    {
      title: "Database Design Assessment",
      gitLink: "https://github.com/username/db-assessment",
      dateCompleted: "2024-02-15",
      score: "88/100",
      notes: "Created optimized schema for e-commerce platform"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Assessments</h2>
      
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Assessment
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Git Link
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Date Completed
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Grade/Score
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assessments.map((assessment, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-900">{assessment.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a 
                    href={assessment.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {new Date(assessment.dateCompleted).toLocaleDateString()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">
                      {assessment.score}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{assessment.notes}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentTable;