import React, { useState, useEffect } from "react";

const URL = "https://project-portefolio-backend.onrender.com";
export default function ExperiencePro() {
  const [expPro, setExpPro] = useState([]);

  async function readExpPro() {
    const obtainExpPro = await fetch(`${URL}/expPro`);
    const data = await obtainExpPro.json();
    setExpPro(data);
  }

  useEffect(() => {
    readExpPro();
  },[]);

  return (
    <div className="flex flex-col mb-[5px]">
      <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
        Expérience Professionnelles
      </h2>
      {expPro && (
        <div>
          {expPro.map((item, key) => (
            <div key={key} className="flex flex-col mb-[5px]">
              <div className="flex text-start">
                <div className="flex flex-col w-[120px]">
                  {Object.keys(item).filter(key => key !== '_id' && key !== '__v').map((theKey,num)=><span key={num}>{theKey}</span>)}
                </div>
                <div className="flex flex-col text-start">
                  {Object.entries(item).filter(([key]) => key !== '_id' && key !== '__v').map(([key,val],valNum)=><span key={valNum}>{val}</span>)}
                  {/* .map(([key,val,valNum])) ça veut dire que "key: permet grace au filtre de prendre ONLY "2021-2022" aulieu de Annee et ou les deux (comme si c'était Object.Annee = 2021-2022 aulieu de Object = Annee)"
                    val: C'est le Item de map & valNum: C'est la Key du map  */}
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
