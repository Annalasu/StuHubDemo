import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Volume2 } from 'lucide-react';

const Settings: React.FC = () => {
  const [name, setName] = useState('张三');
  const [email, setEmail] = useState('zhangsan@example.com');
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('private');
  const [language, setLanguage] = useState('zh');
  const [voiceFeedback, setVoiceFeedback] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里通常会将更新后的设置发送到后端
    console.log('设置已更新:', { name, email, notifications, privacy, language, voiceFeedback });
    alert('设置更新成功！');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">设置</h1>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-4">
                  <User className="h-6 w-6 text-gray-400" />
                  <div className="flex-grow">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="h-6 w-6 text-gray-400" />
                  <div className="flex-grow">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Bell className="h-6 w-6 text-gray-400" />
                    <span>通知</span>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" checked={notifications} onChange={() => setNotifications(!notifications)} />
                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${notifications ? 'transform translate-x-full bg-indigo-500' : ''}`}></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Lock className="h-6 w-6 text-gray-400" />
                  <div className="flex-grow">
                    <label htmlFor="privacy" className="block text-sm font-medium text-gray-700">隐私</label>
                    <select
                      id="privacy"
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="private">私密</option>
                      <option value="public">公开</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6 text-gray-400" />
                  <div className="flex-grow">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">语言</label>
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="zh">中文</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Volume2 className="h-6 w-6 text-gray-400" />
                    <span>语音反馈</span>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" checked={voiceFeedback} onChange={() => setVoiceFeedback(!voiceFeedback)} />
                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${voiceFeedback ? 'transform translate-x-full bg-indigo-500' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  保存设置
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;