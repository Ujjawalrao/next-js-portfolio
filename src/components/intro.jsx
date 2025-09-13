"use client";
import React from 'react'
import { motion } from 'framer-motion';

function intro({title}) {
  return (
    <motion.div
    initial={{
      opacity:1,
      height:'100%'
    }}
    animate={{
      height:0,
      display:'none'
    }}
    transition={{
      duration:.5,
      delay:.6
    }}
    className=' bg-transparent fixed top-[0] h-[110vh] w-full z-[999] flex '>
    <motion.h1
    initial={{
      opacity:1,
      scale:1
    }}
      animate={{
        opacity:0,
        scale:0.2
      }}
      transition={{
        duration:.5
      }}
    className="absolute z-[9999] mix-blend-difference text-[clamp(2rem,10vw,5rem)] font-mono font-extrabold text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  {title}
</motion.h1>

      <motion.div
        initial={{
          opacity:1,
          height:'100%'
        }}
        animate={{
          opacity:1,
          height:0
        }}
        transition={{
          duration:.5,
          delay:.6
        }}
        className='bg-white w-[20%] h-screen'>

      </motion.div>
      <motion.div
        initial={{
          opacity:1,
          height:'100%'
        }}
        animate={{
          opacity:1,
          height:0
        }}
        transition={{
          duration:.5,
          delay:.5
        }}
        className='bg-white w-[20%] h-screen'>

      </motion.div>
      <motion.div
        initial={{
          opacity:1,
          height:'100%'
        }}
        animate={{
          opacity:1,
          height:0
        }}
        transition={{
          duration:.5,
          delay:.4
        }}
        className='bg-white w-[20%] h-screen'>

      </motion.div>
      <motion.div
        initial={{
          opacity:1,
          height:'100%'
        }}
        animate={{
          opacity:1,
          height:0
        }}
        transition={{
          duration:.5,
          delay:.3
        }}
        className='bg-white w-[20%] h-screen'>

      </motion.div>
      <motion.div
        initial={{
          opacity:1,
          height:'100%'
        }}
        animate={{
          opacity:1,
          height:0
        }}
        transition={{
          duration:.5,
          delay:.2
        }}
        className='bg-white w-[20%] h-screen'>

      </motion.div>

    </motion.div>
  )
}

export default intro
