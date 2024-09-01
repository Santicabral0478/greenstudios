import { FunctionComponent } from "react"

export const Proyects: FunctionComponent = ()=>{

    return(
        <section className="proyectos" id="proyectos">

            <div className="container">
                <div className="proyect-contenedor">
                    <div className="proy-inf-contenedor">
                        <p className="subtitle-proyect">
                        Proyectos
                        </p>
                        <h4 className="title-proyect"> 
                        Algunos proyectos
                        </h4>
                        <p className="proyect-descrip">
                        Explora algunos proyectos que capturan nuestro potencial y estilo 
                        </p>
            
                        <a href="https://api.whatsapp.com/send?phone=+543814131054&text=Quiero cotizar un proyecto: " className="button-proyect">Cotizar un proyecto</a>
                        <a href="#cotiza" className="button-proyect">Consultar planes</a>
                    </div>
                    <div className="proy-contenedor">
                        <a target="_blank" href="https://inmopluss.000webhostapp.com/" className="item-proy1 proyect1 proy-item">
                        <div className="img-proy-contenedor">
                            <img src="/inmoplus.png" alt=""/>
                        </div>
                        <div className="proy-descripcion-contenedor">
                            <p className="img-proy-descripcion">Inmo Plus</p>
                        </div>
                        </a>
                        <a target="_blank" href="https://lineapalermo.000webhostapp.com/index.html" className="item-proy2 proyect2 proy-item">
                        <div className="img-proy-contenedor">
                            <img src="/palermo.png" alt=""/>
                        </div>
                        <div className="proy-descripcion-contenedor">
                            <p className="img-proy-descripcion">Linea Palermo</p>
                        </div>
                        </a>
                        <a target="_blank" href="https://weidymark.000webhostapp.com/index.html" className="item-proy3 proyect3 proy-item">
                        <div className="img-proy-contenedor">
                            <img src="/weidy.png" alt=""/>
                        </div>
                        <div className="proy-descripcion-contenedor">
                            <p className="img-proy-descripcion">Widy Marketing</p>
                        </div>
                        </a>
                        <a target="_blank" href="https://aptraducciones.000webhostapp.com/" className="item-proy4 proyect4 proy-item">
                        <div className="img-proy-contenedor">
                            <img src="/aptraducciones.png" alt=""/>
                        </div>
                        <div className="proy-descripcion-contenedor">
                            <p className="img-proy-descripcion">AP Traducciones</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects;