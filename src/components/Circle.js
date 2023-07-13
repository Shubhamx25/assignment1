import { useState, useEffect } from "react"

const Circle = ({handleClick, defaultColor}) => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(defaultColor);
  const colors = ['lightblue','lightgreen','lightgrey','blueviolet','greenyellow'];

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
    setColor(colors[Math.floor(Math.random() * 4)]);
  }

  useEffect(() => {
    setCounter(0);
  }, [handleClick]);

  
 

  return (
    <div className="circle-container">
        <div className="circle" style={{backgroundColor:color}}>
            <p>{counter}</p>
        </div>
        <div className="color">
              <p>Color: {color}</p>
         </div>
        <div className="circle-buttons">
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={e => handleClick(color)}>Duplicate</button>
        </div>       
    </div>
  )
}

export default Circle