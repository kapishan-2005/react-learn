import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './navbar'
import Footer from "./footer"
import Card from "./card"

function App() {

  return (
<>
     <Card name="html" price="LKR90" show={true}/>
     <Card  name="css" price="LKR50" show={true}/>
     <Card name="js" price="LKR200" show={true}/>

</>
  );
}



export default App
