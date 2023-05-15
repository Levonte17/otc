import purpleShirt from '../assets/purpleShirt.png'
import yellowShirt from '../assets/yellowShirt.png'
import blackShirt from '../assets/blackShirt.png'
import React from 'react'

function Merch(props) {
  return (
    <div className='merch'>
<h1>
     SHOP APPAREL
</h1>
<a href='https://offthecurb.net//collections/frontpage/products/curb-baby-t-shirts'>
<img 
  src={yellowShirt} 
  alt='yellow products'
  className="shirts"
/>  

</a>
<a href='https://offthecurb.net//collections/frontpage/products/curb-baby-t-shirts'>
<img 
  src={blackShirt} 
  alt='products'
  className="black shirts"
/>
</a>
<a href='https://offthecurb.net//collections/frontpage/products/curb-baby-t-shirts'>
<img 
  src={purpleShirt} 
  alt='purple'
  className="shirts"
/>
  </a>

  </div>
  )
};
export default Merch;




