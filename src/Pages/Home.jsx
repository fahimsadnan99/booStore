import React from 'react'
import "../Style/Hero.css"
import Hero from "../components/Hero/index"
import Banner from '../components/Banner/index'
import OurTracks from "../components/OurTrack/index"
import Primium from "../components/PrimiumLearning/index"
import StudentSay from "../components/StudentSay/index"

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <OurTracks></OurTracks>
      <Primium></Primium>
      <StudentSay></StudentSay>
      
      
    </div>
  )
}

export default Home