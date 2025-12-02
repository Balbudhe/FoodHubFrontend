import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Logout from './Pages/Logout';
import Nav from './Componant/NavSec/Nav';
import Forgotpage from './Pages/Forgotpage';
import Register from './Pages/Register';
import Reset from './Pages/Reset';
import Rout from "./Componant/Privateroute/Route";
import FoodPage from './Itemspage/FoodPage';
import Foote from './Componant/Footer/Foote';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Dinneoutpge from './Pages/Dinneoutpge';
function App() {
  const loca=useLocation();
  const pagename=['/shop','/fooddelivery'];
  const show=pagename.some((path)=>loca.pathname.startsWith(path));
  return (
    <>
    {show && <Nav></Nav>}
    <Routes>
         {/* <Route path='/' element={<Rout><Home></Home></Rout>}></Route> */}
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/shop' element={<Shop/>}></Route>
         {/* <Route path='/cart' element={<Cart/>}></Route> */}
         <Route path='/login' element={<Logout/>}></Route>
         <Route path='/forgot' element={<Forgotpage/>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
         <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
         <Route path='/dinneout' element={<Dinneoutpge></Dinneoutpge>}></Route>
         <Route path='/fooddelivery' element={<Shop></Shop>}></Route>
         <Route path='/:foodname' element={<FoodPage></FoodPage>}></Route>
         <Route path='/reset/:token' element={<Reset/>}></Route>
    </Routes>
    {show && <Foote></Foote>}
    </>
  )
}

export default App
