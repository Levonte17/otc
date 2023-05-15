import hbii from '../assets/hbii.png'
import hb from '../assets/hb.png'
import React from 'react'

function Music(props) {
  return (
    <div className='music'>
<h1>
    The Artist Behind The Brand
</h1>
<div className='sidebyside'>
    <div className="side">

    <a href='https://www.youtube.com/@iso6274'>
    <img 
  src={hb} 
  alt='iso'
  className="sbs"
/>  
  </a>
</div>
<div className="side">
<a href='https://www.youtube.com/@iso6274'>
<img 
  src={hbii} 
  alt='iso'
  className="sbs"
/>
</a>

</div>  
</div>
    </div>
  )
};
export default Music;




