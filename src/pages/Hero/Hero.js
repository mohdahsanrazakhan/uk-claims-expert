import React from 'react'
import { motion } from "framer-motion"
import './Hero.css'
import heroImg from '../../assets/hero.jpg'

function Hero() {

  return (
    <div className='hero-portion'>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='hero-title'>
        <h1>Welcome to UKCLAIMS EXPERT</h1>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='hero-form'>
          <img src={heroImg} alt="hero" loading='lazy' />
      </motion.div>
    </div>
  )
}

export default Hero