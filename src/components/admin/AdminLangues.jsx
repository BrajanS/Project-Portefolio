import React, {useEffect, useState} from 'react'
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";


const URL = "https://project-portefolio-backend.onrender.com"
export default function AdminLangues() {
    const [langue,setLangue] = useState([])
    const [langVal1,setLangVal1] = useState()
    const [langVal2,setLangVal2] = useState()
    const [bool,setBool] = useState(false)

    async function readLangues(){
        const readerLang = await fetch(`${URL}/langues`)
        const data = await readerLang.json()
        // console.log("Admin langues:",data);
        setLangue(data)
    }

    useEffect(()=>{
        readLangues()
    },[])

    async function delButton(id){
        console.log("Clicked");
        const deleteFetch = await fetch(`${URL}/delLangues/${id}`,{
            method: 'DELETE'
        })
        if(deleteFetch.ok){
            readLangues()
        }
    }

    async function handleSave(){
        if(langVal1 !== "" && langVal2 !== ""){
          const saveData = await fetch(`${URL}/newLangues`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                langName: `${langVal1}`,
                langLevel: `${langVal2}`
              }
            )
          })
          if(saveData.ok){
            readLangues()
            setLangVal1('')
            setLangVal2('')
          }
        }
      }

    function changingLangVal1(e){setLangVal1(e.target.value)}
    function changingLangVal2(e){setLangVal2(e.target.value)}
    
    function switchAdd(){
        setBool(!bool)
        if(bool === false){
          setLangVal1('')
          setLangVal2('')
        }
    }

  return (
    <div className='w-[400px] p-[5px] rounded-[5px] bg-[#eeeeee90] mb-5' style={{border:'2px solid black'}}>
        <h2 className='mb-2 text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>Gérer les Langues</h2>
        <button id='addCompBtn' onClick={()=>{switchAdd()}}>
          {!bool && <MdAddBox size={24} color='blue'/>}
          {bool && <CgRemoveR size={22} color='red'/>}
        </button>
        {bool && <div className='flex gap-2 w-[100%] mb-2'>    
            <input value={langVal1} className='bg-[#cccccc] rounded-[5px] px-[5px] w-[200px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Nouvelle langue' onChange={(e)=> changingLangVal1(e)} />
            <input value={langVal2} className='bg-[#cccccc] rounded-[5px] px-[5px] w-[145px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder='Niveau langue' onChange={(e)=> changingLangVal2(e)} />
            <button onClick={handleSave}>
              <IoSave size={24} color='green'/>
            </button>
          </div>}
        {langue && <div className='flex flex-col gap-2'>
            {langue.map((item,key)=><div key={key} className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <h2>{item.langName}</h2>
                    <p>{item.langLevel}</p>
                    <button onClick={()=>{delButton(item._id)}} className='bg-red-500 px-3 rounded-[15px]'><MdDeleteForever size={24} color='white'/></button>
                </div>
                <div className='w-[100%] bg-[black] h-[2px]'/>
            </div>
            )}
        </div>}
    </div>
  )
}
