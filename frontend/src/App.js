import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import "./index.css";
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <NavBar />
        <Main></Main>
    </div>
  );
}

export default App;
