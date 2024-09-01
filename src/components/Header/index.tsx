import { FunctionComponent } from "react";

export const Header: FunctionComponent = ()=>{
    return(
        <header className="header" >
            <nav className="nav  filter">
                <div className="logocontainer font6 font1"></div>

                <div className="nav__menu" id="nav-menu">

                    <i className="fa-solid fa-xmark" id="nav-close"></i>

                    <ul className="nav__lista">
                        <li className="nav__item">
                            <a href="#home" className="nav__link link__activo">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#service" className="nav__link">Servicios</a>
                        </li>
                        <li className="nav__item">
                            <a href="#nosotros" className="nav__link">Nosotros</a>
                        </li>
                        <li className="nav__item">
                            <a href="#proyectos" className="nav__link">Portafolio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#blog" className="nav__link">Blog</a>
                        </li>
                        <div className="nav__item item-cotiza-wha">
                            <a href="https://api.whatsapp.com/send?phone=+543814131054&text=greenStudios: " className="nav__link">Hablemos <i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                        <div className="nav__item item-cotiza">
                            <a href="#cotiza" className="nav__link btn-primary">COTIZA</a>
                        </div>
                    </ul>

                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;