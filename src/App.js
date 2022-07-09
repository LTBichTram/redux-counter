//import Counter from './components/Counter'
import Header from './components/Header'
//import Auth from './components/Auth'
//import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
 // const isAuth = useSelector(state => state.auth)
 //S console.log(isAuth)
  return (
    <div className="App">
      <Header/>
      {/* {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>} */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
