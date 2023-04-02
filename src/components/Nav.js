import React from 'react'
import {FiYoutube} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Nav(props) {
  return (
    <div className='Nav'>
      <div className='Navs'>
        <a href='/' className='Navs'>
          <FaHome/> 
        </a>
      </div>
                <div className='Navs'>
                <a href='https://www.youtube.com/@iso6274' className='Navs'>
                <FiYoutube />
                <br/>
                <b>YouTube</b>
            </a>
                </div>
                <div className='Navs' >
                    <a href='https://www.instagram.com/1mil.iso/'
                        className='Navs'>
                        <FiInstagram/> 
                        <br/>
                        <b>Instagram</b>
                    </a> 
                </div>
                <div className='Navs'>
    <a href='mailto: iso.isolation12@gmail.com' className='Navs'>
             <FiPhoneCall />
             <br/>
             <b>Book </b>
    </a>
                </div>    
                </div>
  )
};

export default Nav;
