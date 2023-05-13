import { motion } from "framer-motion";

const NoLocation = () => {
    return (
    <motion.div className="flex flex-col justify-evenly items-center w-1/2 h-1/2" initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ease: "easeOut", duration: 1}}>
            
        <h1 className="text-3xl md:text-6xl text-center">Uh, oh - Something went wrong</h1>

        <form id="locationform" className="w-full flex flex-col items-center">
            <motion.input type="text" placeholder="Enter location..." className="m-2 bg-gray-50 border border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></motion.input>
            <input type="submit" value="Submit" className="m-2 cursor-pointer bg-gray-50 border border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block md:w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </form>
            
    </motion.div>
    )
}

export default NoLocation;