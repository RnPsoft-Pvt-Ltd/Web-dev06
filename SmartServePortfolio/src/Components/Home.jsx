import React from 'react'
import './Home.css'
import callImage from "./Images/call-image.png"

export default function Home() {
  return (
    <div className='main-container'>
        <div className="cus-satisfaction">
            <h1 className='main-header'>ELEVATE CUSTOMER SATISFACTION
                WITH SMART SERVE AI
            </h1>
            <p className='feature-texts'>
                Efficient, Reliable, and Available 24/7 to Enhance 
                Your Customer Support.AI-Powered Solutions to 
                Meet Your Customer's Needs Anytime, Anywhere.
            </p>
            <button className='getStarted-btn'>Get Started</button>
        </div>
        <div className="container">
        <img src={callImage} alt="Call-Image" className="main-image"/>
        <div className="box real-time-analytics">Real-Time Analytics</div>
        <div className="box multi-language-support">Multi-Language Support</div>
        <div className="box system-integration">System Integration</div>
        <div className="box call-reception">24/7 Call Reception</div>
        <div className="box detailed-reporting">Detailed Reporting</div>
        <div className="box scalability">Scalability</div>
      </div>
    </div>
  )
}
