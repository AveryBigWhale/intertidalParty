// import Link from 'next/link'; // Import Link from next/link
import './globals.css';
import './home.css';
// import Image from "next/image";
import Navbar from './navbar';
import emblem from '../public/emblem-1.svg'; // Adjust the path accordingly

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="zh-TW">
        <head>
          <title>潮間黨 Intertidal Party</title> {/* 這裡是網頁標題 */}
          {/* <link rel="icon" href="/favicon.ico" /> 這是 favicon 路徑 */}
          {/* 可選：支援多尺寸 icon */}
          <link rel="icon" type="image/svg+xml" href="/emblem-1.svg" />
          {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        </head>
        <body className="bg-gray-100 text-gray-900">
          {/* 頁首 */}
          <header className="bg-intertidalLightMain shadow-md py-4">
          <Navbar />  

           
          </header>
  
          {/* 主要內容 */}
          <main>{children}</main>
  
          {/* 頁尾 */}
          <footer className="bg-gray-800 text-intertidalLightMain py-6 text-center mt-10">
            <div className="container mx-auto">
              <h3 className="text-lg font-semibold">潮間黨 Intertidal Party</h3>
              {/* <p>地址 | 105 台北市松山區南京東路三段261號3樓</p> */}
              {/* <p>電話 | 02-27520806</p> */}
              {/* <p>信箱 | chairperson@dpp.org.tw</p> */}
            </div>
          </footer>
        </body>
      </html>
    );
}