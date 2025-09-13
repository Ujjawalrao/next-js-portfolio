"use client";

import { createRef, useRef, type ReactNode } from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";

interface ImageMouseTrailProps {
  items: string[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 6,
  imgClass = "w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));
  const currentZIndexRef = useRef(1);

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1;
    }
    image.style.zIndex = String(currentZIndexRef.current);
    currentZIndexRef.current++;

    image.dataset.status = "active";
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive";
      }, 1500);
    }
    last = { x, y };
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive";
  };

  const handleOnMove = (e: { clientX: number; clientY: number }) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length].current;
      const tail =
        refs.current[(globalIndex - maxNumberOfImages) % refs.current.length]?.current;
      if (lead) activate(lead, e.clientX, e.clientY);
      if (tail) deactivate(tail);
      globalIndex++;
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section
        onMouseMove={handleOnMove}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
        ref={containerRef}
        // bg-[url('https://i.pinimg.com/736x/44/af/15/44af1560953d8d80f64da3aff90b3a4e.jpg')]
        className={cn(
          "relative grid h-[100vh] w-full place-content-center overflow-hidden rounded-lg bg-[url('ttps://i.pinimg.com/originals/50/ea/6f/50ea6f333adf5baf1b1984d3d90420a5.gif')] bg-cover bg-center",
        )}
      >
        {items.map((item, index) => (
          <img
            key={index}
            className={cn(
              "opacity-0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500",
              imgClass
            )}
            data-index={index}
            data-status="inactive"
            src={item}
            alt={`image-${index}`}
            ref={refs.current[index]}
          />
        ))}

        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="z-[30] text-center text-[clamp(2rem,10vw,5rem)] font-bold whitespace-nowrap mix-blend-difference select-none"
        >
          Hi, I'm <span className="">Ujjawal</span> <br />
          <span className="text-[1.8rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem]">
            A Frontend developer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="z-[20] w-full absolute bottom-30 sm:bottom-20 md:bottom-20 px-4"
        >
          <p className="text-[clamp(0.875rem,3vw,1.2rem)] tracking-wide font-medium text-center mix-blend-difference select-none">
            I'm a creative and detail-oriented <span className="text-blue-600">frontend developer</span> <br />
            passionate about turning ideas into interactive, user-friendly digital experiences!
          </p>
        </motion.div>

        {children}
      </section>
    </>
  );
}