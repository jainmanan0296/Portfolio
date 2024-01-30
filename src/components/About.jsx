import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Manan Jain, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am an undergraduate student at The LNM Institute of Information Technology, Jaipur. I am very particular about academics and coding, I've been doing Data Structures and Algorithms since my very first year and have a good grip on it. I am a socially active member of our social club known as Sankalp, and lead our team in the village project. My hobbies are to learn new stuff. I love to do competitive programming as well. Right now I'm also doing web development.</p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About
