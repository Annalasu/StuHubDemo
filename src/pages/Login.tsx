import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Facebook, Github } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to IELTS Buddy</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <Mail className="text-gray-400" />
            <input
              className="pl-2 outline-none border-none flex-1"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <Lock className="text-gray-400" />
            <input
              className="pl-2 outline-none border-none flex-1"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </form>
        <div className="mt-4 flex flex-col space-y-2">
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <Facebook className="mr-2" /> Continue with Facebook
          </button>
          <button className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transition duration-300 flex items-center justify-center">
            <Github className="mr-2" /> Continue with GitHub
          </button>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          <p className="mt-2">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;