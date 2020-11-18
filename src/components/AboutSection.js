import React from 'react';
import home1 from '../img/home1.png';
// styles
import {About, Description, Hide, Image} from '../styles';
// Framer Motion
import {motion} from 'framer-motion';

const AboutSection = () => {
    
    // const titleAnim = {
    //     hidden: { opacity: 0},
    //     show: { opacity: 1, transition: { duration: 2}}
    // }

    // const container = {
    //     hidden: { x: 300 },
    //     show: { x: 0, transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1, when: "beforeChildren"} }
    // }
    // Add in the tag variants={container} initial="hidden" animate="show" // variants={titleAnim}

    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We Work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                    <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                    <button>Contact Us</button>
                </motion.div>
            </Description>
            <Image>
                <img src={home1} alt="guy with the camera"/>
            </Image>
        </About>
    )
}

//Styled components







export default AboutSection;