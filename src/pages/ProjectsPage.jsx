import AOS from "aos";
import "aos/dist/aos.css";
import Projects from '../../data/Projects.json'
import ProjectCards from "../components/ProjectCards";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { Link, useNavigate } from "react-router-dom";


const tagColors = [
    [
        { bg: "bg-blue-100", text: "text-blue-800" },
        { bg: "bg-purple-100", text: "text-purple-800" }
    ],
    [
        { bg: "bg-green-100", text: "text-green-800" },
        { bg: "bg-yellow-100", text: "text-yellow-800" }
    ],
    [
        { bg: "bg-red-100", text: "text-red-800" },
        { bg: "bg-blue-100", text: "text-blue-800" }
    ]
];

function ProjectsPage() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
        AOS.refresh();
    }, []);

    return (
        <>
            <section id="projects" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <ArrowLeft
                    size={30}
                    className="bg-[#d6d6d6] text-[#ffffff] p-0.5 cursor-pointer rounded-2xl absolute top-5 left-5 shadow-md transition-all duration-300 hover:bg-[#eee] hover:text-[#a0a0a0] hover:shadow-lg"
                    onClick={() => navigate("/")}
                />

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Projects</span></h2>
                        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            Projects.map((data) => {
                                return (
                                    <ProjectCards
                                        Color={tagColors[data.index % 3]}
                                        index={data.index}
                                        URL={data.imageURL}
                                        desc={data.desc}
                                        Ftech={data.frontend}
                                        Btech={data.backend}
                                        title={data.title}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <p className="mt-10 text-center text-black">Visit all Projects <Link className="text-blue-800 underline hover:text-blue-500" target="_blank" to={"https://github.com/HimanshuBisht23L"}>https://github.com/HimanshuBisht23L</Link> </p>
            </section>

        </>
    )
}

export default ProjectsPage
