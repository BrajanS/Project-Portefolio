import React, { useState, useEffect } from "react";

const URL = "http://localhost:4000";
export default function Formation() {
    const [formation,setFormation] = useState([])

    async function readFormation(){
        const obtainFormation = await fetch(`${URL}/formation`)
        const data = await obtainFormation.json()
        setFormation(data)
    }

    useEffect(()=>{
        readFormation()
    },[])

  return (
    <div className="flex flex-col">
      <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
        Formation
      </h2>
      {formation && (
        <div>
          {formation.map((item, key) => (
            <div key={key} className="flex flex-col mb-[5px]">
              <div className="flex text-start">
                <div className="flex flex-col w-[120px]">
                  {Object.keys(item)
                    .filter((key) => key !== "_id" && key !== "__v")
                    .map((theKey, num) => (
                      <span key={num}>{theKey}</span>
                    ))}
                </div>
                <div className="flex flex-col text-start">
                  {Object.entries(item)
                    .filter(([key]) => key !== "_id" && key !== "__v")
                    .map(([key, val], valNum) => (
                      <span key={valNum}>{val}</span>
                    ))}
                </div>
              </div>
              <div className="bg-[#000000] h-[1px] w-[100%]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}