
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between p-5'>
    
      {/* Left Container */}
      <div className='container bg-[#F2AA4CFF] w-full lg:w-[50%] h-auto lg:h-[800px] p-5 rounded-md' data-aos="zoom-in-up">
        {/* Portfolio Heading */}
        <div>
          <h4 className='text-black font-extrabold text-2xl text-center mt-8'>Portfolio 2024</h4>
          <p className='text-black font-semibold text-lg px-3 mt-5 text-center'>
            I am a passionate web developer dedicated to creating responsive, user-friendly designs with a focus on functionality and aesthetics. With expertise in HTML, CSS, and JavaScript, I bring ideas to life through clean code and innovative solutions. I am always eager to learn and take on new challenges that push my skills forward.
          </p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center mt-5'>
          <img
            src="/ahad.png"
            className='w-30 rounded-full object-cover'
            alt="Hero Image"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className='w-full lg:pl-5 mt-10 lg:mt-0 text-center lg:text-left'>
        <h2 className='text-6xl lg:text-7xl font-semibold ml-0 lg:ml-10' data-aos="zoom-in-up">Thank</h2>
        <h2 className='text-6xl lg:text-7xl font-semibold ml-0 lg:ml-12' data-aos="zoom-in-up">You</h2>
        <hr className='w-[50%] lg:w-[25%] mt-6 ml-32 md:ml-14'></hr>

        <p className='text-[#D3D3D3] text-lg lg:text-2xl mt-8 ml-0 lg:ml-14' data-aos="zoom-in-up">
          Thank you for checking out my portfolio! I am always excited to connect with like-minded individuals. 
          Whether you have a question, a project idea, or just want to say hello, feel free to get in touch. 
          I look forward to hearing from you and exploring potential opportunities together. Lets create something amazing!
        </p>

        {/* Contact Button */}
        <div className='mt-8 ml-0 lg:ml-14'>
          <button data-aos="zoom-in-up" className='bg-[#F2AA4CFF] text-black font-bold px-6 py-3 text-xl rounded-md hover:bg-[#e39c3b]'>
            Contact Me
          </button>
        </div>
          
        {/* Contact Info */}
        <div className='mt-8 ml-0 lg:ml-14' data-aos="zoom-in-up">
          <p className='flex items-center'><BsFillTelephoneFill className='mr-2' />03483992004</p>
          <p className='flex items-center mt-4'><MdOutlineEmail className='mr-2' /> hafizabdulahadkhanafridi@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6 justify-center lg:justify-start mb-2 ml-0 lg:ml-14">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="160" data-aos-duration="2000">
            <BsFacebook className="text-gray-400 hover:text-white" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="160" data-aos-duration="2000">
            <BsInstagram className="text-gray-400 hover:text-white" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="160" data-aos-duration="2000">
            <BsLinkedin className="text-gray-400 hover:text-white" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
