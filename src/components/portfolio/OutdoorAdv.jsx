import React from 'react'
import OA from '../../images/project-OA.png'

export default function OutdoorAdv() {
  return (
    <div className='flex flex-col'>
        <img className='w-[500px] rounded-[10px]' src={OA} alt="Project n1" />
        <h2>Project Outdoor adventure</h2>
        <a className='text-[blue] underline' href='https://github.com/BrajanS/Project-OA'>Ici pour voir le code</a>
        <a className='text-[blue] underline' href='https://brajans.github.io/Project-OA/index.html'>Ici pour visité le site</a>
    </div>
  )
}
