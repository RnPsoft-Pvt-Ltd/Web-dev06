// src/components/FeatureSection.js
import React from 'react';
import './WhyAI.css';

const features = [
  {
    title: "Accessibility",
    description: "Our AI is available 24/7, providing you with support whenever you need it, whether it's late at night before an exam or during a weekend of career planning."
  },
  {
    title: "Accessibility",
    description: "Our AI is available 24/7, providing you with support whenever you need it, whether it's late at night before an exam or during a weekend of career planning."
  },
  {
    title: "Accessibility",
    description: "Our AI is available 24/7, providing you with support whenever you need it, whether it's late at night before an exam or during a weekend of career planning."
  },
  {
    title: "Accessibility",
    description: "Our AI is available 24/7, providing you with support whenever you need it, whether it's late at night before an exam or during a weekend of career planning."
  },
  {
    title: "Accessibility",
    description: "Our AI is available 24/7, providing you with support whenever you need it, whether it's late at night before an exam or during a weekend of career planning."
  }
];

const WhyAI = () => {
  return (
    <div className="feature-section" id='WhyAI'>
      <h1>Why Our AI is Perfect for Your College Journey?</h1>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyAI;
