import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Our Story</h2>
            <p>Since 2004 FATS Precision has been supporting its clients for their success. Our highstandards in quality work and  turn around time have helped us grow over the years.</p>
            <p>We take pride in our work and products that we produce for our clients.</p>
            <p>From prototype to production work, we can help you reach your manufacturing productivity.</p>
            <h2>Our Approach</h2>
            <p>You will receive close contact with key personal who will provide you with first hand knowledge of your job in progress.</p>
            <p>Our goal is to achieve 100% satisfaction from all of our clients.  Customer service is our number one priority.  We are here to answer all your questions, and can offer suggestions to help you from the beginning to the end with all of your machining needs.</p>
            <p>We want to build healthy relationships.  We strive to learn from every job and every experience so that we may fully commit to your project.​</p>
            <p>If your company designs products, using high precision components, or​​​​​​​​​​ product assembly,  we are prepared to assist you with your build-to-print requirements.</p>
        </div>
    </div>
  )
}

export default About