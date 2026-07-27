import { motion } from "framer-motion";
import { Sparkles, FileText } from "lucide-react";

function Hero() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-10 mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
              <Sparkles size={20} />
              AI Powered Resume Screening
            </div>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              AI Resume Analyzer &
              <br />
              Interview Preparation
            </h1>

            <p className="text-gray-600 mt-5 text-lg">
              Upload your resume and instantly receive an ATS score,
              skill analysis, AI suggestions, and interview questions.
            </p>

            {/* <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Analyze Resume
            </button> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-blue-50 rounded-full p-10">
            <FileText size={150} color="#2563eb" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;