
import About from "@/components/About";
import AboutTwo from "@/components/AboutTwo";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Proyects from "@/components/Proyects";
import Quote from "@/components/Quote";
import { Service } from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Service/>
      <About/>
      <Proyects/>
      <AboutTwo/>
      <Quote/>
    </>
  );
}
