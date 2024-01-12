import React from 'react'

function Contact() {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
    <form action="https://getform.io/f/0a47ce3c-5cac-4632-b69a-6f1f477a8a54" method="POST" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 '>
            <p className='font-bold inline border-b-4 border-red-600 text-gray-300 text-4xl'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - akiyaramsith2002@gmail.com</p>
        </div>
        <input type="text"  placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
        <input type="email"  placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
        <textarea name="message" className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10"></textarea>
        <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 mx-auto my-8 flex items-center'>Let's Collaborate</button>
    </form>
    </div>
  )
}

export default Contact