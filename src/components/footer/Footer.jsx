import React from 'react'
import { assets } from '../../../public/frontend_assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer flex flex-col items-center bg-slate-600 text-white py-10' id='footer'>
      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {/* Left Section */}
        <div className="footer-content-left flex flex-col items-center md:items-start text-center md:text-left">
          <img src={assets.logo} alt="FoodBox Logo" className="mb-4 w-60"/>
          <p className="mb-4">© 2024 FoodBox | Fresh Ingredients, Delivered to Your Door</p>
          <div className="food-social-icon flex space-x-4">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-500 cursor-pointer"/>
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-700 cursor-pointer"/>
            <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 cursor-pointer"/>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center flex flex-col items-center md:items-start">
          <h2 className=" mb-4 font-bold text-3xl">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About us</li>
            <li className="hover:text-gray-300 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-300 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right flex flex-col items-center md:items-start">
          <h2 className="font-bold text-3xl mb-4">Get in touch</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">+234-232-1231</li>
            <li className="hover:text-gray-300 cursor-pointer">panwarkanu2001@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
