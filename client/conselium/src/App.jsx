import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import FeaturedServices from './assets/components/FeaturedServices/FeaturedServices'
import Methodology from './assets/components/Methodology/Methodology'
import InsightsMedia from './assets/components/InsightsMedia/InsightsMedia'
import Ticker from './assets/components/Ticker/Ticker'
import ContactForm from './assets/components/ContactForm/ContactForm'
import Footer from './assets/components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <FeaturedServices/>
      <Methodology/>
      <InsightsMedia/>
      <Ticker/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App