import React from 'react'
import './Service.css'
import { motion } from "framer-motion"
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import claim from '../../assets/claims.jpg'
import legal from '../../assets/legal.jpg'
import support from '../../assets/support.jpg'

function Service() {
  return (
    <div className='service-parent'>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='service-heading'>Our Services</motion.h1>
      <ServiceCard imgUrl={claim} title="Housing Claim Expert" para="Entrust us with your claim management needs. We specialize in assessing housing disrepair, resolving rent arrears disputes, and pursuing compensation for property damage. With our expertise and dedication, your property concerns are in capable hands." />
      <ServiceCard imgUrl={legal} title="Expert Legal Representation" para="Experience expert legal representation with us. Our services include providing guidance on landlord and tenant law, assisting with property ownership disputes, and representing you in legal actions against negligent landlords. Trust us to navigate these complexities with skill and dedication." />
      <ServiceCard imgUrl={support} title="Making a Claim" para="If your landlord is a council, housing association, or another social landlord, we always operate on a no-win, no-fee basis. However, if your landlord is a private landlord, we may still be able to assist you on a no-win, no-fee basis, depending on the specifics of your case." />
    </div>
  )
}

export default Service