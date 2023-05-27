import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const Experience = () => {
  return (
    <motion.div
      variants={textVariant(0.1)}
      initial='hidden'
      whileInView='show'
    >
      <p className={styles.sectionSubText}>Experience</p>
      <h2 className={styles.sectionHeadText}>My journey thus far</h2>
    </motion.div>
  )
}

export default SectionWrapper(Experience, 'experience')