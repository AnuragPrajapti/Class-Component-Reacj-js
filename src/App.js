import './App.css';
import Register from './Component/Pages/RegisterForm';
import { Routes , Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home';
import Service from './Component/Pages/Service';
import Contact from './Component/Pages/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Pages/Login';
import UserData from './Component/Pages/UsersData';

function App() {
  return (
    <div className="App">
         <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/service' element={<Service />} ></Route>
            <Route path='/register' element={< Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/userData' element={<UserData />}></Route>
          </Routes>
    </div>
  );
}

export default App;
