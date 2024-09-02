import React from 'react'
import './EnrollmentPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EnrollmentPage() {
    const [type, setType] = useState("text");
    const [placeholder,setPlaceholder] = useState("Email/Phone");
    const navigate = useNavigate();
    
    const handleFocus =()=>{
        setPlaceholder("")
    }

    const handleBlur =()=>{
        setPlaceholder("Email/Phone")
    }

    const handleChange = (e)=>{
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setType('tel');
          } else {
            setType('email');
          }
        setPlaceholder(e.target.value)
        console.log(type)
        console.log(placeholder)
    }


  return (
    <div className='boxBackground'>
    <div className="subscriptionBox">
        <div className="fieldContainer">
            <header className='subHeading'>
                <h2>subscribe.</h2>
                <p>Get Exclusive Updates, Tips, and Resources Delivered to Your Inbox</p>
            </header>
            <input onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className='textArea' type={type} placeholder={placeholder}/>
            <div className="nextButtons">
                <button type='button' className="subscribeButton">Subscribe</button>
                <button type='button' className="skipButton" onClick={()=>navigate('/')}>Skip</button>
            </div>
        </div>
    </div>
    </div>
  )
}
