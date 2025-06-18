import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Menyuni yopadigan funksiya
    const closeMenu = () => setMenuOpen(false);

    // Outside click funksiyasi
    useEffect(() => {
        if (!menuOpen) return;

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-[#1F2E35] z-50">
            <div className="container mx-auto flex items-center justify-between h-full px-4">
                {/* Chapda Logo */}
                <div className="flex items-center">
                    <span className="text-white font-bold text-xl">MyLogo</span>
                </div>

                {/* O‘rtada Navbar menyulari (faqat katta ekranlarda) */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="#" className="text-white hover:text-blue-400 transition">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-blue-400 transition">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-blue-400 transition">News</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-blue-400 transition">Contact</a>
                    </li>
                </ul>

                {/* O‘ngda Login tugmasi (faqat katta ekranlarda) */}
                <div className="hidden md:block">
                    <button
                        className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
                        style={{ backgroundColor: "#0086D6" }}
                    >
                        Login
                    </button>
                </div>

                {/* Hamburger menyu tugmasi (faqat kichik ekranlarda) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Kichik ekranlar uchun ochiladigan menyu */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden bg-[#1F2E35] px-4 pb-4 pt-2 z-50 w-full shadow-lg absolute top-16 left-0"
                >
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition block"
                                onClick={closeMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition block"
                                onClick={closeMenu}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition block"
                                onClick={closeMenu}
                            >
                                News
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition block"
                                onClick={closeMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button
                        className="mt-4 w-full text-white px-4 py-2 rounded transition cursor-pointer"
                        style={{ backgroundColor: "#0086D6" }}
                        onClick={closeMenu}
                    >
                        Login
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
