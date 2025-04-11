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
      {/* 六大主軸 Section */}
    {/* 深化。共感民主 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-purple-500">深化。共感民主</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>讓每個意識，都被誠實看見。</p>
            <p>民主不是一種制度，而是一種集體意志的進化。潮間黨相信，真正的民主，來自深層的聆聽與彼此共感的能力。</p>
            <p>我們推動「情感回饋式政決系統」，讓公民參與不只是投票，更是持續的心智連結。從地方到國政，建構透明而有溫度的治理模型，讓民主不只是機制，更是文明的情感表達。</p>
            </div>
        </div>
    </section>

    {/* 照護。生命共享 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-pink-500">照護。生命共享</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>每段人生，都值得被完整承接。</p>
            <p>潮間黨以「全齡潮間醫療」為核心，推動從出生到終老的流動式照護系統，特別關注因技術變異而形成的新族群（如 U人）的醫療正義與社會融合。</p>
            <p>O-o 再分配政策，將生醫資源重新定義為公共資本，以社會參與換取更公平的療癒權利。我們不相信放任與排除，我們主張關照與再生。</p>
            </div>
        </div>
    </section>

    {/* 守護。文明主權 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-emerald-600">守護。文明主權</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>科技不僅為國用，更為人類而生。</p>
            <p>潮間黨不僅守護台灣的土地，更捍衛這片土地上科技文明的價值選擇權。我們的主權，來自我們選擇如何定義進步的方式。</p>
            <p>在全球激變中，潮間黨倡議「靈性科技外交」，以台灣為全球心智倫理中心，結合創新與慈悲，建立文明型安全系統，對抗單一意識形態的擴張。</p>
            </div>
        </div>
    </section>

    {/* 定位。潮帶外交 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-cyan-600">定位。潮帶外交</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>從邊緣地帶，向世界中心發聲。</p>
            <p>潮間黨以「潮帶策略」重塑台灣地緣角色，從極地研究、太空軌道、深海生態等前沿合作中，建立新型國際聯盟。</p>
            <p>我們主張「以科技為橋、以信念為舟」，與亞太、北歐及泛極圈國家建立深度潮帶網絡，推動生命安全、環境復元與跨文化交流的全球方案。</p>
            </div>
        </div>
    </section>

    {/* 創新。綠智融合 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-teal-600">創新。綠智融合</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>開發不是消耗，是創造更多再生的未來。</p>
            <p>潮間黨推動「生態—意識經濟模式」，整合綠能、心智科技與文化技術，打造具有再生循環能力的區域經濟實驗區。</p>
            <p>我們反對線性成長，倡導「複層發展」，讓城市與鄉村共同成為未來文明的孵化場，取代高污染產業，以低耗能高韌性的智慧系統為核心，保障世代共生。</p>
            </div>
        </div>
    </section>

    {/* 重構。幸福定義 */}
    <section className="h-full snap-start bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-4xl md:text-5xl font-bold leading-snug text-yellow-600">重構。幸福定義</div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>活得更久，也活得更深。</p>
            <p>GDP 無法衡量靈魂的重量。潮間黨提出「全域感知型幸福指標」，將生活節奏、心理韌性、情感密度與文化參與納入政策評估基礎。</p>
            <p>我們推動社會經濟新模式，以教育、醫療、環境、科技與宗教系統並進的方式，重塑生活品質的定義。幸福不只是現實的改善，更是意識的進化。</p>
            </div>
        </div>
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