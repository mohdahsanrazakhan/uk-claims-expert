import React from 'react'
import './ServiceCard.css'
import { motion } from "framer-motion"

function ServiceCard({imgUrl, title, para}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="service-info">
        <div className="service-image">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="service-description">
          <h2>{title}</h2>
          <p>{para}</p>
        </div>
    </motion.div>
  )
}

export default ServiceCard