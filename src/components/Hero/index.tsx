import Image from "next/image";
import { FunctionComponent } from "react";

export const Hero: FunctionComponent = ()=>{
    return(
        <>
        <section className="section hero" id="home" >
        <div className="container">
  
          <div className="hero-content">
  
            <p className="hero-subtitle">Green Studios Marketing</p>
  
              <div className="loader-hero">
                <p>loading</p>
                <div className="words-hero">
                  <span className="word-hero">buttons</span>
                  <span className="word-hero">forms</span>
                  <span className="word-hero">switches</span>
                  <span className="word-hero">cards</span>
                  <span className="word-hero">buttons</span>
                </div>
              </div>
  
            <p className="hero-text">
              Somos Green Studios, nuestro deber es brindarte un servicio único 
              en cuanto a publicidad digital y desarrollo web refiere. Queremos 
              que tu empresa forme parte de la revolución. Haz que el mundo te conozca Hoy.
            </p>

          </div>

          <div className="loader">
            <div className="light"></div>
            <div className="black_overlay"></div>
          </div>

        </div>
      </section>
      </>
    )
}

export default Hero;