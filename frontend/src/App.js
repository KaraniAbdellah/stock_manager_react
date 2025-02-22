import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import "./index.css";
import NavBar from './Components/NavBar';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import SignIn from './Components/Sign_In';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="*" element={
            <>
              <Header></Header>
              <NavBar />
              <Main></Main>
            </>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sign_in' element={<SignIn></SignIn>}></Route>
        </Routes>
    </div>
  );
}

export default App;
