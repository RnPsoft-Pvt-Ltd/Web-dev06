import React from 'react';
import bgImage from "./Images/rectanglebg.svg";
import './Benifits.css'

export default function Benifits() {
  return (
    <div className='faq-wrapper'>
      <div className='faq-content'>
        <p className='faq-header'>Benefits of</p>
        <p className='faq-title'>SMART SERVE AI</p>
        <p className='faq-description'>
          Smart Serve AI revolutionizes customer service by providing
          round-the-clock, efficient call handling that ensures no customer query goes unanswered. With advanced natural language processing, it delivers accurate and personalized responses, significantly enhancing customer satisfaction. The AI's ability to seamlessly escalate complex issues to human agents guarantees a smooth customer experience.
        </p>
      </div>
      <div className='faq-image-wrapper'>
        <img className='faq-image' src={bgImage} alt="Background" />
        <div className='slideshow-container'>
          <div className='tech-slideshow forward'>
            <div className='mover'>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className='left1 rectangle'><p>System<br/>Integration</p></div>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <div key={index + 10} className='left1 rectangle'><p>System<br/>Integration</p></div>
              ))}
            </div>
          </div>
          <div className='tech-slideshow reverse'>
            <div className='mover'>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className='right1 rectangle'><p>System<br/>Integration</p></div>
              ))}
              {Array.from({ length: 1}).map((_, index) => (
                <div key={index + 10} className='right1 rectangle'><p>System<br/>Integration</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}