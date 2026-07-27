function Footer() {

    return (

        <footer className="
            bg-slate-900
            text-white
            mt-16
            py-10
        ">


            <div className="
                max-w-7xl
                mx-auto
                px-6
            ">


                <div className="
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-6
                ">


                    {/* Brand */}

                    <div className="text-center md:text-left">


                        <h2 className="
                            text-2xl
                            font-bold
                            text-blue-400
                        ">

                            AI Resume Analyzer 🚀

                        </h2>



                        <p className="
                            mt-2
                            text-gray-300
                        ">

                            AI-powered resume screening & interview preparation platform

                        </p>


                    </div>







                    {/* Links */}

                    <div className="
                        flex
                        gap-8
                    ">


                        <a
                            href="#"
                            className="
                                text-gray-300
                                hover:text-blue-400
                                transition
                                font-medium
                            "
                        >
                            GitHub
                        </a>




                        <a
                            href="#"
                            className="
                                text-gray-300
                                hover:text-blue-400
                                transition
                                font-medium
                            "
                        >
                            LinkedIn
                        </a>




                        <a
                            href="#"
                            className="
                                text-gray-300
                                hover:text-blue-400
                                transition
                                font-medium
                            "
                        >
                            Email
                        </a>


                    </div>


                </div>







                <div className="
                    mt-8
                    pt-6
                    border-t
                    border-gray-700
                    text-center
                ">


                    <p className="
                        text-gray-400
                        text-sm
                    ">

                        Built with Java • Spring Boot • React.js • MySQL • AI Technologies

                    </p>




                    <p className="
                        mt-2
                        text-gray-500
                        text-sm
                    ">

                        © 2026 AI Resume Analyzer. All Rights Reserved.

                    </p>


                </div>



            </div>


        </footer>

    );

}


export default Footer;