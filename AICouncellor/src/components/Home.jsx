import React, { useState, useEffect } from 'react';
import './Home.css';
import analysis from './Images/analysisIcon.png';
import assistance from './Images/assistanceIcon.png';
import networks from './Images/networksIcon.png';

export default function Home() {
  const [sentences, setSentences] = useState([
    "Personalized guidance and support for all your academic and career needs.",
    "Tailored Insights and Assistance for Academic and Professional Needs."
  ]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedFor, setDisplayedFor] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < sentences[currentSentenceIndex].split(" ").length - 1) {
        setCurrentWordIndex(prev => prev + 1);
      } else {
        if (displayedFor < 2000) {
          setDisplayedFor(prev => prev + 500);
        } else {
          setDisplayedFor(0);
          setCurrentWordIndex(0);
          setCurrentSentenceIndex(prev => (prev + 1) % sentences.length);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentWordIndex, currentSentenceIndex, sentences, displayedFor]);

  return (
    <div className="homepage">
      <main className="main-content">
        <h1>Meet Your AI Counselor –<br/> Here to Help You Succeed</h1>
        <h2 style={{ maxWidth: '1000px', margin: '0 auto', lineHeight: '1.5', textAlign: 'center' }}>
          {sentences[currentSentenceIndex].split(" ").slice(0, currentWordIndex + 1).join(" ")}
        </h2>
        <div className="features">
          <div className="feature">
            <img src={assistance} alt="1:1 Assistance" />
            <h1>NO<br/>CONTENT</h1>
            <h3>1:1 Assistance</h3>
          </div>
          <div className="feature">
            <img src={analysis} alt="Complete Analysis" />
            <h1>NO<br/>CONTENT</h1>
            <h3>Complete Analysis</h3>
          </div>
          <div className="feature">
            <img src={networks} alt="Networks" />
            <h1>NO<br/>CONTENT</h1>
            <h3>Networks</h3>
          </div>
        </div>
        <a href='/contact' className="advisor-button">Talk to Our Advisor</a>
      </main>
    </div>
  );
}
