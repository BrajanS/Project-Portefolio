import React, {useState} from 'react'
import '../../index.css'
import homeOA from '../../images/OA/OA-home.png'
import projectsOA from '../../images/OA/OA-projects.png'
import toursOA from '../../images/OA/OA-Tours.png'
import { MdOutlineWebAsset } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
// Technos
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

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
        <section className='flex justify-center'>
          <div className='flex flex-col w-fit'>
            <h2 className='ptH2'>Project Outdoor adventure:</h2>
            <div>
              <h3>Technologies utilisées:</h3>
              <div className='flex justify-between'>
                <div className='flex gap-1'>
                  <FaHtml5 size={24} color='F56E16'/>
                  <span>HTML</span>
                </div>
                <div className='flex gap-1'>
                  <FaCss3Alt color='346DFA' size={24}/>
                  <span>CSS</span>
                </div>
                <div className='flex gap-1'>
                  <RiTailwindCssFill size={24} color='aqua'/>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className='flex gap-1'>
              <FaCode color='black' size={24}/>
              <a className='ptA text-[blue] underline' href='https://github.com/BrajanS/Project-OA'>Ici pour voir le code</a>
            </div>
            <div className='flex gap-1'>
              <MdOutlineWebAsset color='black' size={24}/>
              <a className='ptA text-[blue] underline' href='https://brajans.github.io/Project-OA/index.html'>Ici pour visité le site</a>
            </div>
          </div>
        </section>
    </div>
  )
}
