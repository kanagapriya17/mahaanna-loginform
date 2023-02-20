import React from 'react';
import { useNavigate } from 'react-router-dom';






function Button(){
    const navigate=useNavigate();

    function clickme(){
        alert("you clicked me");
      }
      
  function handleClick(){
    navigate("/")
  }

    

return(
  

  <div>
  <button type="button" className="buttoncreate" onClick={clickme}>
    <h1>BUTTON</h1> 
  </button>
  <div>
  <button className="buttons" onClick={handleClick}>go to Home login page</button>
  </div>
  </div>
 


  


);

}
  
export default Button;
