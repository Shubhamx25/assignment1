import Circle from "./Circle"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "../redux/slice";

const Circles = () => {
  const noOfCircle = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [prevCircleColor,setPrevCircleColor] = useState('yellow');


  const handleClick = (color) => {
    if(noOfCircle < 10){
        setPrevCircleColor(color)
        dispatch(increment());
    }else{
        alert('Cannot create more than 10 counters');
    }
    
  }
  
  let displayCircle =[];
  for(let i = 1; i <= noOfCircle;i++){
        displayCircle.push(<Circle key={i} handleClick={handleClick} defaultColor={prevCircleColor}  />) 
  }

  return (
    <div className="circles-container"> 
       {displayCircle}
    </div>
  )
}

export default Circles