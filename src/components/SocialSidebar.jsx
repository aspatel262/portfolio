import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import res from '../assets/Aditya_Patel_Resume.pdf';
import "../App.css";


function SocialSidebar() {

    return (

        <div className='sidebar-nav'>
            <ul>
            <li className='sidebar-floating-box bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-blue-600 hover:to-blue-800 hover:scale-105'>
                <a className='sidebar-text pl-3' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
                Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='sidebar-floating-box bg-gradient-to-r from-gray-700 to-gray-600 hover:from-[#555555] hover:to-[#333333] hover:scale-105'>
                <a className='sidebar-text pl-5' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
                Github <FaGithub size={30} />
                </a>
            </li>
            <li className='sidebar-floating-box bg-gradient-to-r from-[#6fc2b0] to-[#28a79f] hover:from-[#28a79f] hover:to-[#6fc2b0]  hover:scale-105'>
                <a className='sidebar-text pl-6' href='mailto:aspatel262@gmail.com'>
                Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='sidebar-floating-box bg-gradient-to-r from-[#444444] to-[#999999] hover:from-[#999999] hover:to-[#444444] hover:scale-105'>
                <a className='sidebar-text pl-4' href={res} target="_blank" rel="noreferrer">
                Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
            </ul>
        </div>

    )
}

export default SocialSidebar;