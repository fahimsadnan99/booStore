import React from 'react'
import "../Style/Hero.css"
import Hero from "../components/Hero/index"
import Banner from '../components/Banner/index'
import OurTracks from "../components/OurTrack/index"
import Primium from "../components/PrimiumLearning/page"
import StudentSay from "../components/StudentSay/index"
import Track from '../components/Track/Track'
import Subscribe from '../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <OurTracks></OurTracks>
      <Primium></Primium>
      <StudentSay></StudentSay>
      <Track></Track>
      <Subscribe></Subscribe>
      
      
    </div>
  )
}

export default Home