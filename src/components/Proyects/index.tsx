import { FunctionComponent } from "react"

export const Proyects: FunctionComponent = ()=>{

    return(
        <section className="section project" id="project" aria-label="project">
        <div className="container project-section">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Green Studios complete <span className="has-before">project</span>
          </h2>


          <ul className="grid-list">

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">Graphic Design</span>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">Graphic Design</span>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">Graphic Design</span>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

                        <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">Graphic Design</span>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">Graphic Design</span>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    )
}

export default Proyects;