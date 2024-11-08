  import React from 'react'
  const Hero = () => {
    return (
      <section className='max-w-screen-xl mx-auto '>
<div className=' items-center flex justify-between flex-col md:flex-row  '>
  
   <div className="mt-14   text-4xl mx-auto] sm:text-6xl lg:text-8xl font-bold space-y-4 ">
    <p  data-aos="zoom-in-up"> I m</p>
    <p  data-aos="zoom-in-up">Abdul Ahad</p>
    <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="160"
     data-aos-duration="2000">Afridi</p>
     
   </div>
   <img src="/ahad.png" className='w-96 h-96 rounded-full object-cover mt-14 ' alt="Hero Image"  data-aos="zoom-in-up"></img>
  
      </div>
      </section>
    )

  }

  export default Hero


