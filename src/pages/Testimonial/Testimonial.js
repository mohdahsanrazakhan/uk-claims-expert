import React from 'react';
import './Testimonial.css';
import { motion } from "framer-motion"

const TestimonialCard = ({ name, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className='testimonial-info'>
          <div className='testimonial-stars'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF500" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF500" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF500" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF500" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF500" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

          </div>
          <p className="testimonial-text">{testimonial}</p>
          <p className="testimonial-author">- {name}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='testimonial-parent'>
      <h1 className='testimonial-heading'>Testimonials</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="testimonial-container">
        <TestimonialCard
          name="Sophie Williams"
          testimonial="I had been grappling with unresolved property damage issues with my landlord for quite some time, so I made the decision to explore legal avenues. I am absolutely thrilled with the outcome and the professional handling of the situation. I wholeheartedly endorse the team; their service was exceptional." />
        <TestimonialCard
          name="Liam Patel"
          testimonial="The solicitor assigned to my case was incredibly informative, patiently guiding me through every step, especially during moments of uncertainty. Their kindness and pleasant demeanor made discussing the case effortless. Highly recommend entrusting them with your legal matters." />
        <TestimonialCard
          name="Emily Jones"
          testimonial="My experience with The Housing Claims was outstanding! From start to finish, the team went above and beyond to assist me. Their support was exceptional and truly made a difference. I enthusiastically recommend their services to anyone in need." />
        <TestimonialCard
          name="Steve albert"
          testimonial="The Housing Claims exceeded all my expectations! Their team's dedication and professionalism were unparalleled. I felt supported every step of the way, and their efforts resulted in a successful outcome for me. I wholeheartedly endorse their services to anyone seeking reliable assistance." />
        <TestimonialCard
          name="robert collins "
          testimonial="I can't thank The Housing Claims enough for their exceptional support. Their expertise and commitment turned what could have been a daunting process into a seamless experience. I'm incredibly grateful for their assistance and highly recommend them to anyone navigating housing disputes." />
        <TestimonialCard
          name="bruce watson"
          testimonial="Working with The Housing Claims was a game-changer for me. Their team's expertise and personalized approach made me feel confident and reassured throughout the legal process. They truly care about their clients' well-being and go above and beyond to deliver results. I wouldn't hesitate to recommend their services to anyone seeking top-notch representation." />
      </motion.div>
    </div>
  );
};

export default Testimonials;