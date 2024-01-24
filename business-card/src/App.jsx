import { useState } from 'react'
import './App.css'

function App() {

  const info = {
    name:"Lokeshwar",
    desc:"Event-Planer and Marketing manager",
    interest:["Ionic","OPen Source","App Dev"],
    linkedIn:"www.linkedIn.com",
    twitter:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }

  return (
    <div>
       <Card info={info}></Card>
    </div>
  )
}

function Card(props){
  const info = props.info;
  return (
    <div className='card'>
      <h1>{info.name}</h1>
      <p>{info.desc}</p>
      <h1>Interests</h1>Ability to pass in props to the Component
      <ul>
         {info.interest.map(function(i){
          return <li>
            {i}
          </li>
         })}
      </ul>
     <div className='links'>
        <a href={info.linkedIn} ><button>LinkedIn</button></a>
        <a href={info.twitter}><button>Twitter</button></a>
     </div>
    </div>
  )
}

export default App
