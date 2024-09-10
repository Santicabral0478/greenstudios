import { FunctionComponent } from "react";

export const Quote: FunctionComponent = ()=>{
    return(
      <section className="section blog" id="blog" aria-label="blog">
        <div className="container">

          <p className="section-subtitle text-center has-before">Blog Post</p>

          <h2 className="h2 section-title text-center">
            Popular <span className="has-before">blog post</span>
          </h2>

          <ul className="blog-list">

            <li>
              <div className="blog-card large">

                <figure className="card-banner">
                  <img src="/blog-1.jpg" width="644" height="363" loading="lazy"
                    alt="Godaddy user flow solution..." className="img-cover"/>
                </figure>

                <div className="card-content">

                  <div className="wrapper">
                    <a href="#" className="tag">Development</a>

                    <a href="#" className="publish-date">
                      <span aria-hidden="true"></span>

                      <span className="span">July 22, 2022</span>
                    </a>
                  </div>

                  <h3>
                    <a href="#" className="card-title">Godaddy user flow solution...</a>
                  </h3>

                  <p className="card-text">
                    At Green Studios we specialize in designing, building, shipping and scaling beautifu. At Green Studios we
                    specialize in designing,
                    building, shipping and scaling beautiful.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src="/blog-2.jpg" width="202" height="162" loading="lazy"
                    alt="Godaddy user flow solution for every individual" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <div className="wrapper">
                    <a href="#" className="tag">Development</a>

                    <a href="#" className="publish-date">
                      <span aria-hidden="true"></span>

                      <span className="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Godaddy user flow solution for every individual</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src="/blog-3.png" width="202" height="162" loading="lazy"
                    alt="Business solution for every individual" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <div className="wrapper">
                    <a href="#" className="tag">Development</a>

                    <a href="#" className="publish-date">
                      <span aria-hidden="true"></span>

                      <span className="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Business solution for every individual</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src="/blog-4.png" width="202" height="162" loading="lazy"
                    alt="How to gain pro experience ar figma update version" className="img-cover"/>
                </figure>

                <div className="card-content">

                  <div className="wrapper">
                    <a href="#" className="tag">Development</a>

                    <a href="#" className="publish-date">
                      <span aria-hidden="true"></span>

                      <span className="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">How to gain pro experience ar figma update version</a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    )
}

export default Quote;