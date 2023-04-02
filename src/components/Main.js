//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Home from '../pages/Home';

function Main({user}) {
return(   
<Routes>
     <Route path='/' element={<Home/>}/>
     
</Routes>

    )
};

export default Main;