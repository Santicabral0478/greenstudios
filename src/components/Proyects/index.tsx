import { IpcNetConnectOpts } from "net";
import Link from "next/link";
import { FunctionComponent } from "react"

export const Proyects: FunctionComponent = ()=>{

  interface IProject {
    id: number,
    image: string,
    name: string,
    link: string,
  } 

  const projects: IProject[] = [
    {
      id: 1,
      image: "/project-1.png",
      name: "SIS S.R.L",
      link: "https://sis-three.vercel.app/",
    },
    {
      id: 2,
      image: "/project-2.png",
      name: "Erth Forge",
      link: "https://erthforge.vercel.app/",
    },
    {
      id: 3,
      image: "/project-3.png",
      name: "ArgVision",
      link: "https://argvision.vercel.app/",
    },
    {
      id: 4,
      image: "/project-4.png",
      name: "Mach 1",
      link: "https://mustang-eta.vercel.app/",
    },
    {
      id: 5,
      image: "/project-5.png",
      name: "Knob 1",
      link: "https://knob1.vercel.app/",
    },
    {
      id: 6,
      image: "/project-6.png",
      name: "Inmo +",
      link: "https://inmoplus-rose.vercel.app/",
    },
    {
      id: 7,
      image: "/project-7.png",
      name: "Weidy Marketing",
      link: "https://inmoplus-rose.vercel.app/",
    },
    {
      id: 8,
      image: "/project-8.png",
      name: "Línea Palermo",
      link: "https://lineapalermo.vercel.app/",
    },
    {
      id: 9,
      image: "/project-9.png",
      name: "Per Tutti",
      link: "https://pertutti.vercel.app/",
    },
  ]

    return(
        <section className="section project" id="projects" aria-label="project">
        <div className="container project-section">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Green <span className="has-before">khdvbdfhb</span>
          </h2>


          <ul className="grid-list">

          {
            projects.map((item: IProject)=>(
              <li key={item.id}>
              <div className="project-card">

                <figure className="card-banner img-holder">
                  <img src={item.image} width="416" height="429" loading="lazy" alt="Graphic Design"
                    className="img-cover"/>
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">{item.name}</span>
                  </h3>

                  <Link target="BLANK" href={item.link} className="card-tag">Ver Sitio</Link>
                </div>

              </div>
            </li>
            ))
          }

          </ul>

        </div>
      </section>
    )
}

export default Proyects;