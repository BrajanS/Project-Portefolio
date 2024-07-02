import React from 'react'
import {useState, useEffect} from 'react'

const URL = "http://localhost:4000/competences"

export default function Competences() {
    const [competences,setCompetences] = useState()

    async function getCompetences(){
        const reponse = await fetch(URL)
        const data = await reponse.json()
        console.log("Data competences: ",data);
        setCompetences(data)
    }

    useEffect(()=>{
        getCompetences()
    },[])
   
  return (
    <div>
        {competences && <div className='flex flex-col text-start'>
            {competences.map((item, index)=>{
                return <span key={index}>{item.value}</span>
                // console.log("Where am i: ",item.value);
            })}
        </div>}
    </div>
  )
}
