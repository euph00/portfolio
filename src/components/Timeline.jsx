import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const TimelineCard = (
    title,
    body,
    date,
) => (
    <motion.div 
    className="w-[85%] absolute ml-[10%] mr-[3%] lg:ml-[5%] rounded-xl glassmorphism-tl px-4 py-4"
    variants={fadeIn('', '', 0.1, 0.3)}
    initial='hidden'
    whileInView='show'>
        <h3 className="text-white font-bold text-[30px]">{title}
            <span className="text-secondary">&nbsp;&nbsp;</span>
            <span className="text-[#1b95e0] text-[21px]">{date}</span>
        </h3>
        <p className="text-secondary text-[21px] mt-3">{body}</p>
    </motion.div>
);

const TimelineSection = (
    sectionId,
    sectionRef,
    eventId,
    eventRef,
    child,
    displayChild,
) => (
    <>
        <div className="relative flex flex-row">
            <div id={eventId} ref={eventRef} className="circle">
                &nbsp;
            </div>
            {displayChild ? child : <div/>}
        </div>
        <div id={sectionId} ref={sectionRef} className="timeline lg:h-[300px] md:h-[370px] sm:h-[450px] xs:h-[520px] h-[800px]" />
    </>
)

const Timeline = ({ setObserver, callback }) => {
    const [showMessage1, setShowMessage1] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showMessage4, setShowMessage4] = useState(false);

  
    const section0 = useRef(null);
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);

    const event1 = useRef(null);
    const event2 = useRef(null);
    const event3 = useRef(null);
    const event4 = useRef(null);

  
    const showEvent1 = () => {
      setShowMessage1(true);
      callback();
    };
  
    const showEvent2 = () => {
      setShowMessage2(true);
    };
  
    const showEvent3 = () => {
      setShowMessage3(true);
    };

    const showEvent4 = () => {
        setShowMessage4(true);
      };
  
    useEffect(() => {
      setObserver(section0.current);
      setObserver(section1.current);
      setObserver(section2.current);
      setObserver(section3.current);
      setObserver(section4.current);

      setObserver(event1.current, showEvent1);
      setObserver(event2.current, showEvent2);
      setObserver(event3.current, showEvent3);
      setObserver(event4.current, showEvent4);

    }, []);
  
    return (
        <div className={`${styles.padding} flex flex-row justify-start max-w-7xl mx-auto relative`}>
            <div className="wrapper justify-start w-full">
                <div id="section0" ref={section0} className="timelineShort" />

                {TimelineSection('section1', section1, 'event1', event1, TimelineCard(experiences[0].title, experiences[0].body, experiences[0].date), showMessage1)}
                
                {TimelineSection('section2', section2, 'event2', event2, TimelineCard(experiences[1].title, experiences[1].body, experiences[1].date), showMessage2)}

                {TimelineSection('section3', section3, 'event3', event3, TimelineCard(experiences[2].title, experiences[2].body, experiences[2].date), showMessage3)}

                {TimelineSection('section4', section4, 'event4', event4, TimelineCard(experiences[3].title, experiences[3].body, experiences[3].date), showMessage4)}

            </div>
            
        </div>
    );
  };

  export default Timeline;