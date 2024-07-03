import React, { useEffect, useState } from "react";
import "../../index.css";
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { enqueueSnackbar } from "notistack";

const URL = "http://localhost:4000";
export default function AdminFormation() {
  const [formation,setFormation] = useState([])
  const [formationVal1,setFormationVal1] = useState()
  const [formationVal2,setFormationVal2] = useState()
  const [formationVal3,setFormationVal3] = useState()
  const [bool,setBool] = useState(false)
  const [hoveredIndex,setHoveredIndex] = useState(null)

  async function readFormation(){
    const obtainFormation = await fetch(`${URL}/formation`)
    const data = await obtainFormation.json()
    setFormation(data)
  }

  useEffect(()=>{
    readFormation()
  },[])

  function switchClick(){
    setBool(!bool)
    if(bool === false){ 
        setFormationVal1('')
        setFormationVal2('')
        setFormationVal3('')
    }
  }

  const handleHover = (index)=>{ setHoveredIndex(index); }
  const handleMouseLeave = ()=>{ setHoveredIndex(null); }
  return (
    <div className='w-[400px] flex flex-col gap-2 p-[5px] rounded-[5px] bg-[#eeeeee90] mb-5' style={{border:'2px solid black'}}>
      <h2 className='text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>Gérer les Formations</h2>
      <button id="addCompBtn" onClick={() => { switchClick(); }}>
        {!bool && <MdAddBox size={24} color="blue" />}
        {bool && (
          <div className="flex gap-2">
            <CgRemoveR size={22} color="red" />
            <h2>Ajouter une Expérience Professionnelle:</h2>
          </div>
        )}
      </button>
    </div>
  )
}
