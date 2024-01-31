import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oq4ky9u', 'template_7qppgkc', form.current, 'wfVIqNUxPWnlLQoUE')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("error");
      });
  };


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form ref = {form}  onSubmit ={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - jainmanan806@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button value ="Send" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
   </div>
  )
}

export default Contact
