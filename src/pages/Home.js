import Header from '../components/Header';
import Videos from '../components/Videos';
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
      <Videos />
      <Music />
      <Merch />
    </div>
    )
};

export default Home;