import React from "react";
import { Link } from "react-router-dom";
import Blank from "../images/blank-profile.png";
import "../index.css";
import Formation from "../components/Formation";

export function Acceuil() {
  const fTitre = [{"Année":2021,"Etablissement":"Pau","Diplôme":"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {"Année":2023,"Etablissement":"Pau","Diplôme":"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
  ];
  return (
    <div>
      <header className="bg-[#BBBBBB]">
        <nav className="mx-[30px] p-[5px] flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className=" p-[5px] h-[60px] w-[60px] bg-[#ffff00a2] rounded-[50%]"
              src={Blank}
              alt="Stuff"
            />
            <h2 className="flex items-center">Brajan SZCZAP</h2>
          </div>
          <div className="Links">
            <Link className="text-[Blue] font-[700]" to="/admin">
              Admin
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex">
        <div id="myInfo" className="w-[40%]">
          <div>
            <img src={Blank} alt="Blank" />
          </div>
          <h3>SZCZAP Brajan</h3>
          <div className="flex flex-col">
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
              Contact
            </h2>
            <div className="flex">
              <div className="flex flex-col w-[120px]">
                <span>Tel</span>
                <span>Mail</span>
                <span>Adresse</span>
              </div>
              <div className="flex flex-col">
                <span>06 00 00 00 00</span>
                <span>email@gmail.com</span>
                <span>102 avenue Charles de Gaulle</span>
              </div>
            </div>
          </div>
          <div>
            <h2
              className="text-[white] text-[20px] rounded-[5px]
                 font-[700] bg-[#0d0d85] text-center"
            >
              Compétences
            </h2>
            <div className="flex">
              <div className="flex flex-col">
                <span>CSS</span>
                <span>HTML</span>
                <span>WORDPRESS</span>
                <span>Python</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
                Langues
              </h2>
              <div className="flex">
                <div className="flex flex-col w-[120px]">
                  <span>Anglais</span>
                  <span>Français</span>
                  <span>Polonais</span>
                </div>
                <div className="flex flex-col">
                  <span>Moyen</span>
                  <span>C1</span>
                  <span>Maternelle</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
                Centre d'intérêts
              </h2>
              <div className="flex">
                <div className="flex flex-col w-[120px]">
                    <span>Anglais</span>
                    <span>Français</span>
                    <span>Polonais</span>
                </div>
                <div className="flex flex-col">
                    <span>Moyen</span>
                    <span>C1</span>
                    <span>Maternelle</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div id="CV" className="w-[100%] text-center">Curriculum Vitae
          <div className="flex flex-col">
              <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">
                Expérience Professionnelles
              </h2>
              <div className="flex text-start">
                <div className="flex flex-col w-[120px]">
                  <span>Année</span>
                  <span>Entreprise</span>
                  <span>Poste</span>
                  <span>Mission</span>
                </div>
                <div className="flex flex-col text-start">
                    <span>2020 - 2021</span>
                    <span>entreprise 1</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
              </div>
            <div className="bg-[#000000] h-[1px] w-[100%]"/>
          </div>
          {/* <Formation titre={fTitre} /> */}
        </div>
      </main>
    </div>
  );
}
