import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import GitHubCalendar from 'react-github-calendar';
import { github, twitter, facebook, email } from '../assets';
import { Link } from "react-router-dom";


const Contact = () => {
  
  return (
    <div className='flex-col flex gap-10 overflow-hidden'>
      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me here!</h3>
        <p className='sm:text-[16px] text-[12px] text-secondary tracking-wider'>euph.f1eur@gmail.com</p>
        <p className='sm:text-[16px] text-[12px] text-secondary tracking-wider'>linchieh@stu.comp.nus.edu.sg</p>

      </motion.div>
      <motion.div className='flex flex-row gap-5'
      variants={fadeIn("", "tween", 0.3, 0.3)}
      initial="hidden"
      whileInView='show'>
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px] hover:cursor-pointer`}>
          <img 
            src={github} 
            alt="github" 
            className='w-1/2 h-1/2 object-contain'
            onClick={() => window.open('https://github.com/euph00', '_blank')}
          />
        </div>

        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px] hover:cursor-pointer`}>
          <img 
            src={twitter} 
            alt="twitter" 
            className='w-1/2 h-1/2 object-contain'
            onClick={() => window.open('https://twitter.com/e_uph00', '_blank')}
          />
        </div>

        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px] hover:cursor-pointer`}>
          <img 
            src={facebook} 
            alt="facebook" 
            className='w-1/2 h-1/2 object-contain'
            onClick={() => window.open('https://www.facebook.com/y0so.ro', '_blank')}
          />
        </div>

        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px] hover:cursor-pointer`}>
          <Link
            to='#'
            onClick={(e) => {
              window.location.href = "mailto:euph.f1eur@gmail.com";
              e.preventDefault();
            }}
            className='w-1/2 h-1/2 object-contain'
          >
            <img 
              src={email} 
              alt="email" 
            />
          </Link>
          
        </div>

      </motion.div>
      <motion.div
      variants={fadeIn('', '', 0.4, 0.4)}
      initial='hidden'
      whileInView="show"
      >
        <GitHubCalendar username='euph00' />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")