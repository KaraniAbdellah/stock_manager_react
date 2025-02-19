import React from 'react';
import "../index.css";
import {Routes, Route} from "react-router";

// import all components
import NavBar from './NavBar';
import DashBoard from './DashBoard';
import Products from './Products'
import Adj from './Adj'
import Quat from "./Quat"
import Purch from './Purch'
import Sales from "./Sales"
import Expen from './Expen'
import Reports from './Reports'
import People from './People'
import Setting from './Setting'
import Login from './Login'



function Main() {
    return (
        <div className='flex justify-between items-start'>
            <NavBar />
            <Routes>
                <Route path='/' element={<DashBoard></DashBoard>}></Route>
                <Route path='/Products' element={<Products></Products>}></Route>
                <Route path='/Adj' element={<Adj></Adj>}></Route>
                <Route path='/Quat' element={<Quat></Quat>}></Route>
                <Route path='/Purch' element={<Purch></Purch>}></Route>
                <Route path='/Sales' element={<Sales></Sales>}></Route>
                <Route path='/Expen' element={<Expen></Expen>}></Route>
                <Route path='/Reports' element={<Reports></Reports>}></Route>
                <Route path='/People' element={<People></People>}></Route>
                <Route path='/Setting' element={<Setting></Setting>}></Route>
                <Route path='/Login' element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default Main;

