import { motion } from "framer-motion";

const NoLocation = () => {
    return (
    <motion.div className="flex flex-col justify-evenly items-center w-1/2 h-1/2" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ease: "easeOut", duration: 1}}>
            
        <h1 className="text-3xl md:text-6xl text-center">Uh, oh - Something went wrong</h1>

        <form id="locationform" className="w-full flex flex-col items-center">
            <motion.input whileFocus={{borderColor: "red"}} type="text" placeholder="Enter location..." className="m-2 bg-gray-50 text-gray-900 text-sm rounded-full shadow-md block w-full p-2.5"></motion.input>
            <motion.input whileHover={{scale: 0.9}} type="submit" value="Submit" className="m-2 cursor-pointer bg-gray-50 text-gray-900 text-sm shadow-md rounded-full block md:w-1/4 p-2.5"></motion.input>
        </form>
            
    </motion.div>
    )
}

export default NoLocation;