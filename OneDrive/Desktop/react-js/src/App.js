import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';

function App() {
  const [name, setName]=useState('master')
  // const h1='okay js'
  const [userName, setUserName]=useState('house')

  const welcome="welcome to my react app"

  const welcom='published my me'

  const teeth= 'finding a better way out of the great vinsfracture to meet the needs and demand of the warehoiuse stramgling a good wat out odf the light'
  
  return (
    <div className="App" style={{backgroundColor:'blue',minHeight:'100vh'}}>
      <Nav okay={welcome} />
      <Main greet={teeth}/>
      <Footer just={welcom}/>
    </div>
  );
}





export default App;
