import React from 'react';
import { BarChart2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Feedback: React.FC = () => {
  // 反馈的模拟数据
  const overallScore = 7.0;
  const fluencyScore = 7.5;
  const vocabularyScore = 6.5;
  const grammarScore = 7.0;
  const pronunciationScore = 7.0;

  const feedbackPoints = [
    { type: 'positive', text: '很好地使用连接词来连接想法。' },
    { type: 'negative', text: '描述地点时有些犹豫。' },
    { type: 'suggestion', text: '尝试使用更多与地点和旅行相关的高级词汇。' },
  ];

  const renderScoreBar = (score: number, label: string) => (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-500">{label}</div>
        <div className="text-sm font-medium text-gray-900">{score.toFixed(1)}</div>
      </div>
      <div className="mt-1">
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${(score / 9) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">口语练习反馈</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">总体得分</span>
                  <span className="text-3xl font-bold text-blue-600">{overallScore.toFixed(1)}</span>
                </div>
                <BarChart2 className="w-full h-12 text-blue-600" />
                {renderScoreBar(fluencyScore,'流利度')}
                {renderScoreBar(vocabularyScore, '词汇')}
                {renderScoreBar(grammarScore, '语法')}
                {renderScoreBar(pronunciationScore, '发音')}
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">详细反馈</h2>
                <ul className="space-y-4">
                  {feedbackPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      {point.type === 'positive' && (
                        <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" />
                      )}
                      {point.type === 'negative' && (
                        <XCircle className="flex-shrink-0 h-6 w-6 text-red-500 mr-2" />
                      )}
                      {point.type === 'suggestion' && (
                        <AlertCircle className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-2" />
                      )}
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">改进建议</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>练习使用更多与描述地点相关的高级词汇。</li>
                  <li>通过准备每个话题的常用短语来减少犹豫。</li>
                  <li>专注于改善特定音素的发音（例如，'th'音）。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;