import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { WeatherContext } from "../App";

export default function Weather(){
    const weather = useContext(WeatherContext);
    const [isOpen, setIsOpen] = useState(false);

    console.log(weather);

    const pop_up_variants = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };
    const item_pop_up = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2
            }
        },
        tapped: {
            scale: 0.97
        }
    };
    const item_onClick = {
        animate: {
            opacity: 1,
            scale: 1,
            y: 100,
            transition: {
                type: "spring",
                duration: 1.2,
                stiffness: 50,
                delayChildren: 0.3
            }
        },
        stop: {
            y: 0,
            opacity: 0,
            scale: 0,
            transition: {
                type: "spring",
                duration: 0.7,
            }
        }
    }

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-4 w-full h-full" style={{background: "rgb(70,160,204) linear-gradient(62deg, rgba(70,160,204,1) 49%, rgba(83,146,215,1) 100%)"}}>
            
            <motion.div variants={pop_up_variants} initial="initial" animate="animate" transition={{type: "spring", delayChildren: 0.5, staggerChildren: 0.2, duration: 1.2}} className="lg:m-24 m-5 lg:order-first order-last flex flex-col w-1/2 h-1/2 roundedShadow">

                <motion.button onClick={() => setIsOpen(!isOpen)} variants={item_pop_up} initial="initial" animate="animate" whileTap="tapped" className="text-black text-start m-5 flex gap-3 items-center">
                    {isOpen ? "Feels Like" : "Current"}
                    <motion.div initial={false} animate={isOpen ? {rotate: 180} : {rotate: 0}} transition={{duration: 0.2, ease: "easeInOut"}}>
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </motion.button>

                <div className="relative h-full">
                    <motion.div variants={item_onClick} animate={isOpen ? "animate" : "stop"} className="h-full flex flex-col justify-center items-center onclick absolute top-0 right-0 left-0 bottom-0">
                        <h1 className="text-white text-center lg:text-9xl text-7xl">{weather.current.feelslike_c}<sup>°C</sup></h1>
                    </motion.div>
                    <motion.div variants={item_onClick} animate={isOpen ? "stop" : "animate"} className="h-full flex flex-col justify-center items-center absolute top-0 right-0 left-0 bottom-0">
                        <h1 className="text-black text-center lg:text-9xl text-7xl">{weather.current.temp_c}<sup>°C</sup></h1>
                    </motion.div>
                </div>
                    
            </motion.div>

            <motion.div variants={pop_up_variants} initial="initial" animate="animate" transition={{type: "spring", duration: 1.2, delay: 0.7}} className="lg:m-24 m-5 text-white text-center">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-col justify-end">
                    <motion.h1 variants={item_pop_up} className="lg:text-9xl text-5xl lg:text-end text-center">{weather.location.name}</motion.h1>
                    <motion.h2 variants={item_pop_up} className="lg:text-8xl text-4xl lg:text-end text-center">{weather.location.country}</motion.h2>
                </motion.div>
            </motion.div>

        </div>
    )
}