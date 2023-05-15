import React from 'react'
import curbgirl from '../assets/curbgirl.gif';
import curbboy from '../assets/curbboy.png';
import curbbaby from '../assets/curbbaby.png';

function Why(props) {
  return (
    <div className='whyus'>
      <img className='circles' alt='curbbody' src={curbbaby}  />
        <p>
        We offer a wide range of unique apperal and styles.
        If you love to shop simple but clean clothing, this is the 
        shopping site for you.  
        </p>
      
      <img className='circles' alt='curbbody' src={curbgirl}  />
        <p>
        When you shop with us online/ offline, you are family.
        We are the clothing store who offers customized colors
        and styles to our customers for a better shopping experience.
        </p>

      <img className='circles' alt='curbbody' src={curbboy}  />
        <p>
        We pride ourselves on customer satisfaction.
        Keeping our customers happy is our top priority
        and main focus. 

        </p>
    </div>
  )
}

export default Why
