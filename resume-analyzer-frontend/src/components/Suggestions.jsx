import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";


function Suggestions({ suggestions = [] }) {

    return (

        <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
        ">


            <h2 className="
                text-2xl
                font-bold
                text-gray-800
                mb-6
            ">

                AI Suggestions 💡

            </h2>



            <div className="
                space-y-4
            ">


                {
                    suggestions.map((item,index)=>(


                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                x:-30
                            }}

                            animate={{
                                opacity:1,
                                x:0
                            }}

                            transition={{
                                delay:index*0.1
                            }}


                            whileHover={{
                                scale:1.02
                            }}


                            className="
                                flex
                                gap-4
                                items-center
                                bg-yellow-50
                                border
                                border-yellow-200
                                p-5
                                rounded-2xl
                            "

                        >


                            <div className="
                                bg-yellow-200
                                p-3
                                rounded-full
                            ">

                                <Lightbulb
                                    className="text-yellow-700"
                                />

                            </div>




                            <p className="
                                text-gray-700
                                font-medium
                            ">

                                {item}

                            </p>


                        </motion.div>


                    ))
                }


            </div>


        </div>

    );

}


export default Suggestions;