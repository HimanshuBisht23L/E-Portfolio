import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ArrowLeft, Book } from "react-feather";
import QuestionsData from "../../data/learning/SelfQuestions.json";

export default function SelfQuestionsPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const renderAnswer = (answer) => {
        if (typeof answer === 'string') {
            return <p className="text-gray-700 leading-relaxed text-lg">{answer}</p>;
        } else if (Array.isArray(answer)) {
            return (
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                    {answer.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        } else if (typeof answer === 'object') {
            return (
                <div className="space-y-4">
                    {Object.keys(answer).map((key, i) => (
                        <div key={i} className="bg-indigo-50/50 rounded-lg p-5 border border-indigo-100/50">
                            <h4 className="font-bold text-indigo-700 mb-2">{answer[key].subhead}</h4>
                            <p className="text-gray-700">{answer[key].subdata}</p>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <Link to="/learning" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition font-medium">
                        <ArrowLeft className="mr-2" size={20} /> Back to Learning Options
                    </Link>
                    <a href="/learning/16_SelfQuestions.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-full hover:bg-indigo-200 transition shadow-sm">
                        <Book className="mr-2" size={16} /> View Original PDF
                    </a>
                </div>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Self <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Questions & Answers</span></h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}></div>
                </div>

                <div className="space-y-8 pb-20">
                    {QuestionsData.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 p-6 sm:p-8" data-aos="fade-up">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 pb-5 border-b border-gray-100 flex items-start leading-tight">
                                <span className="text-transparent bg-clip-text mr-3 mt-1 text-2xl" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Q:</span> 
                                {item.Ques.replace(/^Q\d+\.\s*/, '')}
                            </h2>
                            <div className="sm:pl-8 border-l-4 border-indigo-200 mt-2 pl-4 py-1">
                                {renderAnswer(item.Answer)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
