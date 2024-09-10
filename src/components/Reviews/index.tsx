import AlertBad from "../AlertBad";
import AlertSucces from "../AlertSucces";
import CardReview from "../CardReview";

export const Reviews = ()=>{

    return(
        <section className="section project" id="project" aria-label="project">
        <div className="container review-section">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Green Studios complete <span className="has-before">project</span>
          </h2>


          <ul className="grid-list">
            <li>
                 <CardReview/>
            </li>
            <li>
                 <CardReview/>
            </li>
            <li>
                 <CardReview/>
            </li>
          </ul>

        </div>
      </section>
    )
}

export default Reviews;