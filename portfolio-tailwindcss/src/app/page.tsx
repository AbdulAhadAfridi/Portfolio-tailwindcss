'use client'
import Hero from './components/Hero'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Project from './project/page'
import About from './about/page'
import Contact from './contact/page'

 function Home () {
  useEffect (() => {
    Aos.init({
      easing: "ease-in-back",
      duration: 600,
      delay:50,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 80,
    });
    Aos.refresh();
  } ,[]);

  return (
    <main>
    
      
      <Hero/>
      <div className="mt-20 mb-10 text-center fullrounded">
            <a   data-aos="zoom-in-up" href="https://milestone1-2-jet.vercel.app/" className="  bg-[#F2AA4CFF] text-black  text-xl  font-bold py-4 px-6 rounded-xl hover:bg-white" target='_blank'>
                Download CV
            </a>
        </div>
    
    <Project/>
    <About/>
    <Contact/>
    
    <div className="mb-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ">
  <hr className="border-t border-gray-600 mx-4 sm:mx-6 mt-28" />
  
  <div className="text-center text-gray-500 mt-4 mb-4">
    <p >&copy; 2024 Abdul Ahad Afridi. All rights reserved.</p>
  </div>
  
  <hr className="border-t border-gray-600 mx-4 sm:mx-6" />
</div>
    
    </main>

  )
}

export default Home