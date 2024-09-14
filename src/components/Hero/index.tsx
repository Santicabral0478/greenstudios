import Image from "next/image";
import { FunctionComponent } from "react";

export const Hero: FunctionComponent = ()=>{
    return(
        <>
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">
              Creamos soluciones de <span className="has-before">software </span> quen tu gjygusygio.
            </h1>

            <p className="hero-text">
              Diseñamos y desarrollamos aplicaciones web de p stfhddtyh5 de +iurssafío            
            </p>

            <div className="wrapper">
              <a href="#" className="btn btn-primary has-before has-after">How It Works</a>

              <button className="hero-btn" aria-label="Green Studios promo">
                <span aria-hidden="true"></span>

                <span className="span">sygd</span>
              </button>
            </div>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                  <span></span>

                  <span className="span">Facebook</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <span></span>

                  <span className="span">Youtube</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <span ></span>

                  <span className="span">Twitter</span>
                </a>
              </li>

            </ul>

          </div>

          <figure className="hero-banner">
            <img src="/hero-banner.png" width="794" height="637" alt="hero banner" className="w-100"/>
          </figure>

        </div>
      </section>
      </>
    )
}

export default Hero;