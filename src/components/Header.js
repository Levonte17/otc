import isocurb from '../assets/isocurb.gif'

function Header(props) {
    
    return (
<div className='sidebyside'>
    <div className="side">
    <h1> OFF THE CURB APPERAL X ISO </h1>
    <a href='https://www.youtube.com/@iso6274'>
    LISTEN
    </a>
    <br />
    <a href='https://www.off-the-curb.net'>
    SHOP NOW
    </a>
    <br />
    <a href='https://www.youtube.com/watch?v=YZGDE2ZnYk4'>
    CONNECT WITH ISO
    </a>
    <br />
    <a href='https://www.youtube.com/watch?v=-kQPn4J_11I'>
    OFF THE CURB APPERAL
    </a>
    </div>
<div className="side">

<img 
  src={isocurb} 
  alt='iso'
  className="sbs"
/>
</div>
    </div>  
    )
};

export default Header;