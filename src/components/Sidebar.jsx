import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="#" className="block px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200">
          Dashboard
        </a>
        <a href="#" className="block px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200">
          Products
        </a>
        <a href="#" className="block px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200">
          Orders
        </a>
        <a href="#" className="block px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
