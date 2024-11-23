import React from 'react'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter";
import Header from '../Header/Header'
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header/>
        {/* the best ad */}
        <div className="the-best">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>"THE BEST HABITS TO REDUCE SCREEN TIME " </span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Routine, Away from Screens</span>
          </div>
          <div>
            <span>
            "Here, we will help you break free from screen addiction and rediscover
             the joys of living life to the fullest."
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={100} start={50} delay={4} preFix="+" />
            </span>
            <span>Expert Guides</span>
          </div>
          <div>
            <span>
              <NumberCounter end={500} start={300} delay={4} preFix="+" />
            </span>
            <span>Screen-Free Enthusiasts Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={30} delay={2} preFix="+" />
            </span>
            <span>Screen-Time Reduction Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
      <Link className="btn"
              to="contact"
              spy={true}
              smooth={true}
            >
              Join now
            </Link>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          
          <span>Focus Rate</span>
          <span>100%</span>
        </motion.div>

        {/* hero images */}
      

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Screen-Free Hours Achieved</span>
            <span>10 Hours</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
