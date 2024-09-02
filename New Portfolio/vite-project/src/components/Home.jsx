import Navbar from "./Navbar";
import "./Home.css";
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

function Home() {


      const tl = gsap.timeline({ repeat: -1 ,yoyo:false});

      useGSAP(() => {
            tl.from("#ani", {
                  background: "conic-gradient(from 0deg at 50% 50%, #760089 0deg, #000000 360deg)",
                  duration: 0,
                  ease: "linear"
            })
            .to("#ani", {
                  background: "conic-gradient(from 90deg at 50% 50%, #760089 0deg, #000000 360deg)",
                  duration: 4,
                  ease: "elastic.out(0.2, 0.2)" 
            })
            .to("#ani", {
                  background: "conic-gradient(from 180deg at 50% 50%, #760089 0deg, #000000 360deg)",
                  duration: 4,
                  ease: "elastic.out(0.2, 0.2)" 
            })
            .to("#ani", {
                  background: "conic-gradient(from 270deg at 50% 50%, #760089 0deg, #000000 460deg)",
                  duration: 4,
                  ease: "elastic.out(0.2, 0.2)" 
            })
            .to("#ani", {
                  background: "conic-gradient(from 360deg at 50% 50%, #760089 0deg, #000000 360deg)",
                  duration: 4,
                  ease: "elastic.out(0.2, 0.2)" 
            })
            
      })

      return <>
            <div className="container" id="ani">
                  <Navbar/>
                  <div className="title">
                        <h1>TITLE OF <span>PORTFOLIO</span></h1>
                  </div>
                  <div className="para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa perferendis laboriosam commodi eos reprehenderit, debitis dolores, neque dignissimos ab ducimus animi saepe autem? Alias eaque nulla eligendi illo reiciendis voluptate accusamus, autem deleniti fugit, perspiciatis ut dolore tempora nobis culpa, ex hic error ducimus debitis quod suscipit praesentium molestiae. Molestiae!</p>
                  </div>
                  <button><span>GET STARTED</span></button>
            </div>
      </>
}
export default Home;