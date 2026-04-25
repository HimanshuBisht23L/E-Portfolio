import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, ArrowLeft } from "react-feather";

export default function LearningPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 pt-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition font-medium">
                    <ArrowLeft className="mr-2" size={20} /> Back to Home
                </Link>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Learning Journey</span></h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">Explore what I've learned from classes, reflections, and the deep questions that shape my understanding and growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto pb-20">
                    {/* Self Learning Card */}
                    <Link to="/learning/self-learning" data-aos="fade-right" className="group block h-full">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2 overflow-hidden h-full flex flex-col border border-gray-100">
                            <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)" }}>
                                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                                <BookOpen className="w-20 h-20 text-indigo-500 transform group-hover:scale-110 transition duration-300" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition">Self Learning</h2>
                                <p className="text-gray-600 mb-6 flex-1">Read my personal insights, takeaways, and lessons learned from various presentations, speeches, and classes.</p>
                                <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition transform">
                                    Explore Notes <ArrowLeft className="ml-2 rotate-180" size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Self Questions Card */}
                    <Link to="/learning/self-questions" data-aos="fade-left" className="group block h-full">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2 overflow-hidden h-full flex flex-col border border-gray-100">
                            <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "linear-gradient(135deg, #fae8ff 0%, #fbcfe8 100%)" }}>
                                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                                <HelpCircle className="w-20 h-20 text-purple-500 transform group-hover:scale-110 transition duration-300" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition">Self Questions</h2>
                                <p className="text-gray-600 mb-6 flex-1">Deep dive into a series of introspective questions, exploring my strengths, weaknesses, motivations, and goals.</p>
                                <span className="inline-flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition transform">
                                    View Answers <ArrowLeft className="ml-2 rotate-180" size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
