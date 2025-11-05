import { ArrowRight } from "react-feather"

function ProjectCards({ Color, index, URL, desc, Ftech, Btech, title }) {
    return (
        <div className="" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="bg-white rounded-xl h-full overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-1.5" >
                <div className="h-48 overflow-hidden">
                    <img src={URL} alt="Project 1" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <div className="flex space-x-2">
                            <span className={`${Color[0].bg} ${Color[0].text} text-xs px-2 py-1 rounded`}>{Ftech}</span>
                            <span className={`${Color[1].bg} ${Color[1].text} text-xs px-2 py-1 rounded`}>{Btech}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4">{desc}</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                        View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards
