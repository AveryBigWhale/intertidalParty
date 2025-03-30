"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto flex justify-between items-center px-6">
      <div className='flex items-center'>
        <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/emblem.png" // Replace with your emblem image path
            layout="fill"
            objectFit="cover"
            alt="黨徽"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-intertidalDarkMain">潮間黨</h1>
          <h1 className="text-lg font-bold text-intertidalDarkMain">Intertidal Party</h1>
        </div>
      </div>
      
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-intertidalDarkMain">
          {isOpen ? '✖️' : '☰'} {/* Hamburger icon */}
        </button>
      </div>
      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-intertidalLightMain w-full md:w-auto`}>
        <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 text-intertidalDarkMain">
          <li>
            <Link href="/" className="hover:text-gray-700">首頁</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700">關於潮間黨</Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-gray-700">最新消息</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;