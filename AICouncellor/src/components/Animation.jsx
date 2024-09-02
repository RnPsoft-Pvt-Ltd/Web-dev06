import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import './Animation.css';
import { useNavigate } from 'react-router-dom';
function Animation(){
      const navigate = useNavigate();
      let tl=gsap.timeline();

      useGSAP(()=>{
            tl.from("#C",{
                  backgroundColor:"#FFFFFF1A",
                  opacity:0,
                  scale:0.2,
            })
            tl.to("#C",{
                  backgroundColor:"#FFFFFF1A",
                  duration:1.5,
                  left:-10,
                  ease: "elastic.out(0.2, 0.2)" 
            })
            tl.to("#C",{
                  backgroundColor:"#ffffff00",
                  duration:0.1
            })
            tl.to("#C",{
                  backgroundColor:"#ffffff00",
                  x:"13vw",
                  y:-50,
                  rotate:-5,
                  scale:1.3,
                  duration:1,
                  ease: "elastic" 
            })
            tl.to("#C",{
                 x:-50,
                 rotate:270,
                 scale:0.9
            })
            tl.from(".aniText",{
                  opacity:0,
            },"-=0.3")
            tl.from("#btn",{
                  opacity:0,
            },"-=0.3")
            tl.to(".aniText",{
                  opacity:1
            })
            tl.to(".back", {
                  opacity: 0,
                  duration:0,
                  onComplete: () => {
                      document.querySelector('.back').style.backgroundImage = 'url(./backgroundImage.png)';
                  }
            })
            tl.to("#h5",{
                  left:10,
                  duration:1,
                  ease:"ease-out"
            })
            tl.to("#C",{
                  opacity:0,
                  duration:1
             },"-=1")
            .to(".back", {
                  opacity: 1,
                  duration: 1
            },"-=1");
      })

      return <>
            <div className="containerAni">
                  <div className="back"></div>
                  <img id='C' src="./C.png" alt="" />
                  <div className='text'>
                        <h5 id='h5' className='aniText'>AI</h5>
                        <h6 id='h6' className='aniText'>Counselor</h6>
                        <button onClick={()=>navigate('/home')} id='btn'>CLICK HERE</button>
                  </div>
            </div>
      </>
}
export default Animation;