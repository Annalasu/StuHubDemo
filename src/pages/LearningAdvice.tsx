import React from 'react';
import { BookOpen, Target, TrendingUp } from 'lucide-react';

const LearningAdvice: React.FC = () => {
  const adviceItems = [
    { icon: <BookOpen className="text-blue-500" size={24} />, title: 'Focus on Vocabulary', content: 'Expand your academic vocabulary by learning 10 new words daily.' },
    { icon: <Target className="text-green-500" size={24} />, title: 'Practice Time Management', content: 'Allocate specific time limits for each section of the IELTS test during your practice sessions.' },
    { icon: <TrendingUp className="text-purple-500" size={24} />, title: 'Improve Listening Skills', content: 'Listen to English podcasts or news broadcasts for at least 30 minutes every day.' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Learning Advice</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adviceItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {item.icon}
              <h2 className="text-xl font-semibold ml-2">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Personalized Study Plan</h2>
        <p className="text-gray-600 mb-4">
          Based on your recent performance, we recommend focusing on the following areas:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Improve coherence and cohesion in Writing Task 2</li>
          <li>Practice paraphrasing techniques for the Speaking section</li>
          <li>Enhance skimming and scanning skills for the Reading section</li>
        </ul>
      </div>
    </div>
  );
};

export default LearningAdvice;