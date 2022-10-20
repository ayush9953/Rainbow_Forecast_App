import React from "react";
import './assets/styles.css';
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Main from "./components/Main";
function App(){
  return(
    <div className="background">
    <NavBar/>
    <Main/>
    <Aside/>
    </div>
  )
}
export default App;