import React from 'react'
import OutdoorAdv from '../components/portfolio/OutdoorAdv'
import Meteo from '../components/portfolio/Meteo'

export default function Portfolio() {
  return (
    <div className='flex gap-52 mx-5 mt-[15px]'>
      <OutdoorAdv/>
      <Meteo/>
    </div>
  )
}
