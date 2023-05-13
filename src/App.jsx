import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import "./index.css"
import "./css/style.css"
import NoLocation from "./components/NoLocation";

export default function App(){
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState(null);

  const handleLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
    }
    else{
      console.log("Geolocation is not supported");
    }
  }

  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ok:true, latitude, longitude});

    const res = await fetch("http://api.weatherapi.com/v1/forecast.json?key=483852b289de4f9ab74193927221012&q=" + location.latitude + "," + location.longitude);
    const json = await res.json();
    setWeather(json);
    console.log(json);
  }

  const error = () => {
    console.log("Error while getting location");
    setLocation({ok: false});
  }

  useEffect(handleLocation, []);

  return (
      <div id="container" className="h-screen flex flex-col justify-center items-center">
        {location.ok ?
        weather ? <h1>{location.latitude + " " + location.longitude}</h1> :
         <motion.div className="flex flex-col justify-evenly items-center w-1/2 h-1/2" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ease: "easeOut", duration: 1}}>
            <h1 className="text-3xl md:text-6xl text-center">Getting the data...</h1>
            <motion.div className="w-20 h-20 rounded-full border-black border-solid border-r-4" animate={{rotate: 360}} transition={{duration: 1.5 ,repeat: Infinity, ease: "linear"}}></motion.div>
        </motion.div>
        : <NoLocation />}
      </div>
  )
}