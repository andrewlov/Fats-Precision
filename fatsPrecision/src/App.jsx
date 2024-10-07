import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import './index.css'
import Services from './Components/Services/Services.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Samples from './Components/Samples/Samples.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our SERVICES" title="What We Offer"/>
        <Services/>
        <About/>
        <Title subTitle="Gallery" title="Sample Works"/>
        <Samples/>
        <Title subTitle="Facilities" title="Our Machines"/>
      </div>
    </div>
  )
}

export default App