"use client";

import Link from 'next/link';
import Image from "next/image"; // Add StaticImageData import
// { StaticImageData }
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import newsData from '@/app/news/newsData.json';
import policyData from '@/app/policy/policyData.json';
import "swiper/swiper-bundle.css";
import './home.css';
import './globals.css';
import newspaperIcon from "../public/newspaper_icon.svg"; // Adjust the path accordingly
import loudspeakerIcon from "../public/loudspeaker_icon.svg"; // Adjust the path accordingly
import elected from "../public/elected.png"; // Adjust the path accordingly
// import protest from "../public/protest.png"; // 新增導入
import interu from "../public/interU.png"; // 新增導入
import school from "../public/school.png"; // 新增導入
import budget from "../public/budget.png"; // 新增導入
import health from "../public/health.png"; // 新增導入
import banner from "../public/banner.png"; // 新增導入
import education from "../public/education.png"; // 新增導入
import court from "../public/court.png"; // 新增導入
// import Navbar from "./navbar";
// import ImageLoader from '../components/ImageLoader'; // Adjust the path as necessary

const newsImages = [elected, school, interu];
const policyImages = [education, budget, health, court];

export default function HomePage() {
  // const news = [
  //   { title: "潮間黨總統上任", image: elected  },
  //   { title: "潮間大遊行", image: school }, // 更新為導入的變量
  //   { title: "山姆大叔需要你", image: uncleSam }, // 更新為導入的變量
  //   { title: "潮間黨總統上任", image: elected },
  //   { title: "潮間大遊行", image: protest }, // 更新為導入的變量
  //   // { title: "山姆大叔需要你", image: uncleSam }, // 更新為導入的變量
  // ];

  // const policies = [
  //   { title: "教育體制革命", image: education }, // 更新為導入的變量
  //   { title: "強化生化研發預算", image: budget }, // 更新為導入的變量
  //   { title: "全民長壽健康計劃", image: health }, // 更新為導入的變量
  //   { title: "教育體制革命", image: protest }, // 更新為導入的變量
  //   { title: "強化生化研發預算", image: budget }, // 更新為導入的變量
  //   // { title: "全民長壽健康計劃", image: health }, // 更新為導入的變量
  // ];

  return (
    <div className="bg-white relative">
      
      {/* Hero Section */}
      <div className="relative w-full h-72"
        // style={{
        //   // position: 'absolute',
        //   // width: '100%',
        //   // height: '100%',
        //   // backgroundImage: "url('https://averybigwhale.github.io/entry/public/puzzle-bg.png')",
        //   // backgroundImage: "url('/puzzle-bg.png')",
        //   backgroundImage: `url(${ImageLoader({ src: '/banner.png' })})`,
        //   backgroundSize: 'cover',
        //   // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
        //   backgroundPosition: 'center',
        // }}
        >
        <Image
          // src="../public/banner.png"
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="潮汐革命 共創未來"
        />
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">潮汐革命 共創未來</h1>
        </div>
      </div>

      {/* 最新消息 */}
      <div className="text-intertidalDarkMain">
        <Section title="最新消息" data={newsData} />
        {/* <Section title="最新消息" data={news} /> */}
      </div>
      
      {/* 政策宣傳 */}
      <div className="text-intertidalDarkMain">
        <Section title="政策宣傳" data={policyData} />
        {/* <Section title="政策宣傳" data={policies} /> */}
      </div>
    </div>
  );
}

type NewsItem = {
  id: number;
  date: string;
  title: string;
  description: string[];
  subtitle?: string[];
  texts?: string[];
  imageUrl: string;
};

type SectionProps = {
  title: string;
  data: NewsItem[];
};

function Section({ title, data }: SectionProps) {
  let cat = ""

  if (title === "最新消息") {
    cat = "news"
  } else {
    cat = "policy"
  }
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-intertidalDarkMain flex items-center mb-4">
        {/* <span className="mr-2">{title === "最新消息" ? "📰" : "📢"}</span> {title} */}
        {title === "最新消息" ? (
          <Image src={newspaperIcon} alt="Newspaper Icon" width={24} height={24} className="mr-2" />
        ) : (
          <Image src={loudspeakerIcon} alt="Newspaper Icon" width={24} height={24} className="mr-2" />
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
        {/* {title === "最新消息" ? ( */}
          {data.map((item, index) => (
          //  {newsData.map((item, index) => (
            <SwiperSlide key={index}>
  
              <Link key={item.id} href={`/${cat}/${item.id}`}> 
                <div className="bg-white rounded-2xl shadow-md h-1/2 p-0 m-0">
                {title === "最新消息" ? (
                  <Image
                    src={newsImages[item.id -1]}
                    // src={item.image}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl" 
                    alt={item.title}
                  />
                    ) : (
                  <Image
                    src={policyImages[item.id -1]}
                    // src={newsImages[item.id -1]}
                    // src={item.image}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl" 
                    alt={item.title}
                  />
                  )}
                  
                  <div className="p-4">
                    <div className="text-sm text-[#001f3f] mb-1">{item.date}</div>
                    <h3 className="text-lg text-[#001f3f] font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700"
                      style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%', // 確保最大寬度不超過父容器
                      }}>
                      {item.description}</p>
                  </div>
                </div>
              </Link> 
            </SwiperSlide>
          ))}
          
      </Swiper>
    </div>
  );
}