import React, { useState } from 'react'
import AdminContact from '../components/admin/AdminContact'
import AdminCompetences from '../components/admin/AdminCompetences'
import AdminLangues from '../components/admin/AdminLangues'
import Login from './Login'

export default function Admin() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [isLogged,setIsLogged] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
    if(username=== "admin" && password === "admin"){
      setIsLogged(true)
    }else{
      alert('Login incorrecte')
    }
  }
  if(!isLogged){
    return (
      <Login username={username} password={password} setUserName={(e)=>setUsername(e.target.value)} setPassword={(e)=>setPassword(e.target.value)} handleSubmit={handleSubmit}/>
    )
  }
  else{
    return (
      <div className='ml-[7px] flex gap-5'>
        <div>
          <AdminContact/>
          <AdminCompetences/>
        </div>
        <div>
          <AdminLangues/>
        </div>
      </div>
    )
  }
}