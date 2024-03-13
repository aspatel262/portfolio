import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import res from '../assets/Aditya_Patel_Resume.pdf';

const sideBar = () => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-blue-600 rounded-2xl'>
                        <a className='flex pl-3 justify-between items-center w-full text-white' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-[#333333] rounded-2xl'>
                        <a className='flex pl-5 justify-between items-center w-full text-white' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-[#6fc2b0] rounded-2xl'>
                        <a className='flex pl-6 justify-between items-center w-full text-white' href='mailto:aspatel262@gmail.com'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-[#565f69] rounded-2xl'>
                        <a className='flex pl-4 justify-between items-center w-full text-white' href={ res } target="_blank">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
    );
}

export default sideBar;