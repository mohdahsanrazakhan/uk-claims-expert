import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

function ContactForm() {

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
    <div className='contact-form'>
      <h1 className='contact-heading'>Contact us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contact-container'>
          <div className='fields-left'>
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
          </div>
          <div className='input-fields fields-right'>
            <label for="message"></label>
            <textarea name="message" placeholder='Type your message here...' />
          </div>
        </div>
        <input type="submit" value="Send" className='submit-btn' />
      </form>
    </div>
  );
}

export default ContactForm