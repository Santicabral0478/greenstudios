"use client"
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useRef, useState } from "react";

export const Header: FunctionComponent = ()=>{
  const [isOcc, setIsOcc] : any = useState("");
  const [isActive, setIsActive]: any = useState("");
  const scrollTimeout: any = useRef(null);
  const lastScrollY = useRef(0);

  interface ILinks {
    name: string,
    link: string    
  }

  const linksNav: ILinks[] = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Servicios",
      link: "#service"
    },
    {
      name: "Nosotros",
      link: "#about"
    },
    {
      name: "Fortalezas",
      link: "#strengths"
    },
    {
      name: "Procesos",
      link: "#process"
    },
    {
      name: "Proyectos",
      link: "#projects"
    },
    {
      name: "Contacto",
      link: "#contact"
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
        setIsOcc("header-occ");


      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsOcc("")
      }, 1000); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleOnClickActive = ()=>{
    if(isActive === "active"){
      document.body.style.overflow = 'auto';
      setIsActive("")
      }
      else {
        setIsActive("active")
        document.body.style.overflow = 'hidden';
      }
  }

  const handleOnCloseSideNavbar = ()=>{
    setIsActive("");
    document.body.style.overflow = 'auto';
  }

  return(
        <header className={`header ${isOcc}`} data-header>
          <div className="container">

            <Link className="logo" href={"/"}>
              <Image className="logo-width" height={200} width={200} alt="Logo Green Studios" src={"/logo-header.png"}></Image>
              <Image className="logo-responsive" height={200} width={200} alt="Logo Green Studios" src={"/logo-responsive.png"}></Image>
            </Link>

            <nav className={`navbar ${isActive}`} data-navbar>

              <div className="wrapper">
                <Link href={"/"}>
                  <Image className="logo-responsive-nav" height={300} width={300} src={"/logo-footer.png"} alt="Green Studios logo"></Image>
                </Link>

                <button onClick={()=>{
                  handleOnCloseSideNavbar()
                }} className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                </button>
              </div>

              <ul className="navbar-list">

                {
                  linksNav.map((item: ILinks)=>(
                    <li className="navbar-item">
                      <Link href={item.link} className="navbar-link" data-nav-link>{item.name}</Link>
                    </li>
                  ))
                }

              </ul>

            </nav>

            <button onClick={()=>{
              handleOnClickActive()
            }} className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </button>

            <a href="#" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>

            <div onClick={()=>{
              handleOnCloseSideNavbar()
            }} className={`overlay ${isActive}`} data-nav-toggler data-overlay></div>

          </div>
        </header>
    )
}

export default Header;
