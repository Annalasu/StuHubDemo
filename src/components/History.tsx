import React from 'react';
import { BarChart2, TrendingUp, Calendar } from 'lucide-react';

const History: React.FC = () => {
  const practiceHistory = [
    { id: 1, date: '2023-04-15', topic: '描述一个你喜欢去的地方', score: 7.0 },
    { id: 2, date: '2023-04-10', topic: '谈论一个你喜欢的爱好', score: 6.5 },
    { id: 3, date: '2023-04-05', topic: '描述一个你钦佩的人', score: 7.5 },
    { id: 4, date: '2023-03-30', topic: '讨论你最喜欢的书', score: 6.0 },
    { id: 5, date: '2023-03-25', topic: '谈论一次最近的旅行', score: 7.0 },
  ];

  const renderScoreChart = () => {
    const scores = practiceHistory.map(session => session.score).reverse();
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    return (
      <div className="flex items-end space-x-2 h-40">
        {scores.map((score, index) => (
          <div
            key={index}
            className="bg-blue-500 w-8"
            style={{
              height: `${((score - minScore) / (maxScore - minScore)) * 100}%`,
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">练习历史</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">得分趋势</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {renderScoreChart()}
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>5次练习前</span>
                    <span>最新</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-500 font-semibold">进步中</span>
                  </div>
                  <div>
                    <span className="font-semibold">平均得分: </span>
                    <span>{(practiceHistory.reduce((sum, session) => sum + session.score, 0) / practiceHistory.length).toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">最近的练习记录</h2>
                <ul className="space-y-4">
                  {practiceHistory.map((session) => (
                    <li key={session.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{session.topic}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {session.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="font-semibold">{session.score.toFixed(1)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  查看完整历史
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;