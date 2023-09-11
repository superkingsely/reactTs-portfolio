import React, { useState } from "react";

const Main = () => {
  const [count,setCount]=useState(0)
  const handleclick=()=>{
    setCount(prevCount=>prevCount+1)
    console.log(count)
  }
  return (
    <main style={{ backgroundColor: "purple", minHeight: "80vh" }}>
      {/* container */}
      <div className="container" style={{border:'2px solid'}}>
        {/* count display */}
        <div className="display" style={{border:'2px solid red'}}>
          <h1>{count}</h1>
        </div>
        {/* action button */}
        <div className="action">
          <button
          onClick={()=>{setCount(count-1)}}
          >decrement</button>
          <button
            onClick={handleclick}
          >increment</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
