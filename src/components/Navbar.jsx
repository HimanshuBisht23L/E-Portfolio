import { Menu } from "react-feather"

function Navbar({ mobileOpen, setMobileOpen, handleNavClick }) {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="text-xl font-bold bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                            }}
                        >
                            Portfolio
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-gray-700 hover:text-indigo-600 transition">
                            Home
                        </a>
                        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-gray-700 hover:text-indigo-600 transition">
                            About
                        </a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="text-gray-700 hover:text-indigo-600 transition">
                            Projects
                        </a>
                        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="text-gray-700 hover:text-indigo-600 transition">
                            Skills
                        </a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-gray-700 hover:text-indigo-600 transition">
                            Contact
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            id="menu-btn"
                            className="text-gray-700"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen((s) => !s)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${mobileOpen ? "" : "hidden"} md:hidden bg-white py-2 px-4 shadow-lg`}>
                <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="block py-2 text-gray-700 hover:text-indigo-600 transition">Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="block py-2 text-gray-700 hover:text-indigo-600 transition">About</a>
                <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="block py-2 text-gray-700 hover:text-indigo-600 transition">Projects</a>
                <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="block py-2 text-gray-700 hover:text-indigo-600 transition">Skills</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="block py-2 text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
