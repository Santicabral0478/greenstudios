import { FunctionComponent } from "react";

export const Service: FunctionComponent = ()=>{
    return(
        <section className="section service" id="service" >
            <div className="container">
    
            <h2 className="h2 section-title">Nuestras Soluciones</h2>
    
            <p className="section-text">
                Creamos experiencias en línea que impresionan y funcionan de manera excepcional.
            </p>
    
            </div>

            <div className="list-service-card">
                <div className="card service-1">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem impsum dolor sit amet</p>

                    <div className="loader-serv">
                        <div className="loader-service"></div>
                        <div className="loader-service"></div>
                        <div className="loader-service"></div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}