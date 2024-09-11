"use client"
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react"

export const About: FunctionComponent = ()=>{

  interface IImagesAbout {
    id: number,
    url: string,
  }
  const [currentImage, setCurrentImage] = useState<number>(1)
  const imagesAbout: IImagesAbout[] = [
    {
      id: 1,
      url: "/about-1.png",
    },
    {
      id: 2,
      url: "/about-2.png",
    },
    {
      id: 3,
      url: "/about-3.png",
    }
  ]

  useEffect(() => {
    const setBucle = () => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          const nextImage = prevImage + 1;
          return nextImage > 3 ? 1 : nextImage;
        });
      }, 5500);
  
      return () => clearInterval(interval);
    };
  
    setBucle();
  }, []);

    return(
        
        <section className="section feature" id="about" aria-label="feature">
        <div className="container">

          <figure className="feature-banner">
            <br />
            <br />
            <br />
            <div className="image-relative-about-container">
            {
              imagesAbout.map((item: IImagesAbout)=>(
              <Image key={item.id} src={item.url} width={582} height={582} loading="lazy" alt="Nosotros Green Studios"
              className={`w-100 image-slider-about ${currentImage === item.id && 'active-about-image'}`}></Image>
              ))
            }
            </div>
          </figure>

          <div className="feature-content">

            <p className="section-subtitle has-before">Why Choose us</p>

            <h2 className="h2 section-title">
              Specialist in aviding clients of financial <span className="has-before">challenges</span>
            </h2>

            <ul className="feature-list-d">

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title">Fast working process</h3>

                    <p className="card-text">
                      At Green Studios we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title">Didicated team</h3>

                    <p className="card-text">
                      At Green Studios we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title">24/7 hours support</h3>

                    <p className="card-text">
                      At Green Studios we specialize in designing, building, 
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
    )
}

export default About;