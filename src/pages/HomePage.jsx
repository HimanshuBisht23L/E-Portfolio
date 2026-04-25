import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Award, Briefcase, Code, Coffee, Database, Download, GitHub, Instagram, Layout, Linkedin, Mail, MapPin, Phone, Smartphone, Twitter, Users } from "react-feather";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from '../../data/Projects.json'
import ProjectCards from "../components/ProjectCards";
import { Link } from "react-router-dom";
import Reviews from "../../data/Reviews.json"



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


export default function HomePage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sending, setSending] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
        AOS.refresh();
    }, []);

    const handleNavClick = (e, id) => {
        e && e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMobileOpen(false);
        }
    };


    const SendMessage = async (e) => {
        e.preventDefault();

        setSending(true);

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbyftu-R0TFkmPUZ56EVSKb0CLM89BFH8tw5SvLv7ObEt280flaSVjIfB9LCO6BddeFM/exec", {
                method: "POST",
                body: JSON.stringify(data)
            });

            const result = await res.text();
            console.log("Response:", result);
            alert("Message sent successfully!");

            setName("")
            setEmail("")
            setSubject("")
            setMessage("")

        } catch (err) {
            console.error(err);
            alert("Error sending message!");
        }

        setSending(false);
    };



    useEffect(() => {
        let copy = document.querySelector(".slide-content").cloneNode(true);
        document.querySelector(".slides").appendChild(copy);
    }, [])

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">
            <Navbar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                handleNavClick={handleNavClick}
            />

            <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Hi, I'm <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Himanshu</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                                Full Stack Developer
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-lg">
                                I create beautiful, functional digital experiences with a focus on user-centered design and clean code.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#projects"
                                    onClick={(e) => handleNavClick(e, "projects")}
                                    className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "contact")}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden shadow-xl">
                                    <img src="../../Images/pic1.jpg" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <Code className="text-indigo-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Me</span></h2>
                        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center" data-aos="fade-right">
                            <div className="relative">
                                <div className="w-64 h-64 bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg">
                                    <img src="../../Images/Me.jpg" alt="About" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                            <h3 className="text-2xl font-bold mb-4">Who am I ?</h3>
                            <p className="text-gray-600 mb-6">
                                I'm a passionate designer and developer with over 2 years of experience creating websites. My approach combines aesthetic sensibility with technical expertise to deliver solutions that are both beautiful and functional.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <Award className="text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Experience</h4>
                                        <p className="text-gray-600">2+ Years Working</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Briefcase className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Projects</h4>
                                        <p className="text-gray-600">13+ Completed</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                                        <Users className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Clients</h4>
                                        <p className="text-gray-600">No Clients Yet</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-full mr-4">
                                        <Coffee className="text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Coffee</h4>
                                        <p className="text-gray-600">99+ Cups</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/files/Resume.docx"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                                download
                            >
                                <span>Download Resume</span>
                                <Download className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Projects</span></h2>
                        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            Projects.filter(data => data.index <= 3).map((data) => {
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

                    <div className="text-center mt-12" data-aos="fade-up">
                        <Link to='/projects' className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Skills</span></h2>
                        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-24 h-24 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                                <Code className="text-indigo-600 w-10 h-10" />
                            </div>
                            <h3 className="font-bold mb-2">Frontend</h3>
                            <p className="text-gray-600">HTML, CSS, JavaScript, React, Next</p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <Layout className="text-blue-600 w-10 h-10" />
                            </div>
                            <h3 className="font-bold mb-2">UI/UX Design</h3>
                            <p className="text-gray-600">Figma, User Research</p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-24 h-24 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                <Database className="text-purple-600 w-10 h-10" />
                            </div>
                            <h3 className="font-bold mb-2">Backend</h3>
                            <p className="text-gray-600">Node.js, Express, MongoDB, Socket.io</p>
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                            <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <Smartphone className="text-green-600 w-10 h-10" />
                            </div>
                            <h3 className="font-bold mb-2">OS</h3>
                            <p className="text-gray-600">Kali linux, Ubuntu</p>
                        </div>
                    </div>

                    <div className="mt-16" data-aos="fade-up">
                        <h3 className="text-xl font-bold mb-6 text-center">Tools & Technologies</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-gray-100 px-4 py-2 rounded-full">Tailwind CSS</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-full">Git</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-full">GitHub</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-full">Firebase</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-full">Postman</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Touch</span></h2>
                        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                            <h3 className="text-2xl font-bold mb-4">Let's talk about your project</h3>
                            <p className="text-gray-600 mb-8">
                                Have a project in mind or want to discuss potential opportunities? Feel free to reach out and I'll get back to you as soon as possible.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <Mail className="text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <p className="text-gray-600">myroughacc123@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Phone className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Phone</h4>
                                        <p className="text-gray-600">+91 82*****80</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                                        <MapPin className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Location</h4>
                                        <p className="text-gray-600">Dehradun, Uttrakhand</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex space-x-4">
                                <a href="https://github.com/HimanshuBisht23L" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition">
                                    <GitHub className="text-gray-700" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                                    <Twitter className="text-gray-700" />
                                </a>
                                <a href="www.linkedin.com/in/himanshu-bisht-a6b7b8347" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-blue-600 hover:text-white">
                                    <Linkedin />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition">
                                    <Instagram className="text-gray-700" />
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
                            <form className="space-y-6" onSubmit={(e) => SendMessage(e)}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input required onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Name" type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email" type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input required onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Subject" type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea required onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Enter Message..." id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"></textarea>
                                </div>
                                <button disabled={sending} type="submit" className={`flex justify-center items-center cursor-pointer w-full px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 hover:shadow-xl transition active:from-blue-500 active:to-purple-600 ${sending ? "from-blue-600 to-purple-700" : ""}`}>
                                    {
                                        sending ?
                                            <p className="w-2 border-2 p-3 rounded-2xl border-b-transparent animate-spin border-blue-100"></p>
                                            :
                                            "Send Message"
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            <div className="bg-white pt-10 pb-10">
                <h1 className="text-center text-4xl font-bold mb-4">Project <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>Reviews</span></h1>
                <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                <section className="slides overflow-auto pt-20 pb-20 h-fit flex bg-white">

                    <div className="slide-content flex w-fit h-fit">
                        {
                            Reviews.map((review) => {
                                return (
                                    <div className="card cursor-pointer w-[20rem] shrink-0 bg-[#fbf9fa] shadow-xl shadow-black-50 rounded-2xl p-10 ml-5 mr-5 flex flex-col items-center gap-2 min-h-40 transition duration-300 hover:transform hover:-translate-y-1.5">
                                        <img src={review.imgURL} alt="img" className="w-30 h-30 object-cover rounded-4xl" />
                                        <div className="w-full text-center flex flex-col gap-3">
                                            <h2 className="text-center">{review.name}</h2>
                                            <p className="">{review.review}</p>
                                            <b className="text-right">{review.date}</b>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </section>
            </div>

            <Footer
                handleNavClick={handleNavClick}
            />
        </div>
    );
}
