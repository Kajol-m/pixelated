import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

interface BannerProps{
    imageUrl:string;
    altText:string;
    link:string;
}
const bannerImages:BannerProps[]=[
    {imageUrl:"/banner-1.webp",
    altText:"Banner Image 1",
    link:"/about"},
    {imageUrl:"/banner-2.webp",
    altText:"Banner Image 2",
    link:"#"},
    {imageUrl:"/banner-3.webp",
    altText:"Banner Image 3",
    link:"#"}
];


const Banner: React.FC=()=>{
    const [currentSlides,setCurrentSlide]=useState(0);

    const nextSlide=()=>{
        setCurrentSlide((prev)=>(prev+1)%bannerImages.length);
    }

    const prevSlide=()=>{
        setCurrentSlide((prev)=>(prev-1+bannerImages.length)%bannerImages.length);
    }

    useEffect(()=>{
      const interval=setInterval(()=>{
        nextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }, [currentSlides]);

    return(
        <>
        <div className="relative w-screen overflow-hidden">
          <Link to={bannerImages[currentSlides].link}   className="w-screen object-cover">
            <img src={bannerImages[currentSlides].imageUrl} alt={bannerImages[currentSlides].altText}/>
          </Link>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-3 z-10">
            <button onClick={prevSlide}><FiChevronLeft className="text-white/50 font-bold"/></button>
            <button onClick={nextSlide}><FiChevronRight className="text-white/50 font-bold"/></button>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full ${
              currentSlides === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
        </div>
        </>
    )
}
export default Banner;
