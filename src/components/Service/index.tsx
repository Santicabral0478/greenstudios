"use client"
import { FunctionComponent, useState } from "react";

export const Service: FunctionComponent = ()=>{
    
    return(

        <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
              service</span></h2>

            <ul className="grid-list">

            <li>
              <div className="service-card" >

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
              <div className="service-card">

                <div className="card-icon">
                  <img src="/service-icon-4.png" width="30" height="30" loading="lazy"
                    alt="service icon"/>
                </div>

                <h3 className="h3">
                  Human Resources
                </h3>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facere libero suscipit sequi id possimus, nulla officiis quisquam ex nisi consequuntur et officia provident aliquid magnam consectetur iste delectus inventore.</p>

              </div>
            </li>

            </ul>

        </div>
      </section>

    )
}