import React, { useEffect, useState } from 'react'

const URL = "https://project-portefolio-backend.onrender.com"
export default function AdminContact() {
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')
    const [adresse,setAdresse] = useState('')

    async function fetchContact(){
        const response = await fetch(`${URL}/contact`)
        const data = await response.json()
        // console.log("Admin Contact: ",data);
        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
    }  
    useEffect(()=>{
        fetchContact()
    },[])

    function submit(clicked){
        clicked.preventDefault()
        fetch(`${URL}/contact`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({nom,prenom,tel,email,adresse})
        })
        .then(iz => iz.json())
        .then(data => console.log(data))
    }
  return (
    <form onSubmit={submit} className='flex flex-col w-[400px] mb-5 gap-2 p-[5px] rounded-[5px] bg-[#eeeeee90]' style={{border:'2px solid black',boxShadow:"5px 5px 10px 0px #000000BB"}}>
        <h2 className='text-[30px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>CONTACT</h2>
        <label htmlFor="ac1">Tel:</label>
        <input className='bg-[#DDDDDD] pl-[5px]' id='ac1' style={{border: "1px solid black"}} onChange={(e)=>{setTel(e.target.value)}} value={tel} type="text" />
        <label htmlFor="ac2">E-mail:</label>
        <input className='bg-[#DDDDDD] pl-[5px]' id='ac2' style={{border: "1px solid black"}} onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" />
        <label htmlFor="ac3">Adresse:</label>
        <input className='bg-[#DDDDDD] pl-[5px]' id='ac3' style={{border: "1px solid black"}} onChange={(e)=>{setAdresse(e.target.value)}} value={adresse} type="text" />
        <button className='bg-[#5829a3] rounded-[15px] text-[white]' type='submit'>Validate</button>
    </form>
  )
}