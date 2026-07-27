import { motion } from "framer-motion";

function Navbar() {

    return (

        <nav className="
            bg-white
            shadow-md
            sticky
            top-0
            z-50
        ">


            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-4
                flex
                justify-between
                items-center
            ">



                {/* Logo */}

                <h1 className="
                    text-2xl
                    font-bold
                    text-blue-600
                ">

                    AI Resume Analyzer 🚀

                </h1>





                {/* Menu */}

                <div className="
                    flex
                    gap-8
                    items-center
                ">


                    <a
                        href="#home"
                        className="
                        text-gray-700
                        font-semibold
                        hover:text-blue-600
                        "
                    >
                        Home
                    </a>



                    <a
                        href="#resume"
                        className="
                        text-gray-700
                        font-semibold
                        hover:text-blue-600
                        "
                    >
                        Resume Analyzer
                    </a>



                    <a
                        href="#interview"
                        className="
                        text-gray-700
                        font-semibold
                        hover:text-blue-600
                        "
                    >
                        Interview Prep
                    </a>



                    <a
                        href="#about"
                        className="
                        text-gray-700
                        font-semibold
                        hover:text-blue-600
                        "
                    >
                        About
                    </a>


                </div>



            </div>


        </nav>

    );

}


export default Navbar;