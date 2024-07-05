import React, {useState, useEffect} from 'react'

const URL = "https://project-portefolio-backend.onrender.com"

export default function CentreInteret() {
  const [ci,setCi] = useState([])
  
  async function readCI(){
    const obtainCI = await fetch(`${URL}/ci`)
    const data = await obtainCI.json()
    setCi(data)
  }

  useEffect(()=>{
    readCI()
  },[])
  return (
    <div className='flex flex-col items-start'>
      {ci.map((item,key)=><span key={key}>
        {item.interet}
      </span>)}
    </div>
  )
}