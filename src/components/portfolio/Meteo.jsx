import React, { useState } from "react";
import Axios from "axios";

import ImgA from "../../images/Meteo/project-meteo1.png";
import ImgB from "../../images/Meteo/project-meteo2.png";
import { FaCity, FaCloud, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import { RiWeightFill } from "react-icons/ri";
import { PiSunHorizonDuotone } from "react-icons/pi";
import { TbSunset2 } from "react-icons/tb";

const URL = "http://localhost:4000";

export default function Meteo() {
  const [city, setCity] = useState("");
  const [meteo, setMeteo] = useState(null);
  const [error, setError] = useState(null);

  async function readMeteo() {
    try {
      const reponse = await Axios.get(`${URL}/meteo?city=${city}`);
      setMeteo(reponse.data.meteo);
      setError(null);
    } catch (error) {
      setMeteo(null);
      setError(error.message);
    }
  }

  function Submit(e) {
    e.preventDefault();
    document.getElementById("meteoInput").value = "";
    readMeteo();
  }

  return (
    <div>
      <div>
        <h2 className="ptH2">Project Météo</h2>
        <img className="w-[500px] rounded-[10px]" src={ImgA} alt="meteo de la ville" />
      </div>
      <div className="flex flex-col gap-2">
        <form onSubmit={Submit} className="flex gap-2 mt-5">
          <input
            type="text"
            name="city"
            id="meteoInput"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="p-[5px] border-[2px] border-solid border-[#00000080]"
            placeholder="Entrez votre ville"
          />
          <button className="bg-[#48b2f0] rounded-[5px] px-[5px]" type="submit">
            Obtenir la Météo
          </button>
        </form>
        {error && <p>{error}</p>}
        {meteo && (
          <div className="bg-[#dddddd] p-[10px] flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <FaCity size={24} color="#143ba7" />
              <h2>Ville: {city}</h2>
            </div>
            <div className="flex items-center gap-1">
              <FaLocationDot size={24} color="#ce2c2c" />
              <h4>pays: {meteo.sys.country}</h4>
            </div>
            <div className="flex items-center gap-1">
              <FaCloud size={24} color="#fdf9f9" />
              <h4>météo: {meteo.weather[0].description.toUpperCase()}</h4>
            </div>
            <div className="flex items-center gap-1">
              <FaWind size={24} color="#1dca90" />
              <h4>vent: {meteo.wind.speed} (m/s)</h4>
            </div>
            <div className="flex items-center gap-1">
              <FaTemperatureHigh size={24} color="#ce2c00" />
              <h4>temperature: {Math.floor(meteo.main.temp)}°C</h4>
            </div>
            <div className="flex items-center gap-1">
              <IoWater size={24} color="#69d0e2" />
              <h4>humidité: {meteo.main.humidity}</h4>
            </div>
            <div className="flex items-center gap-1">
              <RiWeightFill size={24} color="#222222" />
              <h4>pression: {meteo.main.pressure}</h4>
            </div>
            <div className="flex items-center gap-1">
              <PiSunHorizonDuotone size={24} color="#e0970f" />
              <h4>
                Levée du soleil:{" "}
                {new Date(meteo.sys.sunrise * 1000).toLocaleTimeString()}
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <TbSunset2 size={24} color="#ff6f1c" />
              <h4>
                Couché du soleil:{" "}
                {new Date(meteo.sys.sunset * 1000).toLocaleTimeString()}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}