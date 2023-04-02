import merchii from '../assets/merchii.png'
import merch from '../assets/merch.png'
import React from 'react'

function Merch(props) {
  return (
    <div className='merch'>
<h1>
    MERCH
</h1>
<div className='sidebyside'>
    <div className="side">

    <a href='https://www.off-the-curb.net'>
<img 
  src={merch} 
  alt='iso'
  className="sbs"
/>  
  </a>
</div>
<div className="side">

    <a href='https://www.off-the-curb.net'>
<img 
  src={merchii} 
  alt='iso'
  className="sbs"
/>
  </a>
</div>  
</div>
    </div>
  )
};
export default Merch;




