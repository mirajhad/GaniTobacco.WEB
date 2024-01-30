import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
const Dashboard = () => {
  return (
    <>
     <Header />
      {/* Moved up the parent div */}
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ul className="mt-4">
            <li className="mb-2"><Link to="#" className="hover:text-gray-300">Home</Link></li>
            <li className="mb-2"><Link to="#" className="hover:text-gray-300">Analytics</Link></li>
            <li className="mb-2"><Link to="#" className="hover:text-gray-300">Settings</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <div className="bg-white p-4 rounded shadow">
            {/* Your dashboard content goes here */}
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
