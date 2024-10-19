import React, { useEffect } from 'react';
import { Mic } from 'lucide-react';

declare global {
  interface Window {
    CozeWebSDK: any;
  }
}

const SpeakingPractice: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.6/libs/cn/index.js";
    script.async = true;
    script.onload = () => {
      new window.CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7427482547129172031',
        },
        componentProps: {
          title: 'IELTS Speaking Practice',
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Speaking Practice</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">AI-Powered Speaking Assistant</h2>
          <Mic className="text-blue-500" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Practice your IELTS speaking skills with our AI-powered assistant. 
          It will provide you with questions, listen to your responses, and give you feedback.
        </p>
        <div id="coze-chat-container" className="border rounded-lg h-96">
          {/* Coze chat widget will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default SpeakingPractice;