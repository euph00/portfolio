import { BrowserRouter } from 'react-router-dom';
import { About, Timeline, Experience,  Hero, Navbar, Tech, Works, StarsCanvas, Contact } from './components';
import TimelineObserver from "react-timeline-animation";
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Tech />
        <Experience />
        <motion.div
        variants={fadeIn("", "", 0.1, 0.3)}
        initial='hidden'
        whileInView="show">
          <TimelineObserver
          initialColor="#ffffff"
          fillColor="#1b95e0"
          hasReverse={true}
          handleObserve={(setObserver) => (
              <Timeline
                  callback={() => {}}
                  className="timeline"
                  setObserver={setObserver}
              />
          )}
          />
        </motion.div>
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
