import React, { useState } from 'react'
import AdminContact from '../components/admin/AdminContact'
import AdminCompetences from '../components/admin/AdminCompetences'
import AdminLangues from '../components/admin/AdminLangues'
import Login from './Login'
import AdminCentreInterets from '../components/admin/AdminCentreInterets'
import AdminExperiencePro from '../components/admin/AdminExperiencePro'
import AdminFormation from '../components/admin/AdminFormation'

export default function Admin() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [isLogged,setIsLogged] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
    if(username=== localStorage.getItem("USERNAME") && password === localStorage.getItem("PASSWORD")){
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
      <div className='mx-[7px] mb-2 flex justify-around'>
        <div>
          <AdminContact/>
          <AdminCompetences/>
        </div>
        <div>
          <AdminLangues/>
          <AdminCentreInterets/>
        </div>
        <div>
          <AdminExperiencePro/>
          <AdminFormation/>
        </div>
      </div>
    )
  }
}