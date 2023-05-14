import { motion } from "framer-motion";
import { useContext } from "react";
import { WeatherContext } from "../App";

export default function Weather(){
    const weather = useContext(WeatherContext);
    
    return (
        <h1>{weather.daily.time}</h1>
    )
}