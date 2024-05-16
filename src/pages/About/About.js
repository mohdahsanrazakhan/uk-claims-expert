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
        Discover a harmonious blend of legal prowess and personalized care with our collaborative network of 15 top-tier solicitors. At our core, we champion diversity in legal expertise, ensuring every client receives tailored solutions and expert guidance, particularly in the intricate realms of housing disrepair and property disputes.
        </p>
        <p className="about_paragraph_sub">
        It's our unwavering dedication to securing compensation that speaks volumes. Picture this: your compensation ranging from a generous £7,000 to £8,000, ensuring that justice is not just served but celebrated. Even the minimum compensation of £1,500 is a testament to our unwavering commitment to your rights and well-being.
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
            At UK Claims Expert, we've tirelessly assisted numerous tenants in reclaiming their rightful compensation and restoring their quality of life. We understand that enduring the stress of a poorly maintained property shouldn't be suffered in silence. That's why our dedication lies in advocating for tenants' rights, especially when significant disrepair threatens your well-being.
          </p>
          <p className="about_paragraph_sub">
            Our seasoned solicitors meticulously construct robust disrepair claims against landlords, leaving no stone unturned in pursuit of justice. With us, you'll have a dedicated case handler guiding you through every legal nuance, addressing any questions or concerns along the way. And here's the best part: we operate on a strict no-win, no-fee basis. That means if your claim doesn't succeed, you won't be charged a penny, as long as you adhere to our agreement terms.
          </p>          
        </div>
      </motion.div>
    </div>
    </div>
    
  );
};

export default About;