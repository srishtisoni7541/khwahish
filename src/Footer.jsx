import React from 'react'
import { FaFacebookF, FaInstagram, FaRegCopyright, FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
function Footer() {
    return (
        <>
            <div className=' bg-[#f8f8f8] md:h-[400px] h-auto border-2 border-t-black  pb-[20px]' >
                <div className='pt-[50px] md:px-[40px] px-0 md:flex md:flex-row flex flex-col md:justify-between 
                justify-center md:items-start items-center md:gap-0 gap-10' >
                    <img src="/Diamond/KhwaahishDiamondsLogo.webp" width='150px' className='h-[80px]' alt="" />
                    <div >
                        <p className='text-lg font-semibold mb-8'>Contect us</p>
                        <p className='flex gap-2 justify-start items-center text-[14px] py-2'><span><FiPhoneCall /> </span>+91 453453455</p>
                        <p className='flex gap-2 justify-start items-center text-[14px] py-2'><span><IoMail />                </span>admin@Khwaahish.com</p>
                        <p className=' flex gap-2 mt-2 py-2 text-[14px]'><FaInstagram className='text-[25px]' /><FaWhatsapp className='text-[25px]' /><FaFacebookF className='text-[24px]' /><TfiYoutube className='text-[25px]' /></p>
                    </div>
                    {/* 
                     */}

                    <div className="px-6 rounded-md max-w-sm">
                        <h2 className="text-lg font-semibold mb-8">Address</h2>
                        <div className="flex items-start">
                            <svg className="w-5 h-5 mt-1 mr-3 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 10.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                            </svg>
                            <div>
                                <p className="text-gray-800 text-[14px]">No: 53/2, C.P. Ramaswamy Road,</p>
                                <p className="text-gray-800 text-[14px]">Abiramapuram, Chennai,</p>
                                <p className="text-gray-800 text-[14px]">Tamil Nadu 600018</p>
                            </div>
                        </div>
                    </div>


                    <div >
                        <p className='text-lg font-semibold mb-8'>Quick Links</p>

                        <p className='mb-2 text-[14px]'>Blog</p>
                        <p className='mb-2 text-[14px]'>Our Story</p>
                        <p className='mb-2 text-[14px]'>Privacy Policy</p>
                        <p className='mb-2 text-[14px]'>Contact Us</p>
                        <p className='mb-2 text-[14px]'>Terms and Condition</p>
                    </div>


                </div>
                <div className=' w-[95%] mx-auto my-[80px]'>
                    <img src="/Diamond/payment-gateway-logos.webp" width='350px' alt="" />
                    <p className=' flex items-center gap-1 mt-2'><FaRegCopyright />2024 | <span className=' text-[#b2872b]'> HTML Sitemap </span> Designed for Khwaahish, All Rights Reserved </p>
                </div>
            </div>
        </>
    )
}

export default Footer