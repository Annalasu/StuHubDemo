import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, BarChart2, Book, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">欢迎回来，用户！</h1>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 进度面板 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart2 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        最新得分
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          7.5
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <span className="sr-only">提高了</span>
                          0.5
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link to="/history" className="font-medium text-indigo-600 hover:text-indigo-500">
                    查看所有进度
                  </Link>
                </div>
              </div>
            </div>

            {/* 推荐练习 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mic className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        推荐练习
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        雅思口语第二部分：描述一个你喜欢去的地方
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link to="/practice" className="font-medium text-indigo-600 hover:text-indigo-500">
                    开始练习
                  </Link>
                </div>
              </div>
            </div>

            {/* 学习目标 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        学习目标
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <ul className="list-disc list-inside">
                          <li>提高流利度</li>
                          <li>扩大词汇量</li>
                          <li>练习发音</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link to="/advice" className="font-medium text-indigo-600 hover:text-indigo-500">
                    查看学习建议
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 最近活动 */}
          <div className="mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">最近活动</h2>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {[
                  { id: 1, title: '完成练习：雅思口语第一部分', date: '2小时前' },
                  { id: 2, title: '复习流利度反馈', date: '1天前' },
                  { id: 3, title: '开始新的学习目标：提高发音', date: '3天前' },
                ].map((activity) => (
                  <li key={activity.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">{activity.title}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;