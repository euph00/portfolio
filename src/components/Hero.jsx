import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { PlanetsCanvas } from './canvas';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex-col'>
      <motion.div 
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
        <div className='flex flex-col justify-center items-center mt-5'>
        </div>
        <div>

          <motion.h1 
          variants={textVariant(0.8)}
          initial='hidden'
          whileInView='show'
          className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#1b95e0]'>Lin Chieh</span>
          </motion.h1>
          
          <motion.h1 
          variants={textVariant(1.0)}
          initial='hidden'
          whileInView='show'
          className={`${styles.heroSubText} text-white`}>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>I make things with my computer</p>
          </motion.h1>

        </div>
      </motion.div>
      <motion.div 
      className='absolute h-full w-full justify-center items-center'
      variants={fadeIn('up', 'tween', 1, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}>
        <PlanetsCanvas />
      </motion.div>
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero