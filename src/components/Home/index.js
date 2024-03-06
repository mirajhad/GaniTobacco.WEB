import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/img3.jpg";
import img2 from "../../assets/OIP.jpeg";
const Home = () => {
  return (
  <>
   <div className="home">
      <div className="header pb-8">
        <h1 className="text-4xl font-bold text-[#e29c4a] mb-2">Welcome to Gani Tobacco</h1>
        <p className="text-white">Choose Life, Not Tobacco: Ignite Hope, Not Cancer.</p>
      </div>
      <div className="features flex space-x-4 mb-8">
        <div className="feature flex-1 p-4 border rounded-lg bg-white shadow-md">
          {/* <h2 className="text-lg font-semibold mb-2">Modern Design</h2> */}
          <img src={img1} alt="" className="w-full"/>
        </div>
        <div className="feature flex-1 p-4 border rounded-lg bg-white shadow-md">
          {/* <h2 className="text-lg font-semibold mb-2">Responsive Layout</h2> */}
          <img src={img2} alt="" className="w-full"/>
        </div>
        
      </div>
      <div className="cta bg-[#220500d4] p-8 rounded-lg text-center">
        <h2 className="text-2xl text-white font-semibold mb-4">Book Your Order Today!</h2>
        <Link to="/order" className="px-4 py-2 text-white bg-[#6f3702] rounded-lg hover:bg-transparent hover:border-[1px] hover:border-[#8f3d15] focus:outline-none">
          Book Now
        </Link>
      </div>
    </div>
  </>
  );
};

export default Home;
