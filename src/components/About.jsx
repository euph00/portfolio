import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({
  index,
  title,
  icon
}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.3 * index, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale: 1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div 
      variants={fadeIn('', '', 0.3, 0.6)}
      viewport={{ once: false }}
      initial='hidden'
      whileInView='show'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn('', '', 0.4, 0.6)}
      className='mt-4 text-secondary text-[21px] max-w-3xl leading-[30px]'
      viewport={{ once: false }}
      initial='hidden'
      whileInView="show">
        I'm a competent software developer and tech enthusiast, interested in
        <span className='text-[#1b95e0]'> information security, algorithm design, artificial intelligence </span>
        and more. I have experience in various languages such as 
        <span className='text-[#1b95e0]'> Java,  C, Python, Typescript/Javascript and Dart</span>, 
        and am familiar with various frameworks and libraries in these languages.
        <br></br><br></br>
        As an undergraduate at the School of Computing in National University of Singapore, 
        I am enjoying exploring various fields within computer science through coursework 
        and interacting with like-minded peers.
        <br></br><br></br>
        {/* <span className='text-[#1b95e0]'> I look forward to learning something from you too!</span> */}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');