"use client"

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const Banner = () => {
  const images = [
    { url: "https://plus.unsplash.com/premium_photo-1670152411569-7cbc00946857?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1608613381851-6a058de0dc11?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://plus.unsplash.com/premium_photo-1664202526641-4203eaa33844?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1570097902709-2b8384c4defb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    
      <div className=" relative top-0.5 w-full h-[500px] flex items-center justify-center object-cover ">
        <Slider imageList={images} width={1500} height={400} />
      
    </div>
  )
}

export default Banner;
