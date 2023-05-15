import Header from '../components/Header';
import Why from '../components/Why';
import Merch from '../components/Merch';
import Music from '../components/Music';
import Navi from '../components/Navi';
//import Why from '../components/Why';
//import { Navigate } from 'react-router-dom';

function Home(props) {
//HIDING DATA
//function PrivatePage({ children, user }) {
//    return user ? children : <Navigate to='/' /> 
//}
  return (
    <div className='feed-container'>
      <Navi />
      <Header />
      <Why />
      <Merch />
      <Music />
    </div>
    )
};

export default Home;