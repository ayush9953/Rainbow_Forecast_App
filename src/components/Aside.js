import React from 'react';
import {useSelector} from 'react-redux';



function Aside(){
  const data=useSelector(state=>state);

  console.log(data.data);
    const day=["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
    
    return(
      data.data!==null && <aside>
        
        <p>{day[new Date().getDay()]}   {new Date().getDay()},{months[new Date().getMonth()]} {new Date().getFullYear()}</p>
        <h4>WEATHER DETAILS</h4><br></br>
        <h5>Wind Speed:  {data.data.current.wind_speed}</h5>
        <h5>Wind Direction:  {data.data.current.wind_dir}</h5>
        <h5>Humidity:  {data.data.current.humidity}</h5>
        <h5>visibility:  {data.data.current.visibility}</h5>
      
      </aside>

    )
}
export default Aside;