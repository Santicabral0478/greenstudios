"use client"
import { FunctionComponent, useState } from "react";

export const Service: FunctionComponent = ()=>{

  interface IService {
    id: number,
    img: string,
    title: string,
    text: string
  }

  const serviceContent: IService[] = [
    {
      id: 1,
      img: "/service-icon-1.png",
      title: "Desarrollo de Aplicaciones Web",
      text: "Creamos aplicaciones web personalizadas para mejorar la eficiencia y la experiencia del usuario, adaptadas a tus necesidades y objetivos."
    },
    {
      id: 2,
      img: "/service-icon-2.png",
      title: "Diseño de Sitios Web",
      text: "Diseñamos sitios web atractivos y funcionales que capturan la esencia de tu marca y optimizan la experiencia de navegación."
    },
    {
      id: 3,
      img: "/service-icon-3.png",
      title: "Soporte y Mantenimiento",
      text: "Ofrecemos soporte continuo y mantenimiento para asegurar que tu plataforma funcione sin problemas y se mantenga actualizada."
    },
    {
      id: 4,
      img: "/service-icon-4.png",
      title: "Consultoría Personalizada",
      text: "Brindamos asesoría personalizada para ayudarte a desarrollar y optimizar tus proyectos digitales, adaptándonos a tus necesidades específicas."
    }
  ]
  

    return(

        <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Nuestros Servicios</p>

          <h2 className="h2 section-title text-center">Servicios Digitales <span className="has-before">Personalizados</span></h2>

            <ul className="grid-list">

              {
                serviceContent.map((item)=>(
                  <li key={item.id}>
                    <div className="service-card">
    
                      <div className="card-icon">
                        <img src={item.img} width="30" height="30" loading="lazy"
                          alt="service icon"/>
                      </div>
    
                      <h3 className="h3">
                        {item.title}
                      </h3>
    
                      <p>{item.text}</p>
                
                    </div>
                  </li>
                ))
              }

            </ul>

        </div>
      </section>

    )
}