"use client";
import Link from 'next/link';
import newsData from './policyData.json';
import React from 'react';
import Image from 'next/image';
import ImageLoader from '@/components/ImageLoader'; // Adjust the path as necessary

import news1 from '../../public/elected.png';
import news2 from '../../public/school.png';
import news3 from '../../public/health.png';

const newsImages = [news1, news2, news3];
const NewsList = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-8">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">政策宣傳</h1>

      <div className="space-y-12">
        {newsData.map((news) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <div className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-xl overflow-hidden p-6 flex flex-col md:flex-row gap-6 bg-gray-50">
              
              {/* 圖片區塊 */}
              {news.imageUrl && (
                <div className="md:w-1/3 w-full">
                  <Image
                    width={500}
                    height={500}
                    src={newsImages[news.id -1]}
                    // src={news.imageUrl}
                    alt={news.title}

                    className="w-full h-48 object-cover rounded-lg"
                    loader={ImageLoader}
                  />
                </div>
              )}

              {/* 文字內容區塊 */}
              <div className="md:w-2/3 w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>

                {/* 顯示 description 的前幾行 */}
                {typeof news.description === 'string' ? (
                  <p className="text-gray-700 leading-relaxed line-clamp-3">
                    
                    {(news.description as string).split('\n')[0]}...
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed line-clamp-3">
                    {news.description[0]?.split('\n')[0]}...
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;


// "use client"
// import Link from 'next/link';
// import newsData from './newsData.json'; // 引入新聞數據
// // import Layout from '../layout'; // 引入佈局組件
// import React, { useRef, useState } from 'react';
// import Navbar from '../../components/Navbar'; // 引入 Navbar

// const NewsList = () => {
//   const scrollContainerRef = useRef(null);
//   const [navbarHeight, setNavbarHeight] = useState(0);
  
//   const handleNavbarHeight = (height: number) => {
//     setNavbarHeight(height);
//   };
//   return (
//     <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory"
//     style={{ scrollPaddingTop: `${navbarHeight}px` }}>
//       {/* Full-screen Banner Section */}
//       {/* <NavBar scrollContainerRef={scrollContainerRef} onHeightChange={handleNavbarHeight} /> */}
//       {/* <Navbar
//         scrollContainerRef={scrollContainerRef}
//         onHeightChange={handleNavbarHeight}
//         fixedColor="#001f3f" // 設置固定的深藍色
//       /> */}
//       <section
//         className="h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center"
//         style={{ 
//           backgroundColor: "#fff" }}
//       >
//         <div style={{ marginLeft: '65%', marginRight: 'auto', width: '75%' }}>
//           <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
//           嶄新人生
//           </h1>
//           <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
//           創造新時代
//           </h1>
//         </div>
       
        
//       </section>
//       {/* <section className='h-screen h-full snap-start flex flex-col mt-0'>
        
//       </section> */}
//       {/* Next Section */}
//       {/* <section className="h-screen snap-start flex flex-col justify-center items-center bg-gray-100">
//         <h2 className="text-3xl font-bold mb-4">Next Section</h2>
//         <p className="text-lg">Here is some additional content.</p>
//       </section> */}
//     </div>
//     // <div>
//     //   <h1>新聞列表</h1>
//     //   <div>
//     //     {newsData.map((news) => (
//     //       <Link key={news.id} href={`/news/${news.id}`}>
//     //         <div>
//     //           <img src={news.imageUrl} alt={news.title} />
//     //           <h2>{news.title}</h2>
//     //           <p>{news.date}</p>
//     //           <p>{news.description}</p>
//     //         </div>
//     //       </Link>
//     //     ))}
//     //   </div>
//     // </div>

    
//   );
// };

// export default NewsList;