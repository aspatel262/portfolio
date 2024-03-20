import React from 'react'
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import res from '../assets/Aditya_Patel_Resume.pdf';
import './comps.css';

const sideBar = () => {
    return (
        <div className='sidebar-nav'>
                <ul>
                    <li className='sidebar-floating-box bg-blue-600'>
                        <a className='sidebar-text pl-3' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='sidebar-floating-box bg-[#333333]'>
                        <a className='sidebar-text pl-5' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='sidebar-floating-box bg-[#6fc2b0]'>
                        <a className='sidebar-text pl-6' href='mailto:aspatel262@gmail.com'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='sidebar-floating-box bg-[#565f69]'>
                        <a className='sidebar-text pl-4' href={ res } target="_blank" rel="noopener noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
    );
}

export default sideBar;