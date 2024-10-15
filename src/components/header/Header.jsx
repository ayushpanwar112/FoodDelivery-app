import React from 'react'
import  "./header.css"
const Header = () => {
  return (
    <div className='header h-[34vw] mt-8 mb-8 mx-auto w-[100%]' >
    <div className='header-contents absolute flex flex-col items-start gap-1 max-w-[50%]  left-[6vw]'>
    <h1 className="text-3xl md:text-[1rem] lg:text-5xl text-white">Order Is Waiting for You</h1> {/* min width */}
<p className="text-base md:text-lg lg:text-xl text-white">We are happy to take your order.</p>

         <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">View menu</button>
        </div>      
    </div>
  )
}

export default Header
