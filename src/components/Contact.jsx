import React from 'react'
import { useState, useEffect } from 'react'

const URL = "https://project-portefolio-backend.onrender.com"

export default function Contact() {
    const [contact,setContact] = useState()

    async function getContact() {
        try {
            const reponse = await fetch(`${URL}/contact`)
            const data = await reponse.json()
            setContact(data[0])
        } catch (error) {
            console.log(error.message);
        }
        
    }

    useEffect(()=>{
       getContact() 
    },[])

  return (
    <div>
        {contact && <div className='flex'>
            <div className='w-[120px]'>
                <h2>Adresse: </h2>
                <h2>Email:  </h2>
                <h2>Tel:    </h2>
            </div>
            <div>
                <h2>{contact.adresse}</h2>
                <h2>{contact.email} </h2>
                <h2>{contact.tel}   </h2>
            </div>
            
        </div>}
    </div>
  )
}