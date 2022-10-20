import React from "react";

import {useSelector} from 'react-redux';
import { svgDisplayer } from "../assets/AllSVG";
function Main(){
  const data=useSelector(state=>state);
    return(
      <>
      {data.data===null && <h1>Search Your City know What is in The Air 😄 </h1>}
      {data.data!==null && <main> 
    <p>{data.data.current.temperature}<sup>o</sup>C</p>
      
      <div>
      <h1>{data.data.location.name}</h1>
      <h2>{data.data.current.observation_time}</h2>
      </div>
      <div>
      {svgDisplayer(data.data.current.weather_code)}
      <h3>{data.data.current.weather_descriptions[0]}</h3>
      
      </div>

    </main>}
    
    </>
       
    )
}
export default Main;