import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, CloudLightning } from "react-feather";
import LearningData from "../../data/learning/SelfLearning.json";

export default function SelfLearningPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/learning" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition font-medium">
                    <ArrowLeft className="mr-2" size={20} /> Back to Learning Options
                </Link>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Self <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Learning Notes</span></h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}></div>
                </div>

                <div className="space-y-12 pb-20">
                    {LearningData.sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition" data-aos="fade-up">
                            <div className="px-8 py-6 border-b border-indigo-100" style={{ background: "linear-gradient(to right, #eef2ff, #f0fdf4)" }}>
                                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                            </div>
                            <div className="p-8">
                                <div className="mb-6 space-y-4">
                                    {section.paragraphs.map((p, i) => (
                                        <p key={i} className="text-gray-700 leading-relaxed text-lg">{p}</p>
                                    ))}
                                </div>

                                {section.mistakes && (
                                    <div className="mb-6 bg-red-50 rounded-xl p-6 border border-red-100">
                                        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                                            <AlertTriangle className="mr-2" size={20} /> Common Mistakes & Errors
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-red-700">
                                            {section.mistakes.map((mistake, i) => (
                                                <li key={i}>{mistake}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {section.commonMistakes && (
                                    <div className="mb-6 bg-orange-50 rounded-xl p-6 border border-orange-100">
                                        <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                                            <AlertTriangle className="mr-2" size={20} /> Other Common Errors
                                        </h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-orange-700">
                                            {section.commonMistakes.map((mistake, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 mt-1">•</span>
                                                    <span>{mistake}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {section.conclusion && (
                                    <div className="mb-6 bg-green-50 rounded-xl p-6 border border-green-100">
                                        <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                                            <CheckCircle className="mr-2" size={20} /> Conclusion
                                        </h3>
                                        <p className="text-green-700">{section.conclusion}</p>
                                    </div>
                                )}

                                {section.finalThought && (
                                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                        <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                            <CloudLightning className="mr-2" size={20} /> Final Thought
                                        </h3>
                                        <p className="text-blue-700 italic">"{section.finalThought}"</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
