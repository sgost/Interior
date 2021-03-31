import React from 'react'
import Banner from '../components/banner'
import ClintStatus from "../components/clintsStatus"
import Cards from '../components/cards'
import ClintReviews from '../components/clintReviews'
import Contact from './contact'
import Footer from '../components/footer'
import "../styles/main.scss"
import Recentproject from "./recentproject"
import '../styles/index.scss'


const Landing = () => {
  return (
    <>
      <Banner />
      <ClintStatus />
      <Cards />
      <Recentproject />
      <ClintReviews />
      <Contact />
      <Footer />
    </>
  )
}
export default Landing;