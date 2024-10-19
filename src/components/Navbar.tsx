import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, BarChart2, Clock, Settings, Users, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/dashboard" className="text-xl font-bold text-blue-600">StuHubDemo</Link>
          <div className="flex space-x-4">
            <NavLink to="/dashboard" icon={<Home size={20} />} text="Home" />
            <NavLink to="/practice" icon={<Book size={20} />} text="Practice" />
            <NavLink to="/advice" icon={<BarChart2 size={20} />} text="Advice" />
            <NavLink to="/history" icon={<Clock size={20} />} text="History" />
            <NavLink to="/settings" icon={<Settings size={20} />} text="Settings" />
            <NavLink to="/social" icon={<Users size={20} />} text="Social" />
            <NavLink to="/" icon={<LogOut size={20} />} text="Logout" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-600 hover:text-blue-600">
    {icon}
    <span className="ml-1 hidden md:inline">{text}</span>
  </Link>
);

export default Navbar;