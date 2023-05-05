import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 py-3">
      <div className="container mx-auto flex justify-between items-center mb-4 ml-4">
        <Link to="/" className="text-gray-100 font-bold text-3xl">
          Roomees
        <img src="Logo.png"  className="h-24 inline-block " />
        </Link>
        <div className="flex">
        </div>
        <div>
            <Link to="/profile" className="text-gray-100 hover:text-gray-300 mx-4">
                <img src="user.svg" className="h-8 inline-block"/>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;