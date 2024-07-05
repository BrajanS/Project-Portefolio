import React from 'react'
import { Link } from "react-router-dom";
import Blank from "../images/blank-profile.png";

export default function Navigator() {
  return (
    <header className="bg-[#BBBBBB] mb-[10px]">
        <nav className="mx-[30px] p-[5px] flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className=" p-[5px] h-[60px] w-[60px] bg-[#ffff00a2] rounded-[50%]"
              src={Blank}
              alt="Stuff"
            />
            <h2 className="flex items-center">Brajan SZCZAP</h2>
          </div>
          <div className="Links flex gap-4">
            <Link className="font-[700]" to="/">Acceuil</Link>
            <Link className='font-[700]' to="/myPortfolio">Portfolio</Link>
            <Link className="text-[Blue] font-[700]" to="/admin">Admin</Link>
          </div>
        </nav>
      </header>
  )
}
