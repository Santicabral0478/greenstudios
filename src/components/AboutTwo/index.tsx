import { FunctionComponent } from "react";

export const AboutTwo: FunctionComponent = ()=>{

    return(
      <section className="section contact-form-cont has-bg-image pattern-element" aria-label="contact-form-cont">
        <div className="container">

          <figure className="contact-form-cont-banner">
            <img src="/newsletter-banner.png" width="355" height="356" loading="lazy"
              alt="contact-form-cont banner" className="w-100"/>
          </figure>

          <div className="contact-form-cont-content">

            <p className="section-subtitle has-before">Get every update</p>
            <br />
            <form className="form">
                <div className="title">Contact us</div>
                <input type="text" placeholder="Your email" className="input"/>
                <textarea placeholder="Your message"></textarea>
                
                <button>Submit</button>
            </form>

          </div>

        </div>
      </section>
    )
}

export default AboutTwo;