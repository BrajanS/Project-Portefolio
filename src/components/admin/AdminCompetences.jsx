import React, {useEffect, useState} from 'react'
import '../../index.css'
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { enqueueSnackbar } from 'notistack';

const URL = "https://project-portefolio-backend.onrender.com"
export default function AdminCompetences() {
  const [competences,setCompetences] = useState([])
  const [compVal,setCompVal] = useState()
  const [bool,setBool] = useState(false)

  async function fetchCompetences(){
    const response = await fetch(`${URL}/competences`)
    const data = await response.json()
    // console.log(data);
    setCompetences(data)
  }

  useEffect(()=>{
    fetchCompetences()
  },[])

  async function handleDel(id){
    console.log(id);
    const response = await fetch(`${URL}/delCompetences/${id}`,{
      method: 'DELETE'
    })
    if(response.ok){
      const data = await response.json()
      console.log(data);
      enqueueSnackbar(`La compétence ${data.value} vien d'être supprimée.`,{
        variant: 'error',
        autoHideDuration: 1200
      })
      fetchCompetences()
    }
  }

  async function handleSave(){
    console.log(compVal);
    if(compVal !== ""){
      const saveData = await fetch(`${URL}/newCompetences`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            value: `${compVal}`
          }
        )
      })
      if(saveData.ok){
        const data = await saveData.json()
        console.log(data);
        enqueueSnackbar(`La compétence ${data.value} à été ajouter.`,{
          variant: "success",
          autoHideDuration: 1200
        })
        fetchCompetences()
        setCompVal('')
      }
    }
  }
  function changingCompVal(e){
    setCompVal(e.target.value)
  }

  function switchAdd(){
    setBool(!bool)
    if(bool === false){
      setCompVal('')
    }
  }

  return (
    <div className='w-[400px] flex flex-col gap-2 p-[5px] rounded-[5px] bg-[#eeeeee90]' style={{border:'2px solid black',boxShadow:"5px 5px 10px 0px #000000BB"}}>
        <h2 className='text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>Gérer les Compétences</h2>
        <button id='addCompBtn' onClick={()=>{switchAdd()}}>
          {!bool && <MdAddBox size={24} color='blue'/>}
          {bool && <CgRemoveR size={22} color='red'/>}
        </button>
        {bool && <div className='flex gap-2'>    
            <input value={compVal} className='bg-[#cccccc] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Nouvelle compétence' onChange={(e)=> changingCompVal(e)} />
            <button onClick={handleSave}>
              <IoSave size={24} color='green'/>
            </button>
          </div>}
        {competences && competences.map((item,key) => <div key={key} className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <p>{item.value}</p>
              <p className='text-[14px]'>{item._id}</p> 
              <button onClick={()=>{handleDel(item._id)}} className='bg-red-500 px-3 rounded-[15px]'><MdDeleteForever size={24} color='white'/></button>
            </div>
            <div className='w-[100%] bg-[black] h-[2px]'/>
          </div>)}
    </div>
  )
}