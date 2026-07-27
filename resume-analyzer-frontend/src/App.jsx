import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardCards from "./components/DashboardCards";
import UploadResume from "./components/UploadResume";
import InterviewQuestions from "./components/InterviewQuestions";
import Footer from "./components/Footer";

import "./App.css";


function App() {


  const [result, setResult] = useState(null);

  const [questions, setQuestions] = useState([]);



  return (

    <div className="min-h-screen bg-slate-100">


      <Navbar />



      <main className="
        max-w-7xl
        mx-auto
        px-6
        py-8
      ">



        {/* HOME */}

        <section id="home">

          <Hero />

        </section>





        <DashboardCards

          result={result}

        />







        <div className="
          grid
          lg:grid-cols-2
          gap-8
        ">




          {/* RESUME ANALYZER */}

          <section id="resume">

            <UploadResume

              setResult={setResult}

              setQuestions={setQuestions}

            />

          </section>







          {/* INTERVIEW PREP */}

          <section id="interview">

            <InterviewQuestions

              questions={questions}

            />

          </section>



        </div>







        {/* ABOUT */}

        <section
          id="about"
          className="
          mt-10
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          "
        >

          <h2 className="
          text-3xl
          font-bold
          text-gray-800
          ">

            About AI Resume Analyzer

          </h2>



          <p className="
          mt-4
          text-gray-600
          "
          >

            AI Resume Analyzer helps users analyze resumes,
            calculate ATS score, identify skills, get AI suggestions,
            and prepare for interviews.

          </p>


        </section>





      </main>




      <Footer />



    </div>

  );

}


export default App;