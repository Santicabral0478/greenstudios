
import About from "@/components/About";
import AboutTwo from "@/components/AboutTwo";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Proyects from "@/components/Proyects";
import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import ReviewsTwo from "@/components/ReviewsTwo";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <>
      <Hero/>
      <Service/>
      <About/>
      <Reviews/>
      <Process/>
      <ReviewsTwo/>
      <Proyects/>
      <AboutTwo/>
    </>
  );
}
