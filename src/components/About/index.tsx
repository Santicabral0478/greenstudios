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

            <p className="section-subtitle has-before">Sobre nosotros</p>

            <h2 className="h2 section-title">
              Por que elegir a <span className="has-before">Green Studios</span>
            </h2>

            <ul className="feature-list-d">

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title"><b>1.</b> Compromiso con la Satisfacción del Cliente</h3>

                    <p className="card-text">
                      En Green Studios, priorizamos tus necesidades y trabajamos estrechamente contigo para superar tus expectativas.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title"><b>2.</b> Innovación con Nuevas Tecnologías</h3>

                    <p className="card-text">
                      Utilizamos inteligencia artificial y las últimas herramientas para ofrecer productos innovadores y eficientes.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div>
                    <h3 className="h3 card-title"><b>3.</b> Tecnologías Modernas y Efectivas</h3>

                    <p className="card-text">
                      Aplicamos las tecnologías más avanzadas para asegurar que tus proyectos sean rápidos, seguros e innovadores. 
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