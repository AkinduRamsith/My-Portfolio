import React from 'react'
import CSS from "../assests/css.png";
import Github from "../assests/github.png";
import HTML from "../assests/html.png";
import JavaScript from "../assests/javascript.png";
import Node from "../assests/node.png";
import ReactImg from "../assests/react.png";
import SpringBoot from "../assests/springboot.png";
import TailwindCss from "../assests/tailwind.png";
import Angular from "../assests/angular.png";



function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Node} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={SpringBoot} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>Spring Boot</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={TailwindCss} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>Java Script</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Angular} className='w-20 mx-auto' alt="HTML Icon" />
                    <p className='my-4'>Angular</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills