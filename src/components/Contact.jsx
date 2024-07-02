import React from 'react'
import { useState, useEffect } from 'react'

const URL = "http://localhost:4000/contact"

export default function Contact() {
    const [contact,setContact] = useState()

    async function getContact() {
        const reponse = await fetch(URL)
        const data = await reponse.json()
        setContact(data[0])
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