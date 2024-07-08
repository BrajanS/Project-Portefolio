import React, {useState} from 'react'
import '../../index.css'
import homeOA from '../../images/OA/OA-home.png'
import projectsOA from '../../images/OA/OA-projects.png'
import toursOA from '../../images/OA/OA-Tours.png'

export default function OutdoorAdv() {
  const arrows = ["<",">"]
  let [image,setImage] = useState(homeOA)
  let [counter,setCounter] = useState(0)

  function button1Clicked(){
    setCounter(counter-1)
    console.log("Counter:",counter);
    if(counter<0){
      setCounter(2)
      setImage(toursOA)
    }
    else if(counter===0){setImage(homeOA)}
    else if(counter===1){setImage(projectsOA)}
    else if(counter===2){setImage(toursOA)}
  }
  function button2Clicked(){
    setCounter(counter+1)
    console.log("Counter:",counter);
    if(counter>2){
      setCounter(0)
      setImage(homeOA)
    }
    else if(counter===0){setImage(homeOA)}
    else if(counter===1){setImage(projectsOA)}
    else if(counter===2){setImage(toursOA)}
  }

  return (
    <div className='flex flex-col w-fit'>
        <div className='relative'>
          <div className='w-[500px] h-[230px] rounded-[10px] flex' style={{border:"1px solid"}}>
            <img className='rounded-[10px]' src={image} alt="Project n1" />
          </div>
          <button className={`arrows 
            absolute top-[37.5%] left-1`}
            onClick={()=>button1Clicked()}
          >{arrows[0]}</button>
          <button className={`arrows
            absolute top-[37.5%] right-1`}
            onClick={()=>button2Clicked()}
          >{arrows[1]}</button>
        </div>
        <div className='m-auto flex flex-col w-fit'>
          <h2 className='ptH2'>Project Outdoor adventure:</h2>
          <a className='ptA text-[blue] underline' href='https://github.com/BrajanS/Project-OA'>Ici pour voir le code</a>
          <a className='ptA text-[blue] underline' href='https://brajans.github.io/Project-OA/index.html'>Ici pour visité le site</a>
        </div>
    </div>
  )
}
