import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [captchaVal, setCaptchaVal] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4vn538r', 'template_n1shg1o', form.current, {
        publicKey: '5QddRjef5AzIKRcy0',
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
        <ReCAPTCHA
            className="reCaptcha-style mt-3"
            sitekey="6LcqndopAAAAAMcT5ZtuC6zllpnTH-hQz0aD0XBM"
            onChange={(val) => setCaptchaVal(val)}
          />
        <button type="submit" value="Send" className='submit-btn' disabled={!captchaVal} >Send</button>
      </form>
    </div>
  );
}

export default ContactForm