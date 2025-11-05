

function Footer({handleNavClick}) {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }}>
                            Portfolio
                        </a>
                        <p className="text-gray-400 mt-2">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-gray-400 hover:text-white transition">Home</a>
                        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-gray-400 hover:text-white transition">About</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="text-gray-400 hover:text-white transition">Projects</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-gray-400 hover:text-white transition">Contact</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>Designed & Built with ❤️ by Me</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
