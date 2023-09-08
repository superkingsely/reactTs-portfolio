import React from 'react'

const Main = (prop) => {

  const listofname=['ade','neyo','brazil']
  const listofobjects=[
    {
      id:1,
      name:'Aqua',
      form:'water',
      volume:'22 litres',
      shape:'circular'
    },
    {
      id:0,
      name:'Aqua',
      form:'water',
      volume:'22 litres',
      shape:'circular'
    },
    {
      id:1,
      name:'Nestle',
      form:'water',
      volume:'5 litres',
      shape:'rectangle'
    },
    {
      id:2,
      name:'Cascade',
      form:'water',
      volume:'10 litres',
      shape:'square'
    }
    
  ]

  

  return (
// {/* <main style={{backgroundColor:'gray',minHeight:'80vh'}}>

// <h2>{prop.greet}</h2>

      
//       </main> */}
      <div>
        <ul>
          {

          }
        </ul>

        <h1>manual input</h1>
        <ul>
          <li>{listofname[0]}</li>
          <li>{listofname[1]}</li>
          <li>{listofname[2]}</li>
        </ul>
        <h1>order list</h1>
        <ol>
          <li>{listofname[0]}</li>
          <li>{listofname[1]}</li>
          <li>{listofname[2]}</li>
        </ol>

{/* Thhe array method is better than others for producing large data */}

        <h1>array methods</h1>
        <ul>
          {
            listofname.map(param=>{
              console.log(param)
              return(
                <li key={param}>{param}</li>
              )
            })
          }
        </ul>

          <h1>comprehensive list</h1>
          <ul>
            {
              listofobjects.map(object=>{
                return(
                <li key={object.id}> {object.form} ,{object.name}, {object.shape}, {object.volume}</li>
              )})
            }
          </ul>
      </div>

  )
}

export default Main
