import React from 'react';
import "../index.css";
import {Routes, Route} from "react-router";

// import all components
import DashBoard from './DashBoard';
import Products from './Products';
import Sales from "./Sales";
import People from './People';
import Setting from './Setting';


function Main(width, setWidth) {
    return (
        <div className='main_element'>
            <Routes>
                <Route path='/' element={<DashBoard width={width}></DashBoard>}></Route>
                <Route path='/Products' element={<Products width={width}></Products>}></Route>
                <Route path='/Sales' element={<Sales width={width}></Sales>}></Route>
                <Route path='/People' element={<People width={width}></People>}></Route>
                <Route path='/Setting' element={<Setting width={width}></Setting>}></Route>
            </Routes>
        </div>
    );
}

export default Main;

