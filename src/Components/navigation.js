import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MyFunction from "./FunctionCompo";
import EventHandle from "./EventHandling";
import CounterReducer from "./Reducer";
import { Counter } from "./Stake";
import logo from './../Assets/Images/hello.webp';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Navigation(){
    return(
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-success">
                    <Link to='/' className="navbar-brand fs-2 text-white fw-bold" style={{letterSpacing:2, fontFamily:'monospace'}}> <img src={logo} alt="" className=" img-fluid" style={{width:40}} /> Vives Cleaning Services</Link>
                    <ul className=" navbar nav ms-auto fs-5 nav-underline">
                        <li className="nav-item"><Link to='/' className="nav-link text-white nav-underline active">Home</Link></li>
                        <li className="nav-item"><Link to='/products' className="nav-link text-white">About</Link></li>
                        <li className="nav-item"><Link to='/contactus' className="nav-link text-white">Services</Link></li>
                        <li className="nav-item"><Link to='/login' className="nav-link text-white">Testimonals</Link></li>
                        <li className="nav-item"><Link to='/login' className="nav-link text-white">Gallery</Link></li>
                        <li className="nav-item"><Link to='/login' className="nav-link text-white">Contact</Link></li>
                        <li className=" text-white me-2"><FaEnvelope/></li>
                        <li className=" text-white me-5"><FaPhone /></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<MyFunction/>}></Route>
                    <Route path='/products' element={<CounterReducer/>}></Route>
                    <Route path='/contactus' element={<Counter/>}></Route>
                    <Route path='/login' element={<EventHandle />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}