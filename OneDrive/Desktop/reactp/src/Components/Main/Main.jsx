import React, { useState } from 'react'
import './Main.css'

const Main = () => {
    const [Increment,setIncrement]=useState ('Uprgrade')
    const [count, setCount]= useState(0)
    const [Decrement, setDecrement]= useState ('Reduce')

    const handleIncrement= ()=>{
        console.log('goat')
        setIncrement('wait')
        setCount(count=>count+1)
    }
    const handleDecrement= ()=>{
        console.log('fish')
        setDecrement('hold')
        setCount(count=>count-1)
    }
    const handleReset= ()=>{
        setCount (0)
    }
    
  return (
    <main>
        <div className="increment-app">
            <span className="start" onClick={handleIncrement}>{count}</span>
            <div className="buttons">
                <button className="decrement" onClick={handleDecrement}>{Decrement}</button>
                <button className="increment"
                onClick={handleIncrement}
                >{
                    Increment
                }</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
        
    </main>
  )
}

export default Main