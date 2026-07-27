import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


function Skills({ skills = [] }) {

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

                Matched Skills ✅

            </h2>




            <div className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
            ">


                {
                    skills.map((skill,index)=>(

                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                y:20
                            }}

                            animate={{
                                opacity:1,
                                y:0
                            }}

                            transition={{
                                delay:index * 0.1
                            }}

                            whileHover={{
                                scale:1.05
                            }}


                            className="
                                flex
                                items-center
                                gap-3
                                bg-green-50
                                border
                                border-green-200
                                rounded-xl
                                p-4
                            "

                        >


                            <CheckCircle

                                className="
                                    text-green-600
                                "

                                size={24}

                            />



                            <span className="
                                font-semibold
                                text-gray-700
                            ">

                                {skill}

                            </span>


                        </motion.div>

                    ))
                }


            </div>


        </div>

    );

}


export default Skills;