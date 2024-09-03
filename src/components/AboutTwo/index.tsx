import { FunctionComponent } from "react";

export const AboutTwo: FunctionComponent = ()=>{

    return(
      <section className="section newsletter has-bg-image" aria-label="newsletter"
        style={{backgroundImage: "url('/newsletter-bg.jpg')"}}>
        <div className="container">

          <figure className="newsletter-banner">
            <img src="/newsletter-banner.png" width="355" height="356" loading="lazy"
              alt="newsletter banner" className="w-100"/>
          </figure>

          <div className="newsletter-content">

            <p className="section-subtitle has-before">Get every update</p>

            <h2 className="h2 section-title">Subscribe newslater get latest updates and deals</h2>

            <form action="" className="newsletter-form">
              <input type="email" name="email_address" placeholder="Enter your mail" required className="email-field"/>

              <button type="submit" className="btn btn-secondary has-before has-after">
                <span className="span">Subscribe</span>

                <span aria-hidden="true"></span>
              </button>
            </form>

          </div>

        </div>
      </section>
    )
}

export default AboutTwo;