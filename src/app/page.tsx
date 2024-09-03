
import About from "@/components/About";
import AboutTwo from "@/components/AboutTwo";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Proyects from "@/components/Proyects";
import Quote from "@/components/Quote";
import { Service } from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">Pixology</a>

      <nav className="navbar" data-navbar>

        <div className="wrapper">
          <a href="#" className="logo">Pixology</a>

          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            icon
          </button>
        </div>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li className="navbar-item">
            <a href="#service" className="navbar-link" data-nav-link>Services</a>
          </li>

          <li className="navbar-item">
            <a href="#feature" className="navbar-link" data-nav-link>Features</a>
          </li>

          <li className="navbar-item">
            <a href="#project" className="navbar-link" data-nav-link>Portfolio</a>
          </li>

          <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
          </li>

        </ul>

      </nav>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span aria-hidden="true"></span>
      </button>

      <a href="#" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

 
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">
              Building Digital <span className="has-before">Product</span>, Brand and Experience
            </h1>

            <p className="hero-text">
              At Pixology we specialize in designing, building, shipping and scaling beautiful, usable products with
              blazing-fast
              efficiency
            </p>

            <div className="wrapper">
              <a href="#" className="btn btn-primary has-before has-after">How It Works</a>

              <button className="hero-btn" aria-label="pixology promo">
                <span aria-hidden="true"></span>

                <span className="span">Behind the scenes</span>
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





{/* 
      <!-- 
        - #FEATURE
      --> */}

      <section className="section feature" id="feature" aria-label="feature">
        <div className="container">

          <figure className="feature-banner">
            <img src="/feature-banner.png" width="582" height="585" loading="lazy" alt="feature banner"
              className="w-100"/>
          </figure>

          <div className="feature-content">

            <p className="section-subtitle has-before">Why Choose us</p>

            <h2 className="h2 section-title">
              Specialist in aviding clients of financial <span className="has-before">challenges</span>
            </h2>

            <ul className="feature-list">

              <li>
                <div className="feature-card">

                  <div className="card-icon" >
                    <span aria-hidden="true"></span>
                  </div>

                  <div>
                    <h3 className="h3 card-title">Fast working process</h3>

                    <p className="card-text">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon" >
                    <span aria-hidden="true"></span>
                  </div>

                  <div>
                    <h3 className="h3 card-title">Didicated team</h3>

                    <p className="card-text">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon">
                    <span aria-hidden="true"></span>
                  </div>

                  <div>
                    <h3 className="h3 card-title">24/7 hours support</h3>

                    <p className="card-text">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>




{/* 
      <!-- 
        - #PROJECT
      --> */}

      <section className="section project" id="project" aria-label="project">
        <div className="container">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Pixology complete <span className="has-before">project</span>
          </h2>

          <ul className="filter-list">

            <li>
              <button className="filter-btn active" data-filter-btn>Website</button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn>iOS App</button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn>Branding Design</button>
            </li>

          </ul>

          <ul className="grid-list">

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder" >
                  <img src="/project-1.jpg" width="835" height="429" loading="lazy" alt="Book art design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">Book art design</a>
                  </h3>

                  <a href="#" className="card-tag">Branding</a>
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
                    <a href="#" className="card-title">Graphic Design</a>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-3.jpg" width="416" height="429" loading="lazy" alt="3d Digital Art"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">3d Digital Art</a>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src="/project-4.jpg" width="416" height="429" loading="lazy" alt="Web Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">Web Design</a>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div className="project-card">

                <figure className="card-banner img-holder" >
                  <img src="/project-5.jpg" width="416" height="429" loading="lazy"
                    alt="Mobile App Design" className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">Mobile App Design</a>
                  </h3>

                  <a href="#" className="card-tag">Design</a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>




{/* 
      <!-- 
        - #NEWSLETTER
      --> */}

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




{/* 
      <!-- 
        - #BLOG
      --> */}

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
                    At Pixology we specialize in designing, building, shipping and scaling beautifu. At Pixology we
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

    </article>
  </main>





  {/* <!-- 
    - #FOOTER
  --> */}

  <footer className="footer">
    <div className="container">

      <div className="footer-top section">

        <div className="footer-brand">

          <p className="footer-list-title">About Pixology</p>

          <p className="footer-text">
            A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
          </p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <span ></span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <span ></span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <span ></span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <span ></span>
              </a>
            </li>

          </ul>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Usefull Links</p>
          </li>

          <li>
            <a href="#" className="footer-link">Contact us</a>
          </li>

          <li>
            <a href="#" className="footer-link">How it Works</a>
          </li>

          <li>
            <a href="#" className="footer-link">Create</a>
          </li>

          <li>
            <a href="#" className="footer-link">Explore</a>
          </li>

          <li>
            <a href="#" className="footer-link">Terms & Services</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Community</p>
          </li>

          <li>
            <a href="#" className="footer-link">Help Center</a>
          </li>

          <li>
            <a href="#" className="footer-link">Partners</a>
          </li>

          <li>
            <a href="#" className="footer-link">Suggestions</a>
          </li>

          <li>
            <a href="#" className="footer-link">Blog</a>
          </li>

          <li>
            <a href="#" className="footer-link">Newsletters</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Instagram post</p>
          </li>

          <li>
            <ul className="insta-post">

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-1.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-2.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-3.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-4.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-5.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src="/insta-post-6.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" className="img-cover"/>
                  </figure>

                  <a href="#" className="card-content">
                    <span aria-hidden="true"></span>
                  </a>

                </div>
              </li>

            </ul>
          </li>

        </ul>

      </div>

      <div className="footer-bottom">

        <p className="copyright">
          &copy; 2022 Pixology. All Rights Reserved by codewithsadee
        </p>

        <ul className="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link">Terms and conditions</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Privacy policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Login / Signup</a>
          </li>

        </ul>

      </div>

    </div>
  </footer>















      {/* <Hero/>
      <Service/>
      <About/>
      <AboutTwo/>
      <Proyects/>
      <Quote/>
      <ContactForm/> */}
    </>
  );
}
