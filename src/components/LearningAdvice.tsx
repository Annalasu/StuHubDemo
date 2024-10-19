import React from 'react';
import { Book, Video, Mic, Target } from 'lucide-react';

const LearningAdvice: React.FC = () => {
  const learningGoals = [
    { id: 1, title: '提高流利度', progress: 60 },
    { id: 2, title: '扩大词汇量', progress: 40 },
    { id: 3, title: '提高语法准确性', progress: 75 },
    { id: 4, title: '改善发音', progress: 50 },
  ];

  const recommendedResources = [
    { id: 1, title: '雅思口语高级词汇', type: 'book', link: '#' },
    { id: 2, title: '掌握雅思口语 - 视频课程', type: 'video', link: '#' },
    { id: 3, title: '与母语者进行雅思口语练习', type: 'practice', link: '#' },
    { id: 4, title: '雅思口语语法 - 快速指南', type: 'book', link: '#' },
  ];

  const renderProgressBar = (progress: number) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">学习建议</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">您的学习目标</h2>
                <ul className="space-y-4">
                  {learningGoals.map((goal) => (
                    <li key={goal.id} className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{goal.title}</span>
                        <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
                      </div>
                      {renderProgressBar(goal.progress)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">推荐资源</h2>
                <ul className="space-y-4">
                  {recommendedResources.map((resource) => (
                    <li key={resource.id} className="flex items-center">
                      {resource.type === 'book' && <Book className="h-6 w-6 text-blue-500 mr-2" />}
                      {resource.type === 'video' && <Video className="h-6 w-6 text-green-500 mr-2" />}
                      {resource.type === 'practice' && <Mic className="h-6 w-6 text-red-500 mr-2" />}
                      <a href={resource.link} className="text-blue-600 hover:underline">{resource.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">个性化建议</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>专注于使用更高级的连接词来提高流利度。</li>
                  <li>练习描述图表和图形以扩大任务1的词汇量。</li>
                  <li>练习语调以使你的表达更自然和吸引人。</li>
                  <li>在口语练习中定期复习和使用习语和短语动词。</li>
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">下一步</h2>
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                  <p className="font-bold">建议行动</p>
                  <p>完成"雅思口语高级词汇"资源以提高您的词汇得分。</p>
                </div>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Target className="mr-2 h-5 w-5" />
                    设置新目标
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAdvice;