import AlertBad from "../AlertBad";
import AlertSucces from "../AlertSucces";
import CardReviewTwo from "../CardReviewTwo";

export interface IReview {
  id: number,
  stars: number,
  company: string,
  review: string, 
  img: string,
  position: string,
}

export const ReviewsTwo = ()=>{

  const reviews: IReview[] = [
    {
      id: 1,
      stars: 3,
      company: "apple",
      review: "Lorem ipsum dolor sit amet consectetur ingt. vkjdfkd  moldgsdfglitia, molestiae quas jsbddjsht commodi repudiandae consequuntur.",
      img: "/about-1.png",
      position: "co funder",
    },
    {
      id: 2,
      stars: 5,
      company: "microsoft",
      review: "Lorem ipsum dolor sit amet , molestiae int khbdlor sit amet , as yd3 olejhvkjhstiae quas velrepudiandae consequuntur.",
      img: "/about-2.png",
      position: "coo microsoft",
    },
    {
      id: 3,
      stars: 4,
      company: "samsumg",
      review: "nchsdflor sit amet , iy45fhbe quas vel  dolor sit amet , stiae quas ghfgnfg43 quuntur.",
      img: "/about-3.png",
      position: "founder",
    }
  ]

    return(
        <section className="section project" id="strengths" aria-label="project">
        <div className="container review-section">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Green Studios complete <span className="has-before">project</span>
          </h2>


          <ul className="grid-list">
            {
              reviews.map((itemReview: IReview)=>(
                <li key={itemReview.id}>
                  <CardReviewTwo itemReview={itemReview}/>
                </li>
              ))
            }
          </ul>

        </div>
      </section>
    )
}

export default ReviewsTwo;