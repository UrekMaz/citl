import React from 'react';
import ProfileInfo from './ProfileInfo';

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between py-3 px-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-grow justify-around items-center text-lg font-medium text-center text-indigo-900 max-md:max-w-full">
        <div className="text-xl font-extrabold text-orange-700">Pitchers</div>
        <a href="#profile" className="my-auto">Profile</a>
        <a href="#find-investor" className="my-auto">Find Investor</a>
        <a href="#connect" className="my-auto">Connect</a>
      </nav>
      <ProfileInfo />
    </header>
  );
}

export default Header;
