import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b shadow-sm">
      <div className="flex items-center">
        <h2 className="text-gray-800 text-lg">Dashboard Overview</h2>
      </div>
      <div className="flex items-center">
        {/* User Profile or other icons can go here */}
        <span className="text-gray-700">Welcome, User</span>
      </div>
    </header>
  );
};

export default Header;
