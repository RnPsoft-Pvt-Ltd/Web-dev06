import React from 'react';
import "./FAQ.css"

export default function FAQ() {
  return (
    <>
        <div className="faq-container">
            <div className="header-section">
                <h1 className='firstHeader'>FAQs</h1>
                <h2 className="secondHeader">Ask us anything</h2>
                <p className="paragraph">Have any questions? We're here to assist you.</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search here"/>
                </div>
            </div>
            <div className="faq-grid">
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div className="faq-item">
                    <span className="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
            </div>
            <div className="contact">
                <p className="paragraph">Still have questions?</p>
                <p className="paragraph">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <button className='contact-btn'>Get in touch</button>
            </div>
        </div>
    </>
   )
}
            