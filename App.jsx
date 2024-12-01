import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Products from './pages/Products';
import { useState } from 'react';
import Profile from './pages/Profile'

function App() {

  const[userName,setuserName] = useState('Samuel')

  return (
    <div>
      <div className="container">

        <BrowserRouter>

          <div className="topSection">

            <div className="welcomeSection">
              <h2 className="" id="welcome"> Welcome to this Ecommerce website </h2>
              <div className="userName"><Link to='/Profile'><div className="btn">{userName}</div></Link></div>
            </div>

            <div className="links">
              <Link to="/Contacts"><button className="btn">Contacts</button></Link>
              <Link to="/Products"><button className="btn">Products</button></Link>
              <Link to="/"><button className="btn">Home</button></Link>
            </div>

          </div>

          <div className="routingSection">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Profile" element={<Profile userName = {userName} setuserName ={setuserName}/>} />
            </Routes>

          </div>
          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
