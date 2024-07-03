import React from "react";
import "../index.css";
import BlankV2 from '../images/blank-profileV2.png'
import Formation from "../components/Formation";
import Contact from "../components/Contact";
import Competences from "../components/Competences.jsx";
import Langues from "../components/Langues.jsx";
import CentreInteret from "../components/CentreInteret.jsx";
import ExperiencePro from "../components/ExperiencePro.jsx";

export function Acceuil() {
  return (
    <div>
      <main className="flex gap-5 mt-5">
        <div id="myInfo" className="w-[40%] ml-5">
          <div className="flex justify-center items-center">
            <img className="w-[50%]" src={BlankV2} alt="Blank" />
          </div>
          <h3 className="text-center">SZCZAP Brajan</h3>
          <div className="flex flex-col">
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
              Contact
            </h2>
            <div>
              <Contact/>
            </div>
          </div>
          <div>
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
              Compétences
            </h2>
            <div className="flex">
              <Competences/>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
                Langues
              </h2>
              <Langues/>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
                Centre d'intérêts
              </h2>
              <CentreInteret/>
            </div>
          </div>
        </div>
        <div id="CV" className="w-[100%] mr-5 text-center">Curriculum Vitae
          <ExperiencePro/>
          <Formation/>
        </div>
      </main>
    </div>
  );
}