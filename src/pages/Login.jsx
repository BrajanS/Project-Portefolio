import React from 'react'

export default function Login({username,password,setUserName,setPassword,handleSubmit}) {    
  return (
    <form className='flex flex-col gap-3 w-screen h-[70vh] justify-center items-center'>
        <h2 className='text-[24px]'>Connexion</h2>
        <input onChange={setUserName} className='border-solid border-[1px] rounded-[5px] px-[5px] border-[black]' type="text" placeholder="Saisir le nom d'utilisateur"/>
        <input onChange={setPassword} className='border-solid border-[1px] rounded-[5px] px-[5px] border-[black]' type="password" placeholder="Saisir le mot de passe"/>
        <button className='bg-[#2475df] py-[5px] px-5 border-solid border-[2px] border-[black] w-[260px] rounded-[15px]' onClick={handleSubmit}>Se connecter</button>
    </form>
  )
}