//import logo from './logo.svg';
import './Style.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Userlist from './Components/Userlist';
import Headerhu from './Components/Headerhu';
import Footer from './Components/Footer';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
     
      <Headerhu />
      <Routes>
       
      < Route path='/'element={<Home/>} />   //routing hudai xa hai
      < Route path='/Userlist'element={<Userlist/>} />
      < Route path='/Adduser'element={<Adduser/>} />
      < Route path='/edituser/:id'element={<Edituser/>} />
      <Route path='/contact'element={<Contact/>}/>
      </Routes>
    
      <Footer/>
      
     
    </div>
  );
}

export default App;
