import React, { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";

const URL = "https://project-portefolio-backend.onrender.com";
export default function AdminCentreInterets() {
  const [ci, setCi] = useState([]);
  const [ciVal, setCiVal] = useState();
  const [bool, setBool] = useState(false);
  
  async function readCi() {
    const obtainCi = await fetch(`${URL}/ci`);
    const data = await obtainCi.json();
    setCi(data);
  }
  
  useEffect(() => {
    readCi();
  }, []);

  function switchClick() {
    setBool(!bool);
    if (bool === false) {
      setCiVal("");
    }
  }

  async function handleSave() {
    console.log(ciVal);
    if (ciVal !== "") {
      const saveData = await fetch(`${URL}/newCi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interet: `${ciVal}`,
        }),
      });
      if (saveData.ok) {
        const data = await saveData.json();
        console.log(data);
        enqueueSnackbar(`Le centre interet "${data.value}" à été ajouter.`, {
          variant: "success",
          autoHideDuration: 1200,
        });
        readCi();
        setCiVal("");
      }
    }
  }
  function changingCiVal(e) {
    setCiVal(e.target.value);
  }

  async function delButton(id) {
    console.log("Clicked");
    const deleteFetch = await fetch(`${URL}/delCi/${id}`, {
      method: "DELETE",
    });
    if (deleteFetch.ok) {
      const data = await deleteFetch.json();
      enqueueSnackbar(`Le centre interet "${data.value}" à été supprimé.`, {
        variant: "error",
        autoHideDuration: 1200,
      });
      readCi();
    }
  }
  return (
    <div className="w-[400px] p-[5px] rounded-[5px] bg-[#eeeeee90] mb-5" style={{ border: "2px solid black" }}>
        <h2 className="mb-2 text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]">
            Gérer le Centre d'intérêts
        </h2>
        <button id='addCompBtn' onClick={()=>{switchClick()}}>
          {!bool && <MdAddBox size={24} color='blue'/>}
          {bool && <CgRemoveR size={22} color='red'/>}
        </button>
        {bool && <div className='flex gap-2'>    
            <input value={ciVal} className='bg-[#cccccc] rounded-[5px] px-[5px]' style={{border: "1px solid black"}} id='compSave' type="text" placeholder="Nouveau centre d'intérêt" onChange={(e)=> changingCiVal(e)} />
            <button onClick={handleSave}>
              <IoSave size={24} color='green'/>
            </button>
        </div>}
      {ci && ci.map((item,key) => <div key={key} className='flex flex-col gap-2'>
            <div className='flex justify-between items-center mt-[7.5px] max-w-[386px]'>
              <p>{item.interet}</p>
              <p className='text-[14px]'>{item._id}</p> 
              <button onClick={()=>{delButton(item._id)}} className='bg-red-500 px-3 rounded-[15px]'><MdDeleteForever size={24} color='white'/></button>
            </div>
            <div className='w-[100%] bg-[black] h-[2px]'/>
          </div>)}
    </div>
  );
}
