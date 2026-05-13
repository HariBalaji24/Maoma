import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const floors = [
        "Ground Floor",
        "First Floor",
        "Second Floor",
        "Third Floor",
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="grid grid-cols-2 gap-8">
                
                {floors.map((floor, index) => (
                    <Link
                        key={index}
                        className="w-52 h-32 bg-white rounded-2xl shadow-lg  flex items-center justify-center
                       text-xl font-semibold text-gray-700
                       cursor-pointer
                       transform transition-all duration-300
                       hover:scale-105 hover:-translate-y-2
                       hover:shadow-2xl hover:bg-blue-500
                       hover:text-white"
                        to={`/${index+1}`}
                    >
                        {floor}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
