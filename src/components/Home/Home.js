import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
  <>
   <div className="home">
      <div className="header">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">Welcome to Gani Tobacco</h1>
        <p className="text-gray-600">Choose Life, Not Tobacco: Ignite Hope, Not Cancer.</p>
      </div>
      <div className="features flex space-x-4 mb-8">
        <div className="feature flex-1 p-4 border rounded-lg bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">Modern Design</h2>
          <p>Clean and intuitive user interfaces</p>
        </div>
        <div className="feature flex-1 p-4 border rounded-lg bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">Responsive Layout</h2>
          <p>Works seamlessly on all devices</p>
        </div>
        
      </div>
      <div className="cta bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Book Your Order Today!</h2>
        <Link to="/order" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
          Book Now
        </Link>
      </div>
    </div>
  </>
  );
};

export default Home;
