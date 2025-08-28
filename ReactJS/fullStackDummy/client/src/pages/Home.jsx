import React from 'react'

const Home = () => {
  return (
    <>
    <div className="min-h-[89vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-6">Welcome to Home Page</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
            This is a beautiful home page designed with Tailwind CSS. Start building your amazing React app here!
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Get Started
        </button>
    </div>
    </>
  )
}

export default Home