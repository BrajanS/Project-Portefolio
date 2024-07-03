import React, { useEffect, useState } from "react";
import "../../index.css";
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { enqueueSnackbar } from "notistack";

const URL = "http://localhost:4000";
export default function AdminExperiencePro() {
  const [expPro, setExpPro] = useState([]);
  const [expProVal1,setExpProVal1] = useState()
  const [expProVal2,setExpProVal2] = useState()
  const [expProVal3,setExpProVal3] = useState()
  const [expProVal4,setExpProVal4] = useState()
  const [bool,setBool] = useState(false)
  const [hoveredIndex,setHoveredIndex] = useState(null)

  async function readExpPro() {
    const obtainExpPro = (await fetch(`${URL}/expPro`))
    const data = await obtainExpPro.json()
    setExpPro(data)
  }

  useEffect(() => {
    readExpPro()
  }, []);

  async function handleDel(id){
    // console.log(id);
    const response = await fetch(`${URL}/delExpPro/${id}`,{
      method: 'DELETE'
    })
    if(response.ok){
      const data = await response.json()
    //   console.log(data);
      enqueueSnackbar(`L'expérience professionel "${data.value}" vien d'être supprimée.`,{
        variant: 'error',
        autoHideDuration: 1200
      })
      readExpPro()
    }
  }

  function changingExpProVal1(e){ setExpProVal1(e.target.value) }
  function changingExpProVal2(e){ setExpProVal2(e.target.value) }
  function changingExpProVal3(e){ setExpProVal3(e.target.value) }
  function changingExpProVal4(e){ setExpProVal4(e.target.value) }

  async function handleSave(){
    if(expProVal1 !=="" && expProVal2 !=="" && expProVal3 !=="" && expProVal4 !==""){
      const saveData = await fetch(`${URL}/newExpPro`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            Annee:`${expProVal1}`,
            Entreprise: `${expProVal2}`,
            Poste:`${expProVal3}`,
            Mission:`${expProVal4}`
          }
        )
      })
      if(saveData.ok){
        const data = await saveData.json()
        // console.log(data);
        enqueueSnackbar(`L'expérience professionnel "${data.value}" à été ajouter.`,{
          variant: "success",
          autoHideDuration: 1200
        })
        readExpPro()
        setExpProVal1('')
        setExpProVal2('')
        setExpProVal3('')
        setExpProVal4('')
      }
    }
  }

  function switchClick(){
    setBool(!bool)
    if(bool === false){ 
        setExpProVal1('')
        setExpProVal2('')
        setExpProVal3('')
        setExpProVal4('')
    }
  }

  const handleHover = (index)=>{ setHoveredIndex(index); }
  const handleMouseLeave = ()=>{ setHoveredIndex(null); }

  return (<div className='w-[400px] flex flex-col gap-2 p-[5px] rounded-[5px] bg-[#eeeeee90]' style={{border:'2px solid black'}}>
    <h2 className='text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>Gérer les Expériences Pro</h2>
    <button id='addCompBtn' onClick={()=>{switchClick()}}>
          {!bool && <MdAddBox size={24} color='blue'/>}
          {bool && <div className="flex gap-2">
            <CgRemoveR size={22} color='red'/>
            <h2>Ajouter une Expérience Professionnelle:</h2>
          </div>}
        </button>
        {bool && <div className='flex gap-2'>
            <div className="flex flex-col gap-1">
                <div className="flex w-[350px] gap-1">
                    <input value={expProVal1} className='bg-[#cccccc] w-[40%] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Années' onChange={(e)=> changingExpProVal1(e)} />
                    <input value={expProVal2} className='bg-[#cccccc] w-[60%] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Entreprise' onChange={(e)=> changingExpProVal2(e)} />
                </div>
                <input value={expProVal3} className='bg-[#cccccc] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Poste' onChange={(e)=> changingExpProVal3(e)} />
                <input value={expProVal4} className='bg-[#cccccc] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Mission' onChange={(e)=> changingExpProVal4(e)} />
            </div>
            <button onClick={handleSave}>
              <IoSave size={24} color='green'/>
            </button>
          </div>}
    <div>{expPro && expPro.map((item,key) => <div key={key} className='flex flex-col gap-2'>
            <div key={key} className='flex justify-between items-center mt-[7px]'>
              <p>{item.Annee}</p>
              <p className='text-[14px]'>{item.Entreprise}</p>
              <div className="hover-container relative" onMouseEnter={() => handleHover(key)} onMouseLeave={handleMouseLeave}>
                <BsFillInfoCircleFill key={key} size={20} color="blue"/>
                {hoveredIndex === key && (<div className="flex flex-col absolute left-[-403px] top-[25px]
                w-[400px] bg-[#333333] text-[white] p-[5px] rounded-[10px] text-center
                " style={{border:'1px solid black'}}>
                    <label className="font-bold text-center text-[25px] underline" htmlFor="idPoste">Poste:</label>
                    <span className="ml-[10px]" id="idPoste">{item.Poste}</span>
                    <label className="font-bold text-center text-[25px] underline" htmlFor="idMission">Mission:</label>
                    <span className="ml-[10px]" id="idMission">{item.Mission}</span>
                </div>)}
              </div> 
              <button onClick={()=>{handleDel(item._id)}} className='bg-red-500 px-3 rounded-[15px]'><MdDeleteForever size={24} color='white'/></button>
            </div>
            <div className='w-[100%] bg-[black] h-[2px]'/>
          </div>)}</div>
  </div>);
}
