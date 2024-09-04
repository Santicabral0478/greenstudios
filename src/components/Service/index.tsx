"use client"
import { FunctionComponent, useState } from "react";

export const Service: FunctionComponent = ()=>{
    const [isActiveLoader, setIsActiveLoader] = useState<number>(1);

    const handleOnActiveLoader = (num: number)=>{
      setIsActiveLoader(num)
    }
    
    return(

        <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
              service</span></h2>

              <div className="container-serv">
                <div className="left-serv-container">
                  <ul className="list-loader">

                    <li className={` list-li-container ${ isActiveLoader === 1 ? 'list-li-container-active' : ''}`}>
                      <div className="loader-list-1"></div>
                      <div className="loader-list-1"></div>
                      <div className="loader-list-1"></div>
                    </li>

                    <li className={` list-li-container ${ isActiveLoader === 2 ? 'list-li-container-active' : ''}`}>
                      <div className="phone-list-2">
                        <span className="loader-list-2"></span>
                      </div>
                    </li>

                    <li className={` list-li-container ${ isActiveLoader === 3 ? 'list-li-container-active' : ''}`}>
                      <div className="loader-list-3">
                        <div className="modelViewPort-list-3">
                          <div className="eva-list-3">
                            <div className="head-list-3">
                              <div className="eyeChamber-list-3">
                                <div className="eye-list-3"></div>
                                <div className="eye-list-3"></div>
                              </div>
                            </div>
                            <div className="body-list-3">
                              <div className="hand-list-3"></div>
                              <div className="hand-list-3"></div>
                              <div className="scannerThing-list-3"></div>
                              <div className="scannerOrigin-list-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </li>

                    <li className={` list-li-container ${ isActiveLoader === 4 ? 'list-li-container-active' : ''}`}>
                      <div className="terminal-loader">
                        <div className="terminal-header">
                          <div className="terminal-title">Status</div>
                          <div className="terminal-controls">
                            <div className="control close"></div>
                            <div className="control minimize"></div>
                            <div className="control maximize"></div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="text">Tu sevicio web en línea...</div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>

                <div className="right-serv-container">

                  <ul className="list-serv-items-cont">
                    <li onClick={()=>{
                      handleOnActiveLoader(1)
                    }} style={{background: "#d5e4db"}} className="serv-items">
                      <span className="span-serv"><b>Desarrollo Web a Medida</b></span>
                      <p className={`p-serv-item ${isActiveLoader === 1 ? 'p-serv-item-active' : ''}`}>
                        Ofrecemos soluciones web completamente personalizadas que se adaptan a las necesidades específicas de tu negocio. Ya sea que necesites una landing page para captar leads, un sitio corporativo para fortalecer tu presencia online, o una tienda e-commerce para maximizar tus ventas, desarrollamos plataformas optimizadas para alcanzar tus objetivos. Nuestra experiencia en diseño y desarrollo asegura que cada proyecto sea visualmente atractivo, funcional, y orientado a convertir visitantes en clientes, todo mientras garantizamos la escalabilidad y la seguridad de tu sitio.
                      </p>
                    </li>
                    <li  onClick={()=>{
                      handleOnActiveLoader(2)
                    }} style={{background: "#e2e4d5"}} className="serv-items">
                      <span className="span-serv"><b>Aplicaciones Web</b></span>
                      <p className={`p-serv-item ${isActiveLoader === 2 ? 'p-serv-item-active' : ''}`}>
                        Diseñamos y desarrollamos aplicaciones web dinámicas y aplicaciones web progresivas (PWA) que ofrecen experiencias de usuario similares a las de las aplicaciones nativas, sin necesidad de ser descargadas desde una tienda de aplicaciones. Las PWA funcionan sin conexión, envían notificaciones push, y cargan rápidamente, lo que mejora la retención y satisfacción del usuario. Estas soluciones son ideales para empresas que buscan una presencia móvil robusta y eficiente, sin los altos costos de desarrollo de aplicaciones nativas.
                      </p>
                    </li>
                    <li  onClick={()=>{
                      handleOnActiveLoader(3)
                    }} style={{background: "#e4d5d5"}} className="serv-items">
                      <span className="span-serv"><b>Complementación con IA</b></span>
                      <p className={`p-serv-item ${isActiveLoader === 3 ? 'p-serv-item-active' : ''}`}>
                        Integramos inteligencia artificial en tus soluciones empresariales para potenciar la eficiencia y la toma de decisiones. Desde modelos de reconocimiento de imágenes que automatizan procesos de control de calidad, hasta análisis predictivo que optimiza la gestión de recursos, nuestras implementaciones de IA están diseñadas para transformar datos en información valiosa. Con nuestras soluciones de IA, tu empresa podrá reducir costos, mejorar la precisión operativa, y ofrecer experiencias personalizadas a los clientes.
                      </p>
                    </li>
                    <li  onClick={()=>{
                      handleOnActiveLoader(4)
                    }} style={{background: "#d5dae4"}} className="serv-items">
                      <span className="span-serv"><b>Servicios Web (APIs y Backend)</b></span>
                      <p className={`p-serv-item ${isActiveLoader === 4 ? 'p-serv-item-active' : ''}`}>
                        Desarrollamos servicios web robustos, escalables y seguros que proporcionan la infraestructura esencial para tus aplicaciones. Nuestras soluciones backend incluyen el diseño y desarrollo de APIs eficientes que permiten la integración perfecta con otros sistemas, así como bases de datos optimizadas para manejar grandes volúmenes de información. Nos enfocamos en construir arquitecturas que soporten el crecimiento de tu negocio, garantizando alta disponibilidad, rendimiento superior y protección contra amenazas de seguridad.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

        </div>
      </section>

    )
}