import React from "react";
import { useState } from "react";
import {
    FaBars,
    FaTimes,
} from 'react-icons'
import Logo from '../assets/logoFlip.png'
import './comps.css'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


    return (
        <div className='fixed w-full h-[125px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

        /* Home page Logo redirect */
            <div>
                <a href="https://www.google.com">
                    <img src={Logo} alt="" className="fixed w-20 h-20 left-7 top-6" to="https://www.google.com"/>
                </a>
            </div>


        </div>
    );
}

export default Navbar;