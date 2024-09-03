import { FunctionComponent } from "react";

export const Service: FunctionComponent = ()=>{
    return(

        <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
              service</span></h2>

          <ul className="grid-list">

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-1.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Product Management</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-2.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Web & Mobile Development</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-3.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" >

                <div className="card-icon">
                  <img src="/service-icon-4.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Human Resources</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-5.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Design and Vreatives</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-6.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Meketing and Communication</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" >

                <div className="card-icon">
                  <img src="/service-icon-7.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Business Development</a>
                </h3>

              </div>
            </li>

            <li>
              <a href="#" className="link-card">
                <span className="span">04 More Service</span>

                <span  aria-hidden="true"></span>
              </a>
            </li>

          </ul>

        </div>
      </section>

    )
}