import React, { useEffect, useState } from "react";
import "../../index.css";
import { IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { enqueueSnackbar } from "notistack";

const URL = "https://project-portefolio-backend.onrender.com";
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

  async function handleDel(id) {
    // console.log(id);
    const response = await fetch(`${URL}/delFormation/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      enqueueSnackbar(
        `La formation "${data.value}" vien d'être supprimée.`,
        {
          variant: "error",
          autoHideDuration: 1200,
        }
      );
      readFormation();
    }
  }

  async function handleSave() {
    if (
      formationVal1 !== "" &&
      formationVal2 !== "" &&
      formationVal3 !== ""
    ) {
      const saveData = await fetch(`${URL}/newFormation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Annee: `${formationVal1}`,
          Etablissement: `${formationVal2}`,
          Diplome: `${formationVal3}`
        }),
      });
      if (saveData.ok) {
        const data = await saveData.json();
        // console.log(data);
        enqueueSnackbar(
          `La formation "${data.value}" à été ajouter.`,
          {
            variant: "success",
            autoHideDuration: 1200,
          }
        );
        readFormation();
        setFormationVal1("");
        setFormationVal2("");
        setFormationVal3("");
      }
    }
  }

  function changingFormVal1(e) {setFormationVal1(e.target.value);}
  function changingFormVal2(e) {setFormationVal2(e.target.value);}
  function changingFormVal3(e) {setFormationVal3(e.target.value);}

  function switchClick(){
    setBool(!bool)
    if(bool === false){ 
        setFormationVal1('')
        setFormationVal2('')
        setFormationVal3('')
    }
  }

  const handleHover = (index)=>{
    setHoveredIndex(index);
    const body = document.querySelector('body')
    body.style.height = "110%"
  }
  const handleMouseLeave = ()=>{ 
    setHoveredIndex(null);
    const body = document.querySelector('body')
    body.style.height = "100%"
   }
  // ---------------------//-------------------------//---------------------------//------------------------//
  return (
    <div className='w-[400px] flex flex-col gap-2 p-[5px] rounded-[5px] bg-[#eeeeee90] mb-5' style={{border:'2px solid black'}}>
      <h2 className='text-[24px] font-[700] text-[blue] text-center bg-[#dddddd] rounded-[30px] border-solid border-[3px] border-[#bbbbbb]'>Gérer les Formations</h2>
      <button id="addCompBtn" onClick={() => { switchClick(); }}>
        {!bool && <MdAddBox size={24} color="blue" />}
        {bool && (
          <div className="flex gap-2">
            <CgRemoveR size={22} color="red" />
            <h2>Ajouter une Formation:</h2>
          </div>
        )}
      </button>
      {bool && (
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex w-[350px] gap-1">
              <input
                value={formationVal1}
                className="bg-[#cccccc] w-[40%] rounded-[5px] px-[5px]"
                style={{ border: "1px solid black" }}
                id="compSave"
                type="text"
                placeholder="Années"
                onChange={(e) => changingFormVal1(e)}
              />
              <input
                value={formationVal2}
                className="bg-[#cccccc] w-[60%] rounded-[5px] px-[5px]"
                style={{ border: "1px solid black" }}
                id="compSave"
                type="text"
                placeholder="Etablissement"
                onChange={(e) => changingFormVal2(e)}
              />
            </div>
            <input
              value={formationVal3}
              className="bg-[#cccccc] rounded-[5px] px-[5px]"
              style={{ border: "1px solid black" }}
              id="compSave"
              type="text"
              placeholder="Diplome"
              onChange={(e) => changingFormVal3(e)}
            />
          </div>
          <button onClick={handleSave}>
            <IoSave size={24} color="green" />
          </button>
        </div>
      )}
      <div>
        {formation &&
          formation.map((item, key) => (
            <div key={key} className="flex flex-col gap-2">
              <div key={key} className="flex justify-between items-center mt-[7px]">
                <p>{item.Annee}</p>
                <p className="text-[14px]">{item.Etablissement}</p>
                <div className="hover-container relative " onMouseEnter={() => handleHover(key)} onMouseLeave={handleMouseLeave}>
                  <BsFillInfoCircleFill key={key} size={20} color="blue" className="z-0"/>
                  {hoveredIndex === key && (
                    <div
                      className="flex flex-col absolute left-[-403px] top-[25px]
                        w-[400px] bg-[#333333] text-[white] p-[5px] rounded-[10px] text-center z-[1]"
                      style={{ border: "1px solid black" }}
                    >
                      <label
                        className="font-bold text-center text-[25px] underline"
                        htmlFor="idPoste"
                      >
                        Diplôme:
                      </label>
                      <span className="ml-[10px]" id="idPoste">
                        {item.Diplome}
                      </span>
                      <label
                        className="font-bold text-center text-[25px] underline"
                        htmlFor="idMission"
                      >
                        ID:
                      </label>
                      <span className="ml-[10px]" id="idMission">
                        {item._id}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    handleDel(item._id);
                  }}
                  className="bg-red-500 px-3 rounded-[15px]"
                >
                  <MdDeleteForever size={24} color="white" />
                </button>
              </div>
              <div className="w-[100%] bg-[black] h-[2px]" />
            </div>
          ))}
      </div>
    </div>
  )
}
