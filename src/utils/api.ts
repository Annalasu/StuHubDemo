import { API_ENDPOINTS } from './constants';

const getHeaders = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.token}`,
  };
};

export const api = {
  get: async (url: string) => {
    const response = await fetch(url, { headers: getHeaders() });
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    return response.json();
  },

  post: async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    return response.json();
  },

  // 添加其他方法如 put, delete 等
};
