import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hi. I'm Akindu, nice to meet you.Please take a look around</p>
            </div>
            <div>
                <p>Passionate about coding and dedicated to creating compelling, user-centric web solutions. My expertise spans both front-end and back-end technologies, empowering me to tackle challenges with a creative edge. Join me in turning ideas into impactful digital experiences.</p>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default About;
