import { FunctionComponent } from "react";

export const Service: FunctionComponent = ()=>{
    return(
        <section className="section service" id="service" >
            <div className="container">
    
            <h2 className="h2 section-title">Nuestras Soluciones</h2>
    
            <p className="section-text">
                Creamos experiencias en línea que impresionan y funcionan de manera excepcional.
            </p>
    
            <div className="serv-contenedor">
    
                <div className="serv2 serv-article_contenedor">
                <div className="content-serv cserv2">
                    <img src="/web.jpg" alt="gif diseño grafico"/>
                </div>
                <p className="serv-description"><span><i className="fa-solid fa-check"></i> Diseño y desarrollo web personalizado:</span> Sitios Web únicos y atractivos  </p>
                </div>
                <div className="serv3 serv-article_contenedor">
                <div className="content-serv scerv3">
                    <img src="/seo.jpg" alt="social ads"/>
                </div>
                <p className="serv-description"><span><i className="fa-solid fa-check"></i> Optimización para motores de búsqueda (SEO):</span> Ayuda a mejorar tu visibilidad en línea.</p>
                </div>
                <div className="serv4 serv-article_contenedor">
                <div className="content-serv">
                    <img src="/ads.jpg" alt=""/>
                </div>
                <p className="serv-description"><span><i className="fa-solid fa-check"></i> Campañas efectivas en Google Ads:</span> Diseño y gestión de campañas publicitarias.</p>
                </div>
                <div className="serv5 serv-article_contenedor">
                <div className="content-serv scerv5">
                    <img src="/soporte.png" alt=""/>
                </div>
                <p className="serv-description"><span><i className="fa-solid fa-check"></i> Mantenimiento y actualización:</span> Mantenimiento Constante para mantener la Web actualizada.</p>
                </div>
                
            </div>
    
            </div>
        </section>
    )
}