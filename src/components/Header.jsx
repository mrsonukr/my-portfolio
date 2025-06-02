import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full h-[70px] px-8 flex items-center justify-between bg-white/50 backdrop-blur-lg z-[999]">
      <h1>mrsonukr.</h1>
      <nav>
        <div className="desktop hidden md:flex gap-5">
          <a href="#" className="text-link hover:text-black transition-colors">Email</a>
          <a href="#" className="text-link hover:text-black transition-colors">About</a>
          <a href="#" className="text-link hover:text-black transition-colors">Contact</a>
        </div>
        <div className="mobile md:hidden">
          <label className="hamburger">
            <input 
              type="checkbox" 
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
            <svg viewBox="0 0 32 32">
              <path 
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>
      </nav>
      <div className={`m-nav ${!isMenuOpen ? 'dn' : ''}`}>
        <ul className="m-nav__list">
          <li className="m-nav__item"><a href="#">Email</a></li>
          <li className="m-nav__item"><a href="#">About</a></li>
          <li className="m-nav__item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;