

const Project = () => {
    return (
  
      <div className="bg-black text-black flex justify-center items-center min-h-screen">
      <section className="container mx-auto px-6 py-12  mt-28">
          {/* Main Heading */}
          <h1 className="text-7xl font-bold  text-center  text-white mb-10 ">My Projects</h1>
          
          {/*  Project Grid  */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {/*  Project Card 1 > */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-20">
                  <div className="h-96 bg-gray-200">
                      
                      <img src="img1.PNG" alt="Project Image 1" className="w-full h-full object-cover"></img>
                  </div>
                  <div className="p-6">
                      <h2 className="text-3xl font-bold mb-2 text-center  ">Food website</h2>
                      <p className="text-gray-600 mt-8 font-bold  ">Hi  Hello</p>
                      <p className="text-gray-600  font-bold">Welcome to my food website, a culinary hub crafted to tantalize your taste buds! This site brings you a curated selection of delicious recipes, tips for healthy eating, and inspiration for home cooking.I built this website from scratch using HTML and CSS, ensuring a responsive and user-friendly experience. Whether you are a seasoned chef or a home cook, explore a world of flavors here!</p>
                  </div>
              </div>
              
              {/* Project Card 2  */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-20">
                  <div className="h-96 bg-gray-200">
                  
                      <img src="/img2.PNG" alt="Project Image 2" className="w-full h-full object-cover"></img>
                  </div>
                  <div className="p-6">
                      <h2 className="text-3xl font-bold mb-2  text-center ">Figma website design</h2>
                      <p className="text-gray-600  mt-8 font-bold">Figma is a powerful web-based design tool that enables real-time collaboration for teams, allowing designers to create, prototype, and iterate all in one place. Its intuitive interface and vast library of design elements make it ideal for building user interfaces and experiences. I built this website from scratch using HTML and TAILWINDCSS AND NEXT.JS ensuring a responsive and user-friendly experience.</p>         </div>
             </div>
  
              {/* <!-- Project Card 3 --> */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-20">
                  <div className="h-96 bg-gray-200">
                      
                      <img src="img3.PNG" alt="Project Image 3" className="w-full h-full object-cover"></img>
                  </div>
                  <div className="p-6">
                      <h2 className="text-3xl font-bold mb-2  text-center ">Dynamic Resume</h2>
                      <p className="text-gray-600  mt-8 font-bold">A dynamic resume is an interactive, web-based resume that adapts to highlight relevant skills, experiences, and achievements based on the audience or job role. Unlike traditional resumes, it allows users to showcase their work through embedded links, animations, and multimedia, making it highly engaging. Dynamic resumes can be updated easily, keeping content fresh and aligned with the latest trends. Ideal for creative professionals, these resumes help leave a memorable impression by blending design with functionality</p>
                  </div>
              </div>
          </div>
      </section>
      </div>
   
      
      
    )
  }
  
  export default Project
  