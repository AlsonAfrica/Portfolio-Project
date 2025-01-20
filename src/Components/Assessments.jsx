import React from 'react';
import { Github, ExternalLink, Calendar, Award, FileText } from 'lucide-react';

const AssessmentTable = () => {
  const assessments = [
    { 
      title: "Hotel-App (React js)",
      gitLink: "https://github.com/AlsonAfrica/Hotel-React.git",
      dateCompleted: "2024-01-15",
      score: "50/100",
      notes: "Implemented responsive design with React and Tailwind CSS"
    },
    {
      title: "Restaurant App (React Native)",
      gitLink: "https://github.com/mLab-alscar-projects",
      dateCompleted: "2024-02-01",
      score: "90/100",
      notes: "Successfully integrated third-party APIs with error handling"
    },
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