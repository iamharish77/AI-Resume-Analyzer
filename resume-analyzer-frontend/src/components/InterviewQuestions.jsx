import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, UserRound, UploadCloud, PlayCircle } from "lucide-react";

import InterviewPractice from "./InterviewPractice";


function InterviewQuestions({ questions = [] }) {


    const [selectedQuestion, setSelectedQuestion] = useState(null);



    // Open practice page

    if (selectedQuestion) {


        return (

            <InterviewPractice

                question={selectedQuestion.question}

                skill={selectedQuestion.skill}

                onClose={() => setSelectedQuestion(null)}

            />

        );

    }




    // Empty state before resume upload

    if (questions.length === 0) {


        return (

            <div className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
                text-center
            ">


                <UploadCloud

                    size={55}

                    className="
                        mx-auto
                        text-blue-600
                    "

                />



                <h2 className="
                    text-3xl
                    font-bold
                    text-gray-800
                    mt-5
                ">

                    Interview Preparation 🎯

                </h2>




                <p className="
                    mt-4
                    text-gray-600
                    text-lg
                ">

                    Upload your resume to get AI-powered interview preparation.

                </p>




                <div className="
                    mt-6
                    space-y-3
                    text-left
                    max-w-md
                    mx-auto
                ">


                    <p>
                        ✅ Technical questions based on your skills
                    </p>


                    <p>
                        ✅ HR interview questions
                    </p>


                    <p>
                        ✅ Role-based preparation
                    </p>


                    <p>
                        ✅ Personalized mock interview practice
                    </p>


                </div>




                <p className="
                    mt-8
                    text-blue-600
                    font-semibold
                ">

                    Upload resume and start preparing 🚀

                </p>



            </div>

        );

    }






    // Questions after resume upload

    return (

        <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
        ">



            <h2 className="
                text-3xl
                font-bold
                text-gray-800
                mb-8
            ">

                Interview Preparation 🎯

            </h2>





            <div className="
                grid
                md:grid-cols-2
                gap-6
            ">



                {
                    questions.map((item,index)=>(


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
                                scale:1.03
                            }}



                            className="
                                bg-blue-50
                                border
                                rounded-2xl
                                p-6
                                shadow-md
                            "

                        >




                            <div className="
                                flex
                                items-center
                                gap-3
                                mb-5
                            ">



                                {
                                    item.type === "HR"

                                    ?

                                    <UserRound

                                        size={26}

                                        className="text-purple-600"

                                    />

                                    :

                                    <Code2

                                        size={26}

                                        className="text-blue-600"

                                    />

                                }



                                <span className="
                                    font-bold
                                    text-gray-700
                                ">

                                    {item.type}

                                </span>



                            </div>






                            <h3 className="
                                text-lg
                                font-bold
                                text-gray-800
                            ">

                                {item.question}

                            </h3>






                            <p className="
                                mt-4
                                inline-block
                                bg-blue-100
                                text-blue-700
                                px-4
                                py-2
                                rounded-full
                                text-sm
                            ">

                                Skill: {item.skill}

                            </p>






                            <button


                                onClick={() => 
                                    setSelectedQuestion(item)
                                }



                                className="
                                    mt-6
                                    flex
                                    items-center
                                    gap-2
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-5
                                    py-3
                                    rounded-xl
                                    font-semibold
                                "


                            >

                                <PlayCircle size={20}/>

                                Start Practice 🚀


                            </button>






                        </motion.div>


                    ))

                }



            </div>



        </div>

    );


}



export default InterviewQuestions;