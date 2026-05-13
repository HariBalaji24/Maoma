import React from 'react'
import { useParams } from 'react-router-dom'

const Floor = () => {
  const { id } = useParams()
  
  const floorConfig = {
    "1": {label:"G", floor: "Ground", color: "bg-emerald-500", bg: "bg-emerald-50" },
    "2": {label:"F", floor: "First", color: "bg-blue-500", bg: "bg-blue-50" },
    "3": {label:"S", floor: "Second", color: "bg-purple-500", bg: "bg-purple-50" },
    "4": {label:"T", floor: "Third", color: "bg-orange-500", bg: "bg-orange-50" }
  }

  // Fallback for undefined IDs
  const config = floorConfig[id] || { label: "?", color: "bg-gray-500", bg: "bg-gray-100" }
  const rooms = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-8 ${config.bg} transition-colors duration-500`}>
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">{config.floor}</span> Floor 
        </h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {rooms.map((room) => (
          <div 
            key={room}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center border-b-4 border-transparent hover:border-current transition-colors"
                 style={{ color: config.color.replace('bg-', '') }}>
              
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">
                  {config.label}F{room}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Floor