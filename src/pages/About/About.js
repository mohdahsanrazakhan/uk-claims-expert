import React from "react";
import './About.css'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="about_container">
      <div className="About_portion">
      <div className="About_Us">
        <h1 className="about_heading">ABOUT US</h1>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="_portion">
        <div className="text_portion">
          <h2 className="about_subheading">The Landlord and Tenant Act 1985</h2>
          <p className="about_paragraph_sub">
            The Landlord and Tenant Act 1985 outlines the majority of a landlord's responsibilities concerning property repair and maintenance in Section 11.
          </p>
          <p className="about_paragraph_sub">
            Please note that the following information serves as a general guideline and does not cover all potential disrepair issues that fall under a landlord's obligations. If you're a tenant and encounter an issue not listed here, it may still be your landlord's responsibility to address it. We encourage you to seek free and confidential advice from a member of our specialized housing disrepair team.
          </p>
          <p className="about_paragraph_sub">
          While it's becoming less common, some landlords may agree to additional repairing obligations beyond the legal minimum. To enforce these obligations, they should be clearly stated in your tenancy agreement or another relevant document. We recommend reviewing your tenancy agreement to confirm if your landlord has accepted any further repairing responsibilities. Alternatively, our expert housing disrepair team can assist you with this task.
          </p>
          
        </div>
      </motion.div>
      <div className="Transitioning_portion DEBT_portion">
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text_portion">
        <h2 className="about_subheading">How we help?</h2>
        <p className="about_paragraph_sub">
        We collaborate with 10 to 15 solicitors to provide diverse legal expertise. This partnership enables tailored solutions and expert guidance on housing disrepair and property disputes. Working closely with this network ensures specialized support for landlord-tenant issues. Our approach guarantees professionalism and care in navigating legal challenges, whether complex or straightforward. Clients benefit from efficient and confident resolution of their legal needs, knowing they have access to a range of expert resources.
        </p>
        <p className="about_paragraph_sub">
        We help you in getting compensation, compensation amounts can be more than £7,000 to £8,000. The minimum amount that a person receives is £1,500.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="_portion">
        <div className="text_portion">
          <h2 className="about_subheading">No Win, No Fee Service</h2>
          <p className="about_paragraph_sub">
            At UK Claims Expert, we've aided countless tenants in reclaiming their quality of life and securing rightful compensation. Enduring the stress of a poorly maintained property shouldn't be endured in silence. Our commitment is to advocate for tenants' rights, especially when significant disrepair jeopardizes your belongings.
          </p>
          <p className="about_paragraph_sub">
          Our seasoned solicitors diligently construct robust disrepair claims against landlords. Your dedicated case handler will navigate the legal intricacies and address any queries you may have. Operating on a strictly no-win, no-fee basis, we won't charge you if your claim fails, provided you adhere to our agreement terms. While based in Manchester, we've helped individuals nationwide secure housing disrepair compensation. Whether you're ready to file a claim or seek guidance, contact us for assistance. We're eager to help.
          </p>          
        </div>
      </motion.div>
    </div>
    </div>
    
  );
};

export default About;