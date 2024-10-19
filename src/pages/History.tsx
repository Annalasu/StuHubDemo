import React from 'react';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

const History: React.FC = () => {
  const practiceHistory = [
    { date: '2023-03-15', duration: '45 min', score: 7.5, type: 'Speaking' },
    { date: '2023-03-14', duration: '60 min', score: 7.0, type: 'Writing' },
    { date: '2023-03-12', duration: '30 min', score: 8.0, type: 'Reading' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Practice History</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Practice Sessions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {practiceHistory.map((session, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    <Calendar className="mr-2 text-blue-500" size={16} />
                    {session.date}
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <Clock className="mr-2 text-green-500" size={16} />
                    {session.duration}
                  </td>
                  <td className="px-4 py-2 flex items-center">
                    <BarChart2 className="mr-2 text-purple-500" size={16} />
                    {session.score}
                  </td>
                  <td className="px-4 py-2">{session.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
        <p className="text-gray-600 mb-4">
          Your average score has improved by 0.5 points over the last month. 
          Keep up the good work!
        </p>
        {/* Add a placeholder for a progress chart */}
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Progress Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default History;