import React, { useEffect, useState } from 'react'

const URL = "https://project-portefolio-backend.onrender.com"
export default function Langues() {
    const [langues,setLangues] = useState([])

    async function fetchLangues(){
        const obtainLangues = await fetch(`${URL}/langues`)
        const data = await obtainLangues.json()
        console.log("Langue data: ",data);
        setLangues(data)
        console.log("Fetched langue: ",langues);
    }

    useEffect(()=>{
        fetchLangues()
    },[])
  return (
    <div>
        <div>
          {langues && <div className='flex flex-col'>
            {langues.map((item,key)=> <div key={key} className='flex'>
              <div className="flex flex-col w-[120px]">
                <span>{item.langName}</span>
              </div>
              <div className="flex flex-col">
                <span>{item.langLevel}</span>
              </div>
            </div>)}  
          </div>}
        </div>
    </div>
  )
}