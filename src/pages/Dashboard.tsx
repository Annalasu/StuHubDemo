import React from 'react';
import { BarChart, LineChart, Target, Book } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, User!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Progress</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Latest Score</p>
              <p className="text-2xl font-bold">7.5</p>
            </div>
            <LineChart className="text-blue-500" size={48} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Learning Goals</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Completed</p>
              <p className="text-2xl font-bold">3/5</p>
            </div>
            <Target className="text-green-500" size={48} />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recommended Practice</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Book className="mr-2 text-blue-500" />
            <span>High-frequency IELTS Speaking Topics</span>
          </li>
          <li className="flex items-center">
            <Book className="mr-2 text-blue-500" />
            <span>Advanced Vocabulary for Writing Task 2</span>
          </li>
          <li className="flex items-center">
            <Book className="mr-2 text-blue-500" />
            <span>Listening Practice: Academic Lectures</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Skill Breakdown</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Speaking', 'Writing', 'Reading', 'Listening'].map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
              <BarChart className="mx-auto text-blue-500" />
              <p className="text-lg font-bold">7.0</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;