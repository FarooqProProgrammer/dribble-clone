
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Welcome to Dribbble</div>
          <Link to="/contact-us" className="text-sm text-gray-600">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;