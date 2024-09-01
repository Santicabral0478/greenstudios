import { FunctionComponent } from "react"

export const About: FunctionComponent = ()=>{

    return(
        
        <section className="pict-section"  id="nosotros">
            <div className="container">
            <div className="fort-text-contenedor">
                <h2 className="fort-title">Fortalezas</h2>
                <p className="fort-text">Estos representan solo un vistazo a los beneficios que obtendrás al colaborar con nuestro equipo</p>
            </div>
            <div className="parent">
                <div className="galeria-obj backgimg1 div1">
                    <div className="contenedor-imagen">
                        <div className="img-serv-contenedor">
                        <img className="img-contenedor" src="/paquete.png" alt=""/> <p className="min-titulo">Desarrollo <br/> Web</p>
                        </div>
                    <h3 className="titulo-serv">
                        Entrega rápida y eficiente 
                    </h3>
                    </div>
                </div>
                <div className="galeria-obj backgimg2 div2">
                    <div className="contenedor-imagen">
                    <div className="img-serv-contenedor">
                        <img className="img-contenedor" src="/personalize.png" alt=""/> <p className="min-titulo">Diseño <br/> Web</p>
                    </div>
                    <h3 className="titulo-serv special-atrr">
                    Enfoque <br/> personalizado 
                    </h3>
                </div>
                </div>
                <div className="galeria-obj backgimg3 div3">
                    <div className="contenedor-imagen">
                    <div className="img-serv-contenedor">
                        <img className="img-contenedor" src="/precio.png" alt=""/> <p className="min-titulo">Costos <br/> Ofertas</p>
                    </div>
                    <h3 className="titulo-serv">
                    Transparencia <br/> de precios
                    </h3>                
                </div>
                </div>
                <div className="galeria-obj backgimg4 div4">
                    <div className="contenedor-imagen">
                    <div className="img-serv-contenedor">
                        <img className="img-contenedor" src="/soporte-fort.png" alt=""/> <p className="min-titulo">Soporte <br/> Técnico</p>
                    </div>
                    <h3 className="titulo-serv">
                    Soporte <br/> post-lanzamiento 
                    </h3>                
                </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default About;