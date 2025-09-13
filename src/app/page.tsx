"use client"  // Add this if you're using Next.js 13 app directory

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import ImageCursorTrail from "@/components/ui/image-cursortrail";
import { TextScroll } from "@/components/ui/text-scroll";
import Navbar from "@/components/navbar";
import Intro from "@/components/intro"
import Whatido from "@/components/whatido";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t, // linear easing
    });
  
    function raf(time:any) {
      lenis.raf(time); // pass the timestamp for smooth scrolling
      requestAnimationFrame(raf); // keep the loop going
    }
  
    requestAnimationFrame(raf); // start the loop
  
    return () => {
      lenis.destroy(); // clean up on unmount
    };
  }, []);
  

  return (
    <>
      <Intro title='स्वागत है ' />  
      <ImageCursorTrail
        items={[
          "https://i.pinimg.com/1200x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg",
          "https://i.pinimg.com/736x/39/cf/ed/39cfed557a1e7af9f90617628a0c369a.jpg",
          "https://i.pinimg.com/736x/57/8d/8d/578d8dbc8c2509ab6539f7796b44bbd0.jpg",
          "https://i.pinimg.com/1200x/ef/4d/8e/ef4d8e496c4b5bde262ccb2682cc091b.jpg",
        ]}
      />
      <TextScroll text="*" default_velocity={2} className="text-3xl font-extrabold pt-10" />
      <Whatido />
    </>
  );
}
