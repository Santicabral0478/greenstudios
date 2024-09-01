import { FunctionComponent } from "react";

export const AboutTwo: FunctionComponent = ()=>{

    return(
        <section className="section about" id="about" >
        <div className="container">
  
          <div className="phone-frame">
            <div className="screen">
                <video controls>
                    <source src="/videosection.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="phone-overlay"></div>
        </div>
  
          <div className="about-content">
  
            <h2 className="h2 section-title spangradient-title">Nosotros</h2>
  
            <p className="section-text">
              Desde que nació Green Studios, nos hemos comprometido y 
              optado por la originalidad y el diseño único en nuestra 
              empresa. Ya sea que seas una figura pública, un profesional, 
              una empresa o simplemente tengas un producto que ofrecer, nos 
              encargaremos de darlo a conocer y presentarlo al mundo.
            </p>
  
  
            <h3 className="h3">Beneficios</h3>
  
            <ul className="about-list">
  
              <li className="about-item">
                <i className="fa-regular fa-circle-check"></i><p className="section-text">
                  Cada sitio web es desarrollado con HTML5, CSS3, y JavaScript. 
                  La personalización y detalles más específicos requeridos por el cliente son nuestra Prioridad .
                </p>
              </li>
  
              <li className="about-item">
                <i className="fa-regular fa-circle-check"></i><p className="section-text">
                  Entrega rápida y eficiente: Entrega de proyectos en plazos ajustados sin comprometer la calidad.
                </p>
              </li>
  
              <li className="about-item">
                <i className="fa-regular fa-circle-check"></i><p className="section-text">
                  Enfoque personalizado y colaborativo: Enfoque personalizado al trabajar contigo para entender tus objetivos y necesidades especificas
                </p>
              </li>
  
              <li className="about-item">
                <i className="fa-regular fa-circle-check"></i><p className="section-text">
                  Transparencia de precios: Transparencia en la estructura de precios. (Sin costes ocultos), brindándote siempre la confianza de saber exactamente en que estas invirtiendo. 
                </p>
              </li>
  
              <li className="about-item">
                <i className="fa-regular fa-circle-check"></i><p className="section-text">
                  Soporte post-lanzamiento Excepcional: Servicio de atención al cliente incluso después de que el proyecto halla finalizado
                </p>
              </li>
  
            </ul>
  
  
          </div>
  
        </div>
      </section>
    )
}

export default AboutTwo;