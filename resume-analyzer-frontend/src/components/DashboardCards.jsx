import { motion } from "framer-motion";

import {
  Award,
  Brain,
  MessageSquare,
  Lightbulb
} from "lucide-react";


function DashboardCards({ result }) {


  const atsScore = result?.atsScore ?? null;

  const skillsCount =
    result?.matchedSkills?.length ?? null;


  const questionCount =
    result?.matchedSkills
      ? result.matchedSkills.length + 1
      : null;


  const suggestionCount =
    result?.suggestions?.length ?? null;



  const cards = [


    {
      title:"ATS Score",

      value:
        atsScore !== null
        ? `${atsScore}%`
        : "--",

      description:
        atsScore !== null
        ? "Resume compatibility score"
        : "Upload resume to analyze",

      icon:Award,

      color:
        "bg-green-100 text-green-700"

    },




    {
      title:"Skills Found",

      value:
        skillsCount !== null
        ? skillsCount
        : "--",

      description:
        skillsCount !== null
        ? "Technical skills detected"
        : "AI will extract skills",

      icon:Brain,

      color:
        "bg-blue-100 text-blue-700"

    },





    {
      title:"Interview Questions",

      value:
        questionCount !== null
        ? questionCount
        : "--",

      description:
        questionCount !== null
        ? "Personalized questions"
        : "AI questions generated",

      icon:MessageSquare,

      color:
        "bg-purple-100 text-purple-700"

    },





    {
      title:"AI Suggestions",

      value:
        suggestionCount !== null
        ? suggestionCount
        : "--",

      description:
        suggestionCount !== null
        ? "Resume improvement tips"
        : "AI insights after upload",

      icon:Lightbulb,

      color:
        "bg-yellow-100 text-yellow-700"

    }


  ];





  return (


    <section
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6
      mb-8
      "
    >


      {
        cards.map((card,index)=>{


          const Icon = card.icon;



          return(


            <motion.div


              key={card.title}


              initial={{
                opacity:0,
                y:30
              }}


              animate={{
                opacity:1,
                y:0
              }}


              transition={{
                delay:index*0.15
              }}



              whileHover={{
                scale:1.05,
                y:-8
              }}


              className="
              bg-white
              rounded-3xl
              shadow-xl
              p-6
              border
              border-gray-100
              "


            >



              <div className="
              flex
              justify-between
              items-center
              ">



                <div>



                  <p className="
                  text-gray-500
                  text-sm
                  font-medium
                  ">

                    {card.title}

                  </p>




                  <motion.h2

                    initial={{
                      scale:0.8
                    }}

                    animate={{
                      scale:1
                    }}

                    className="
                    text-4xl
                    font-bold
                    text-gray-800
                    mt-3
                    "

                  >

                    {card.value}


                  </motion.h2>




                  <p className="
                  text-xs
                  text-gray-400
                  mt-3
                  ">

                    {card.description}


                  </p>



                </div>






                <div

                  className={`
                  p-4
                  rounded-2xl
                  ${card.color}
                  `}

                >

                  <Icon size={32}/>


                </div>




              </div>



            </motion.div>


          );


        })
      }



    </section>


  );


}


export default DashboardCards;