"use client";

// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/swiper-bundle.css";
import './home.css';
import './globals.css';
import newspaperIcon from "../public/newspaper_icon.svg"; // Adjust the path accordingly
import loudspeakerIcon from "../public/loudspeaker_icon.svg"; // Adjust the path accordingly
// import Navbar from "./navbar";
import ImageLoader from '../components/ImageLoader'; // Adjust the path as necessary

export default function HomePage() {
  const news = [
    { title: "潮間黨總統上任", image: "/elected.png" },
    { title: "潮間大遊行", image: "/protest.png" },
    { title: "山姆大叔需要你", image: "/uncleSam.png" },
    { title: "潮間黨總統上任", image: "/elected.png" },
    { title: "潮間大遊行", image: "/protest.png" },
    { title: "山姆大叔需要你", image: "/uncleSam.png" },
  ];

  const policies = [
    { title: "教育體制革命", image: "/lecture.png" },
    { title: "強化生化研發預算", image: "/budget.png" },
    { title: "全民長壽健康計劃", image: "/health.png" },
    { title: "教育體制革命", image: "/lecture.png" },
    { title: "強化生化研發預算", image: "/budget.png" },
    { title: "全民長壽健康計劃", image: "/health.png" },
  ];

  return (
    <div className="bg-blue-200 relative">
      
      {/* Hero Section */}
      <div className="relative w-full h-72">
        <ImageLoader
          src="/banner.png"
          // layout="fill"
          // objectFit="cover"
          // alt="潮汐革命 共創未來"
        />
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">潮汐革命 共創未來</h1>
        </div>
      </div>

      {/* 最新消息 */}
      <div className="text-intertidalDarkMain">
        <Section title="最新消息" data={news} />
      </div>
      
      {/* 政策宣傳 */}
      <div className="text-intertidalDarkMain">
        <Section title="政策宣傳" data={policies} />
      </div>
      
    </div>
  );
}

function Section({ title, data }: { title: string; data: { title: string; image: string }[] }) {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-intertidalDarkMain flex items-center mb-4">
        {/* <span className="mr-2">{title === "最新消息" ? "📰" : "📢"}</span> {title} */}
        {title === "最新消息" ? (
          <ImageLoader src={newspaperIcon} />
          // alt="Newspaper Icon" width={24} height={24} className="mr-2" />
        ) : (
          // <loudspeakerIcon />
          <ImageLoader src={loudspeakerIcon} />
          // alt="Loudspeaker Icon" width={24} height={24} className="mr-2" />
        )}
        {title}
      </h2>
      <Swiper 
        className="my-swiper" 
        spaceBetween={20} 
        slidesPerView={1} // Default to 1 slide
        navigation 
        // pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // 3 slides on medium screens
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md h-1/2 p-0 m-0">
              <ImageLoader
                src={item.image}
                // width={300}
                // height={200}
                // className="w-full h-48 object-cover rounded-t-2xl" 
                // alt={item.title}
              />
              <h3 className="text-md font-semibold text-center mt-2">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}