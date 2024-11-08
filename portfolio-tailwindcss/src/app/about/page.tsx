const About = () => {
    return (
      <div>
        {/* About Text Section */}
        <section className='flex max-w-screen-xl mx-auto text-center'>
          {/* Text Section */}
          <div className='w-full pl-5'>
            <h2 className='text-4xl sm:text-5xl lg:text-7xl font-semibold mt-20' data-aos="zoom-in-up">
              About Me
            </h2>
  
            <p className='text-[#D3D3D3] text-2xl mt-8 md:mt-16' data-aos="zoom-in-up">
              I am a passionate web developer with a love for creating dynamic and responsive web applications.
              My journey in web development began with a fascination for technology and design.
              I enjoy working on projects that challenge my skills and allow me to learn and grow.
              My goal is to create user-friendly experiences that make a positive impact.
            </p>
  
            {/* Skills Section */}
            <div className='mt-8 md:mt-16'>
              <h3 className='text-4xl font-semibold' data-aos="zoom-in-up">Skills:</h3>
              <ul className='list-disc list-inside text-2xl space-x-5 text-[#fff] mt-8 md:mt-12' data-aos="zoom-in-up">
                <li className='border inline-block bg-red-400 border-none p-[6px]'>Typescript</li>
                <li className='border inline-block bg-purple-400 border-none p-[6px]'>Node</li>
                <li className='border inline-block bg-[#F2AA4CFF] border-none p-[6px]'>CSS</li>
                <li className='border inline-block bg-blue-400 border-none p-[6px] mt-6 sm:mt-0'>HTML</li>
                <li className='border inline-block bg-lime-400 border-none p-[6px] mt-6 sm:mt-0'>Next.js</li>
              </ul>
            </div>
  
            {/* Contact Link */}
            <div className="mt-20 mb-28 text-center">
              <a data-aos="zoom-in-up" href="/contact" className="bg-blue-500 text-white text-xl py-3 px-6 rounded-xl hover:bg-blue-600 transition duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  