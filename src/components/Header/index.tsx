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


              <Link 
                  href={"https://api.whatsapp.com/send/?phone=5493814131054&text&type=phone_number&app_absent=0"} 
                  className="btn-whatsapp">
                    Hablemos
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </Link>

              <ul className="navbar-list">

                {
                  linksNav.map((item: ILinks)=>(
                    <li className="navbar-item">
                      <Link 
                      onClick={()=>{
                        handleOnCloseSideNavbar()
                      }} 
                      href={item.link} 
                      className="navbar-link" 
                      data-nav-link>
                        {item.name}
                      </Link>
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

            <Link 
              href={"https://api.whatsapp.com/send/?phone=5493814131054&text&type=phone_number&app_absent=0"} 
              className="btn btn-primary has-before has-after">
                Hablemos
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </Link>

            <div onClick={()=>{
              handleOnCloseSideNavbar()
            }} className={`overlay ${isActive}`} data-nav-toggler data-overlay></div>

          </div>
        </header>
    )
}

export default Header;
