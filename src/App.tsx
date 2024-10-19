import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SpeakingPractice from './pages/SpeakingPractice';
import Feedback from './pages/Feedback';
import LearningAdvice from './pages/LearningAdvice';
import History from './pages/History';
import Settings from './pages/Settings';
import Social from './pages/Social';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/practice" element={<SpeakingPractice />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/advice" element={<LearningAdvice />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;