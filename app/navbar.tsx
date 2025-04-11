"use client"

import { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import ImageLoader from '../components/ImageLoader'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-intertidalLightMain">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className={`flex items-center ${isOpen ? 'hidden' : ''}`}>
          <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${ImageLoader({ src: '/emblem-1.svg' })})`,
              backgroundSize: 'cover',
              // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
              backgroundPosition: 'center',
            }}>
          </div>
          <div>
            <h1 className="text-xl font-bold text-intertidalDarkMain">潮間黨</h1>
            <h1 className="text-lg font-bold text-intertidalDarkMain">Intertidal Party</h1>
          </div>
        </div>
        
        
        {/* {isOpen && ( */}
        <nav className={`md:flex ${isOpen ? 'flex' : 'hidden'} md:static bg-intertidalLightMain w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 text-intertidalDarkMain p-4">
            <li>
              <Link href="/" className="block hover:text-gray-700">首頁</Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-gray-700 ">關於潮間黨</Link>
            </li>
            {/* <li>
              <Link href="/news" className="block hover:text-gray-700 ">最新消息</Link>
            </li>
            <li>
              <Link href="/policy" className="block hover:text-gray-700 ">政策宣傳</Link>
            </li> */}
            {/* <li>
              <Link href="/subscribe" className="
                block md:inline
                text-customRed
                border
                border-3
                border-customRed
                rounded-full
                px-4
                py-2
                hover:bg-customRed
                hover:text-white
                transition-colors">訂閱電子報</Link>
            </li> */}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-intertidalDarkMain text-4xl w-25 h-25 flex justify-center items-center">
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        {/* )} */}
      </div>
    </header>
  );
};

export default Navbar;