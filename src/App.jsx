import { useState } from 'react'
import Nav from "./component/Nav"
import Card from "./component/Card"
import './App.css'
import Cardlist from './component/Cardlist/Cardlist'
import Coustomroutes from "../Routes/Customroutes"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
      <div className='main_container'>
      <Coustomroutes/>
      
       
        

      </div>
    </>
  )
}

export default App
