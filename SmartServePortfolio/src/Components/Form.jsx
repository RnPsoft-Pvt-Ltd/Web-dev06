import { useEffect, useRef } from "react";
import "./Form.css";
import image from './Images/image.png'
import emailjs from '@emailjs/browser';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Form() {

      const handleSubmit = (e) => {
            e.preventDefault();

            emailjs
                  .sendForm('service_6qdb7ra', 'template_n7g954n', form.current, {
                        publicKey: '5ZKs9U4ECXgbsDJiu',
                  })
                  .then(
                        () => {
                              console.log('SUCCESS!');
                              form.current.reset();
                        },
                        (error) => {
                              console.log('FAILED...', error.text);
                        },
                  );
      }

      const form = useRef();

      useEffect(() => {
            const t1 = gsap.timeline({
                  scrollTrigger: {
                        trigger: '.outerBox',
                        // markers: true,
                        start: '0% 50%',
                  }
            });

            t1.fromTo('#top',
                  {
                        y: '-100%',
                        opacity: 0,
                  },
                  {
                        y: '0%',
                        opacity: 1,
                        duration: 1.5
                  }
            )
                  .fromTo('.down',
                        {
                              y: '100%',
                              opacity: 0
                        },
                        {
                              y: '0%',
                              opacity: 1,
                              duration: 1.5
                        }, "<")
                  .fromTo('.right',
                        {
                              x: '100%',
                              opacity: 0
                        },
                        {
                              x: '0%',
                              opacity: 1,
                              duration: 2
                        }, "<");

            return () => {
                  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
      }, []);

      return (
            <div className="outerBox">
                  <div className="left">
                        <h1 id="top">Reach Out to Us for Cutting-Edge <span>Solutions</span></h1>
                        <p id="top">Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions</p>
                        <form className="down" ref={form} onSubmit={handleSubmit}>
                              <div>
                                    <input type="text" name="user_lastName" placeholder="Last Name" />
                                    <input type="text" name="user_firstName" placeholder="First Name" />
                              </div>
                              <input type="text" name="user_email" placeholder="Email" />
                              <textarea name="message" placeholder="Message"></textarea>
                              <button>Send it</button>
                        </form>
                  </div>
                  <div className="right">
                        <img src={image} alt="Contact Us" />
                  </div>
            </div>
      );
}

export default Form;
