import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";

import { evaluateAnswer } from "../api/interviewApi";


function InterviewPractice({ question, skill, onClose }) {


    const [answer, setAnswer] = useState("");

    const [feedback, setFeedback] = useState(null);

    const [loading, setLoading] = useState(false);



    const handleEvaluate = async () => {


        if (!answer.trim()) {

            alert("Please enter your answer");

            return;

        }



        try {


            setLoading(true);



            const response = await evaluateAnswer({

                question: question,

                answer: answer

            });



            setFeedback(response.data);



        }
        catch(error) {


            console.log(error);

            alert("Evaluation failed");


        }
        finally {


            setLoading(false);


        }


    };





    return (

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            animate={{
                opacity:1,
                y:0
            }}

            className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
            "

        >



            <button

                onClick={onClose}

                className="
                    flex
                    items-center
                    gap-2
                    text-blue-600
                    font-semibold
                    mb-6
                "

            >

                <ArrowLeft size={20}/>

                Back

            </button>





            <h2 className="
                text-3xl
                font-bold
                text-gray-800
            ">

                Mock Interview 🎯

            </h2>





            <p className="
                mt-4
                text-blue-600
                font-semibold
            ">

                Skill: {skill}

            </p>






            <div className="
                mt-6
                bg-blue-50
                rounded-2xl
                p-6
            ">


                <h3 className="
                    font-bold
                    text-gray-800
                    text-lg
                ">

                    Question:

                </h3>



                <p className="
                    mt-3
                    text-gray-700
                ">

                    {question}

                </p>


            </div>







            <textarea

                value={answer}

                onChange={(e)=>setAnswer(e.target.value)}

                placeholder="Write your answer here..."

                className="
                    mt-6
                    w-full
                    h-40
                    border
                    rounded-2xl
                    p-5
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "

            />







            <button

                onClick={handleEvaluate}

                disabled={loading}

                className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                "

            >

                <Send size={20}/>

                {
                    loading
                    ?
                    "Checking..."
                    :
                    "Submit Answer"
                }


            </button>









            {
                feedback && (

                    <div className="
                        mt-6
                        bg-green-50
                        rounded-2xl
                        p-6
                    ">


                        <h3 className="
                            text-xl
                            font-bold
                            text-green-700
                        ">

                            AI Feedback 🤖

                        </h3>





                        <p className="mt-3">

                            Score:
                            <b> {feedback.score}/100</b>

                        </p>





                        <h4 className="font-bold mt-4">
                            Strengths:
                        </h4>


                        {
                            feedback.strengths?.map(
                                (item,index)=>(
                                    <p key={index}>
                                        ✅ {item}
                                    </p>
                                )
                            )
                        }






                        <h4 className="font-bold mt-4">
                            Improvements:
                        </h4>


                        {
                            feedback.improvements?.map(
                                (item,index)=>(
                                    <p key={index}>
                                        ⚠️ {item}
                                    </p>
                                )
                            )
                        }







                        <p className="
                            mt-4
                            text-gray-700
                        ">

                            {feedback.feedback}

                        </p>



                    </div>

                )
            }




        </motion.div>

    );

}


export default InterviewPractice;