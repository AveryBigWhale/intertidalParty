// import Link from 'next/link'; // Import Link from next/link
import './globals.css';
import './home.css';
// import Image from "next/image";
import Navbar from './navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="zh-TW">
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
              <p>地址 | 105 台北市松山區南京東路三段261號3樓</p>
              <p>電話 | 02-27520806</p>
              <p>信箱 | chairperson@dpp.org.tw</p>
            </div>
          </footer>
        </body>
      </html>
    );
}