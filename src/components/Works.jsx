import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useState } from 'react';

const ProjectCard = ({
  index,
  id,
  name,
  description,
  image,
  source_code_link,
  live_page_link,
  active,
  handleClick,
}) => {
  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.5)}
    initial='hidden'
    whileInView='show'
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={image}
      alt={name}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <div className='absolute bottom-0 p-8 h-full justify-start w-full flex-col bg-[rgba(0,0,0,0.3)] rounded-b-[24px] rounded-t-[24px]'>
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
          {name}
        </h3>
      </div>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        <div className='flex-row flex gap-4'>
          <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px]`}>
            <img 
              src={github} 
              alt="github" 
              className='w-1/2 h-1/2 object-contain'
              onClick={() => window.open(source_code_link, '_blank')}
            />
          </div>
          {live_page_link ? 
            (<div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism-tl mb-[16px]`}>
              <img 
                src={link} 
                alt="live page" 
                className='w-1/2 h-1/2 object-contain'
                onClick={() => window.open(live_page_link, '_blank')}
              /> 
            </div>) : (<div></div>)
          }
            
            
        </div>
          
        <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
          {description}
        </p>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text[24px] text-white'>
          {name}
        </h2>
      </div>
    )}
  </motion.div>
  )
}

const Works = () => {
  const [active, setActive] = useState('project-2');

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects I have undertaken</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        initial='hidden'
        whileInView='show'
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Below are a few projects that I have worked on, both as part of coursework and in my private time.
          They reflect my ability to solve real-world problems by translating conceptual solutions into
          tangible products. They also demonstrate my ability to work in a team environment and effectively 
          manage and lead projects. Do check them out if anything catches your eye!
        </motion.p>
      </div>

      <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            active={active}
            handleClick={setActive}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')