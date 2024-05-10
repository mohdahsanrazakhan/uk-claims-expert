import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'
import { motion } from "framer-motion"

function Contact() {
  return (
    <div className='contact-us'>
      {/* Form Portion */}
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='form-container'>
        <ContactForm />
      </motion.div>
    </div>
  )
}

export default Contact