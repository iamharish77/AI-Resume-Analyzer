import { motion } from "framer-motion";

function ATSScore({ score }) {

    const percentage = score || 0;


    return (

        <motion.div

            initial={{opacity:0, y:30}}

            animate={{opacity:1, y:0}}

            transition={{duration:0.6}}

            className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            text-center
            "

        >


            <h2 className="text-2xl font-bold text-gray-800 mb-6">

                ATS Score 📊

            </h2>




            <div className="relative w-48 h-48 mx-auto">


                <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                >

                    <circle

                        cx="50"

                        cy="50"

                        r="45"

                        stroke="#e5e7eb"

                        strokeWidth="10"

                        fill="none"

                    />


                    <motion.circle

                        cx="50"

                        cy="50"

                        r="45"

                        stroke="#2563eb"

                        strokeWidth="10"

                        fill="none"

                        strokeLinecap="round"

                        strokeDasharray="283"

                        strokeDashoffset={
                            283 - (283 * percentage) / 100
                        }

                        initial={{
                            strokeDashoffset:283
                        }}

                        animate={{
                            strokeDashoffset:
                            283 - (283 * percentage) / 100
                        }}

                        transition={{
                            duration:1.5
                        }}

                    />

                </svg>





                <div className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    flex-col
                ">


                    <h3 className="
                    text-5xl
                    font-bold
                    text-blue-600
                    ">

                        {percentage}%

                    </h3>


                    <p className="text-gray-500">

                        Match

                    </p>


                </div>


            </div>





            <div className="mt-6">


                {
                    percentage >= 80 ? (

                        <p className="
                        text-green-600
                        font-semibold
                        text-lg
                        ">

                            Excellent Resume 🚀

                        </p>

                    ) : (

                        <p className="
                        text-yellow-600
                        font-semibold
                        text-lg
                        ">

                            Needs Improvement 💡

                        </p>

                    )
                }


            </div>


        </motion.div>

    );

}


export default ATSScore;