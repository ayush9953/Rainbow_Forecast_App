import React, { useState } from 'react'; 
import { useDispatch} from 'react-redux';   
import { getDataSuccess } from '../reduxStore/slice';



function NavBar(){
 
  const [cityName,setCity]=useState('');
  const dispatch = useDispatch();	
  const fetcher=async(city)=>{
    try {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=8bd8e08934010010ce87ac7afe761d71&query=${city}`)
      const data = await response.json()
      console.log(data);
      dispatch(getDataSuccess(data))
      
    } catch (error) {
     console.log("error");
    }   
  }
  function onChangeHandler(e){
    e.preventDefault();
    setCity(e.target.value);
  }
    return(
  <>
        
  <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
  <p><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-rainbow" viewBox="0 0 16 16">
  <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7zm0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5zm0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1z"/>
</svg></p>
    <p className="navbar-brand">Rainbow Forecast</p>
    <div className="d-flex" >
      <input id='city' className="form-control me-2" type="text" placeholder="Search" onChange={onChangeHandler} onKeyUp={(e)=>{if(e.keyCode===13)fetcher(cityName)}} />
      <button className="btn btn-success"  onClick={()=>fetcher(cityName)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
    </div>
  </div>
</nav>
        </>
    )
}
export default NavBar;
