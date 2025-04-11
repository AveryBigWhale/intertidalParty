"use client"

import React, { useRef } from 'react';
  // , useState } from 'react';
// import NewsSection from '../../components/NewsSection';
// import NavBar from '../../components/Navbar';
// import Image from 'next/image';
import ImageLoader from '@/components/ImageLoader'; 

export default function Home() {
  const scrollContainerRef = useRef(null);
  // const [navbarHeight, setNavbarHeight] = useState(0);
  
  // const handleNavbarHeight = (height: number) => {
  //   setNavbarHeight(height);
  // };
  
  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
    {/* style={{ scrollPaddingTop: `${navbarHeight}px` }}> */}
      {/* Full-screen Banner Section */}
      {/* <NavBar scrollContainerRef={scrollContainerRef} onHeightChange={handleNavbarHeight} /> */}
      <section
        className="relative h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${ImageLoader({ src: '/banner-about.png' })})`,
          // backgroundColor: "rgba(255, 0, 0, 0.5)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" // 自定義陰影效果
         }}
      >
        <div style={{ marginLeft: '15%', marginRight: 'auto', width: '75%', zIndex: 1 }}>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          潮間黨
          </h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Intertidal
          </h1>
          <div style={{ marginLeft: '0%', marginRight: 'auto', width: '75%', zIndex: 1 }} 
            className="text-white font-medium mb-4">
            <p className='leading-7'>潮間黨成立於 2125 年，Current Effect 為全球領先的人類延展與生態科技公司。
            <br />潮間黨，誕生於科技與信仰交會的世紀轉折之間，是一個立基於長壽文明與靈性政治的新型政體實驗。自 exhibit O 被揭示以來，人類社會面臨前所未有的延壽與重構挑戰——我們不僅需要新的法律與制度，更需要新的想像與價值觀。

            潮間黨主張「身心同步、共治未來」，倡導跨領域整合的治理模型，將醫學、生技、教育、宗教與社群實踐納入國政規劃核心。黨綱以「百年人生設計」為根基，提出五大核心路線：潮間教育、O-o 生醫再分配、靈性保健、氣候調控與民主透明進化。

            我們相信，政治不該只是權力競逐，而是文明更新的通道。在這個介於潮起與潮落之間的時代，潮間黨願作為橋梁，引領人民穿越技術轉型的未知，走向一個更有意義、可持續的人類未來。

            潮間黨——為了你活過的每一天，也為了你尚未想像的那一生。
                </p>
            
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" /> {/* 使用 Tailwind CSS 的類來設置黑色和透明度 */}

      </section>
      {/* <NewsSection className="snap-start"/> */}
      {/* <section className='h-screen h-full snap-start flex flex-col mt-0'>
        
      </section> */}
      {/* Next Section */}
      {/* <section style={{
         backgroundImage: `url(${ImageLoader({ src: '/happyLife.png' })})`
        }} 
        className="h-screen snap-start flex flex-col justify-center items-center bg-gray-100">
        <div style={{ marginLeft: '5%', marginRight: '20%', marginTop: '25%', width: '75%',  zIndex: 1 }}
          className='max-w-2xl mx-auto md:max-w-xl'>
          <h2 className="text-3xl font-bold mb-1">我們的使命</h2>
          <p className="text-xl font-bold ">突破生命疆界，創造無限幸福</p>
          <br />

          <p className='leading-7'>
            2029
            成立「潮間研究聯盟」籌備處，匯聚來自醫學、宗教、人工智慧等八大領域的創始成員
            啟動 exhibit O 初階樣本公眾釋出計畫

            2030
            潮間黨正式成立，發表《潮間宣言》與第一版《百年人生政綱》
            推動「潮間學前導課綱」於五所試驗校園落地

            2032
            潮間黨進入立法院，取得七席不分區議席
            推動《心靈文明促進條例》草案初審通過
            完成與 current effect、tidal-A 基金會簽署三方合作備忘錄

            2034
            設立「O-o 公平接取評議會」，試辦 O-o 生醫分級應用制度
            設立第一座高寒潮帶研究站於格陵蘭南岸

            2036
            潮間黨立院團重啟《潮間醫療法》修法程序，納入「宗教顧問介入療癒條款」
            《潮間紀事》出版，入選「百年十大出版物」
            完成全國第 12 所「潮間校園」落成啟用

            2037
            與北歐三國簽署《潮帶合作條約》，展開全球氣候調控樣本交換
            成立「潮間—U 和解倡議小組」，針對 U 人群體提供轉型正義援助架構


          </p> 
        </div>
       
        
      </section> */}
    </div>
  );
}