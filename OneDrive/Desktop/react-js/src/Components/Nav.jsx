import React from 'react'

const Nav = (prop) => {
  console.log(prop)
  return (
    <nav style={{backgroundColor:'red',minHeight:'10vh'}}>
      <h1><i>
        {prop.okay}
        </i>
        </h1>
    </nav>
  )
}

export default Nav
