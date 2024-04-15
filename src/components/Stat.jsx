import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Stat() {
  return (
    <>
    <div className='max-w-full container mx-auto md:px-40 rounded-xl mt-10 px-4 bg-base-200  dark:text-white dark:bg-slate-700'>
    
    <div className=''>
        <h2 className=' text-2xl font-semibold  mt-10'>About us</h2>
        <p>Welcome to <span className=' text-yellow-600'>bookStore!</span> We're dedicated to bringing you the best in literature.</p>
    </div>
    <div className=''>
        <h2 className=' text-2xl font-semibold'>Our Mission</h2>
        <p>At <span className=' text-yellow-600'>bookStore</span>,was founded by Mr. Abishek Kumar with a simple vision: to create a haven for book enthusiasts. What started as a dream has now blossomed into a thriving online bookstore, fueled by our unwavering passion for literature.</p>
    </div>

    

    <div className=''>
        
    {/* <h2 className=' text-2xl font-semibold'>Contact us</h2> */}
    <div className='text-3xl flex justify-evenly mt-8 mb-8'>
    <a href="mailto:lalanrana01000@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className='hover:text-cyan-500 hover:scale-125'>
            <FaMailBulk />
        </button>
    </a>
    <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B1tUQKAPQSjehLvk%2Bcbk28w%3D%3D" target="_blank" rel="noopener noreferrer">
        <button className='hover:text-cyan-500 hover:scale-125'>
            <FaLinkedin />
        </button>
    </a>
    <a href="https://www.instagram.com/abhishaans/" target="_blank" rel="noopener noreferrer">
        <button className='hover:text-cyan-500 hover:scale-125'>
            <FaInstagram />
        </button>
    </a>
</div>


        
    </div>

    </div>
    
    </>
  )
}

export default Stat