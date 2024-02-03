import React from 'react'
import {Home as HomeComponent} from "../../components"
import "./home.css"
const Home = () => {
  return (
    <div className="home-container">
    <div className="background-image">
      {/* Render your HomeComponent */}
      <HomeComponent />
    </div>
  </div>
  )
}

export default Home
