import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import './Hero.css'

function Hero() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
        <h2>Get a free consultation call from us.</h2>
        <form ref={form} onSubmit={sendEmail}>
        <div className='hero-form-container'>
          <div className='input-fields'>
            <label for="user_name"></label>
            <input type="text" name="user_name" placeholder='Full Name' required/>
          </div>
          <div className='input-fields'>
            <label for="user_number"></label>
            <input type="number" name="user_number" placeholder='Phone Number' required />
          </div>
          <div className='input-fields'>
            <label for="user_email"></label>
            <input type="email" name="user_email" placeholder='Email Address' required />
          </div>
          {/* <div className='input-fields'>
            <label for="message"></label>
            <textarea name="message" placeholder='Message...' />
          </div> */}
        </div>
        <input type="submit" value="Send" className='submit-btn' />
      </form>
      </motion.div>
    </div>
  )
}

export default Hero