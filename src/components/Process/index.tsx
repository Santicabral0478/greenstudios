

export const Process = ()=>{

    interface ITex {
        title: string,
        title1: string,
        description1: string[],
        title2?: string,
        description2?: string[]
    }

    const textContent: ITex[] = [
        {
            title: "Introduccion",
            title1: "Presentacion Green Studios:",
            description1: ["Procesos", "Herramientas",],
            title2: "Registro de reuniones",
            description2: ["Introduccion al proyecto", "Preguntas", "Compromisos", "Brief"]
        },
        {
            title: "Fase inicial",
            title1: "Compromiso del cliente:",
            description1: ["Logos", "Manual grafico", "Accesos"],
            title2: "Compromisos Green Studios",
            description2: ["Diseño", "Mapa de navegacion"]
        },
        {
            title: "Desarrollo",
            title1: "Implementacion:",
            description1: ["Desarrollo", "QA", "Proceso", "seguimiento", "Registro de reuniones"],
        },
        {
            title: "QA cliente",
            title1: "QA de cliente:",
            description1: ["Documentacion de QA del cliente", "Estabilizacion",],
        },
        {
            title: "Entrega final",
            title1: "Entrega final",
            description1: ["Acta de entrega", "Manual de administracion", "Encuesta de satisfaccion"]
        }
    ]



    return(
        <section className="section feature" id="feature" aria-label="feature">
        <div className="container container-feature">

          <div className="img-select-fase">
            <img src="/feature-banner.png" width="582" height="585" loading="lazy" alt="feature banner"
              className="w-100"/>

            <div className="list-select">
                <button className="select-fase select-button-active">
                    1
                </button>
                <button className="select-fase">
                    2
                </button>
                <button className="select-fase">
                    3
                </button>
                <button className="select-fase">
                    4
                </button>
                <button className="select-fase">
                    5
                </button>
            </div>
          </div>

          <div className="feature-content">

            <p className="section-subtitle has-before">Why Choose us</p>

            {textContent.map((content)=>(
                <>
                <ul className="feature-list">
                
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
      </section>
    )
}

export default Process;