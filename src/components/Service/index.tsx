"use client"
import { FunctionComponent, useState } from "react";

export const Service: FunctionComponent = ()=>{

  interface IService {
    img: string,
    title: string,
    text: string
  }

  const serviceContent: IService[] = [
    {
      img: "/service-icon-1.png",
      title: "servicio1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facere libero suscipit sequi id possimus, nulla officiis"
    },
    {
      img: "/service-icon-2.png",
      title: "servicio2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facere libero suscipit sequi id possimus, nulla officiis"
    },
    {
      img: "/service-icon-3.png",
      title: "servicio3",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facere libero suscipit sequi id possimus, nulla officiis"
    },
    {
      img: "/service-icon-4.png",
      title: "servicio4",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facere libero suscipit sequi id possimus, nulla officiis"
    }
  ]
    
    return(

        <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
              service</span></h2>

            <ul className="grid-list">

              {
                serviceContent.map((item)=>(
                  <li>
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