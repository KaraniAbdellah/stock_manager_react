import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import "./index.css";
import NavBar from './Components/NavBar';
import {Routes, Route} from "react-router-dom";



function App() {
  const [width, setWidth] = useState(false);
  return (
    <div className="App">
        <Routes>
          <Route path="*" element={
            <>
              <Header></Header>
              <NavBar />
              <Main width={width} setWidth={setWidth}></Main>
            </>
          }></Route>
        </Routes>
    </div>
  );
}

export default App;
