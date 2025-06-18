import React from 'react'
import Navbar from './Navbar'
import imag from '../assets/header.png'
import OrbitIcons  from './OrbitIcons'

const Header = () => {
    return (
        <div
            className="w-full h-screen"
            style={{ backgroundColor: '#1F2E35', color: 'white' }}
        >
            <Navbar />
            <div className="container mx-auto h-full flex items-center justify-center px-4">
                <div className="grid grid-cols-[60%_40%] gap-4 items-center w-full">
                    <div>
                        <h1 className="font-bold text-7xl mb-4">
                            Tools for Designer, Developer, and Business Owner
                        </h1>
                        <p className="mb-6 text-2xl">
                            Information about the latest and most popular design and developer tools around the world.
                        </p>
                        <button
                            className="bg-blue-400 text-white px-6 text-2xl py-2 rounded hover:bg-blue-600 transition cursor-pointer"
                            style={{ backgroundColor: "#0086D6" }}
                        >
                            Explore now
                        </button>
                    </div>
                    <div>
                        {/* <img src={imag} alt="Header illustration" className="w-full h-auto" /> */}
                        <OrbitIcons/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
