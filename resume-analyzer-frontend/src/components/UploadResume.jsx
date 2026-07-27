import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileCheck } from "lucide-react";

import { uploadResume } from "../api/resumeApi";

import ATSScore from "./ATSScore";
import Skills from "./Skills";
import Suggestions from "./Suggestions";
import InterviewQuestions from "./InterviewQuestions";

function UploadResume({ setResult }) {

    const [file, setFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formatSkills = (skills) => {

        if (Array.isArray(skills)) {
            return skills;
        }

        if (typeof skills === "string") {
            return skills
                .split(",")
                .map(skill => skill.trim())
                .filter(Boolean);
        }

        return [];
    };

    const generateSuggestions = (skills, score) => {

        const skillList = formatSkills(skills);

        const suggestions = [];

        if (score >= 80) {
            suggestions.push("Your resume has a strong ATS compatibility.");
        } else {
            suggestions.push("Improve resume keywords to increase ATS score.");
        }

        if (!skillList.includes("Spring Boot")) {
            suggestions.push("Add Spring Boot projects to improve backend profile.");
        }

        if (!skillList.includes("React")) {
            suggestions.push("Include React.js projects with UI implementation.");
        }

        if (!skillList.includes("Git")) {
            suggestions.push("Mention Git and GitHub experience.");
        }

        suggestions.push("Add measurable achievements with numbers and results.");
        suggestions.push("Keep your skills and certifications updated.");

        return suggestions;
    };

    const generateQuestions = (skills) => {

        const skillList = formatSkills(skills);

        const questions = [];

        skillList.forEach(skill => {

            questions.push({
                type: "Technical",
                question: `Explain ${skill} concepts with examples`,
                skill
            });

        });

        questions.push({
            type: "HR",
            question: "Tell me about yourself",
            skill: "General"
        });

        return questions;
    };

    const handleUpload = async () => {

        if (!file) {
            setError("❌ Please select a resume.");
            return;
        }

        if (file.type !== "application/pdf") {
            setError("❌ Please upload a valid PDF resume.");
            return;
        }

        setError("");

        try {

            setLoading(true);

            const response = await uploadResume(file);

            const data = response.data;

            data.suggestions = generateSuggestions(
                data.matchedSkills,
                data.atsScore
            );

            setResult(data);
            setAnalysisResult(data);

        } catch (error) {

            console.log(error);

            setError("❌ Upload failed. Please try again.");

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
            "
        >

            <div
                className="
                    flex
                    items-center
                    gap-3
                    mb-6
                "
            >

                <UploadCloud
                    size={35}
                    className="text-blue-600"
                />

                <h2
                    className="
                        text-3xl
                        font-bold
                    "
                >
                    Upload Resume
                </h2>

            </div>

            <motion.div

                whileHover={{ scale: 1.02 }}

                className="
                    border-2
                    border-dashed
                    border-blue-300
                    rounded-2xl
                    p-10
                    text-center
                    bg-blue-50
                "

            >

                <UploadCloud

                    size={60}

                    className="
                        mx-auto
                        text-blue-600
                    "

                />

                <h3
                    className="
                        text-xl
                        font-semibold
                        mt-4
                    "
                >
                    Upload your resume PDF
                </h3>

                <p
                    className="
                        text-gray-500
                        mt-2
                    "
                >
                    Drag & drop or choose your file
                </p>

                <label
                    className="
                        inline-block
                        mt-5
                        bg-blue-600
                        text-white
                        px-8
                        py-3
                        rounded-xl
                        cursor-pointer
                    "
                >

                    Browse Resume 📄

                    <input

                        type="file"

                        accept=".pdf"

                        hidden

                        onChange={(e) => {
                            setFile(e.target.files[0]);
                            setError("");
                        }}

                    />

                </label>

                {

                    file &&

                    <p
                        className="
                            mt-4
                            text-green-600
                        "
                    >

                        <FileCheck
                            size={20}
                            className="inline mr-2"
                        />

                        {file.name}

                    </p>

                }

            </motion.div>

            <button

                onClick={handleUpload}

                disabled={loading}

                className="
                    mt-6
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    disabled:bg-gray-400
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    text-lg
                "

            >

                {

                    loading

                        ? "Analyzing Resume ⏳"

                        : "Analyze Resume 🚀"

                }

            </button>

            {loading && (

                <div className="mt-4 text-center">

                    <p className="text-blue-600 font-semibold text-lg">
                        🔄 Analyzing Resume...
                    </p>

                    <p className="text-gray-500">
                        Please wait...
                    </p>

                </div>

            )}

            {error && (

                <div className="mt-4 text-center">

                    <p className="text-red-600 font-semibold">
                        {error}
                    </p>

                </div>

            )}

            {

                analysisResult &&

                <div
                    className="
                        mt-10
                        space-y-8
                    "
                >

                    <h3
                        className="
                            text-xl
                            font-bold
                        "
                    >
                        Analysis Completed ✅
                    </h3>

                    <p>
                        <strong>File:</strong> {analysisResult.fileName}
                    </p>

                    <ATSScore
                        score={analysisResult.atsScore}
                    />

                    <Skills
                        skills={formatSkills(
                            analysisResult.matchedSkills
                        )}
                    />

                    <Suggestions
                        suggestions={analysisResult.suggestions}
                    />

                    <InterviewQuestions
                        questions={generateQuestions(
                            analysisResult.matchedSkills
                        )}
                    />

                </div>

            }

        </div>

    );

}

export default UploadResume;