import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = ()=>{

    return(
        
      <footer className="footer">
      <div className="container">
  
        <div className="footer-top section">
  
          <div className="footer-brand">
  
            <Image src={"/logo-responsive.png"} alt="Logo Green Studios" width={300} height={300} ></Image>
  
            <p className="footer-text">
              A new way to make the payments easy, reliable and 100. se quat.j,dhbsdh Exerci tationulla
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
              <p className="footer-list-title">Footer</p>
            </li>
  
            <li>
              <a href="#" className="footer-link"></a>
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
              <a href="#" className="footer-link">Contact-form-conts</a>
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
            &copy; 2024 Green Studios. All Rights Reserved 
          </p>
  
        </div>
  
      </div>
    </footer>
    )
}


export default Footer;