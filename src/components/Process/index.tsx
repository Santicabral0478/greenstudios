"use client"
import Image from "next/image"
import { useState } from "react"


export const Process = ()=>{
    const [currentVisibility, setCurrentVisibility] = useState<number>(1)

    interface ITex {
        id: number,
        img: string,
        title: string,
        title1: string,
        description1: string[],
        title2?: string,
        description2?: string[]
    }

    const textContent: ITex[] = [
        {
            id: 1,
            img: "/feature-1.png",
            title: "Introduccion",
            title1: "Presentacion Green Studios:",
            description1: ["Procesos", "Herramientas",],
            title2: "Registro de reuniones",
            description2: ["Introduccion al proyecto", "Preguntas", "Compromisos", "Brief"]
        },
        {
            id: 2,
            img: "/feature-2.png",
            title: "Fase inicial",
            title1: "Compromiso del cliente:",
            description1: ["Logos", "Manual grafico", "Accesos"],
            title2: "Compromisos Green Studios",
            description2: ["Diseño", "Mapa de navegacion"]
        },
        {
            id: 3,
            img: "/feature-3.png",
            title: "Desarrollo",
            title1: "Implementacion:",
            description1: ["Desarrollo", "QA", "Proceso", "seguimiento", "Registro de reuniones"],
        },
        {
            id: 4,
            img: "/feature-4.png",
            title: "QA cliente",
            title1: "QA de cliente:",
            description1: ["Documentacion de QA del cliente", "Estabilizacion",],
        },
        {
            id: 5,
            img: "/feature-5.png",
            title: "Entrega final",
            title1: "Entrega final",
            description1: ["Acta de entrega", "Manual de administracion", "Encuesta de satisfaccion"]
        }
    ]



    return(
        <section className="section feature" id="feature" aria-label="feature">
            <div className="container container-feature">
                <p className="section-subtitle has-before">Why Choose us</p>
            </div>
            <br />
        <div className="container container-feature">

          <div className="img-select-fase">
            <div className="relative-img-container">
                {
                    textContent.map((item)=>(
                        <Image 
                            src={item.img} 
                            height={400} 
                            width={400} 
                            alt={item.title} 
                            className={`img-fase ${currentVisibility === item.id && "img-visible"}`}
                        ></Image>
                    ))
                }
            </div>

            <div className="list-select">
                {
                    textContent.map((item: ITex)=>(
                        <button 
                            className={`select-fase ${ currentVisibility === item.id && 'select-button-active' }`}
                            onClick={()=>{
                                setCurrentVisibility(item.id)
                            }}
                            >
                            {item.id}
                        </button>
                    ))
                }
            </div>
          </div>

          <div className="feature-content">


            <div className="relative-list-container">
            {textContent.map((content: ITex)=>(
                <>
                <ul 
                    className={`feature-list ${currentVisibility === content.id && 'active-list'}`}
                    >
                
                <h2 className="h2">
                  {content.title}
                </h2>
                
                  <li>
                    <div className="feature-card">
                
                      <div>
                        <h3 className="h3 card-title">{content.title1}</h3>
                
                        {
                            content.description1.map((description)=>(
                                <p className="card-text">
                                    {description}
                                </p>
                            ))
                        }
                      </div>

                      <div>
                        {
                            content.title2 && <h3 className="h3 card-title">{content.title2}</h3>
                        }
                
                        {   
                            content.description2 &&
                            content.description2.map((description)=>(
                                <p className="card-text">
                                    {description}
                                </p>
                            ))
                        }
                      </div>
                
                    </div>
                  </li>
                
                </ul>
                </>
            ))            
            }
            </div>


          </div>

        </div>
      </section>
    )
}

export default Process;