import About from "@/src/pages/About";
import Advantages from "@/src/pages/Advantages";
import CompanySlider from "@/src/pages/CompanySlider";
import Faq from "@/src/pages/Faq";
import Footer from "@/src/pages/Footer";
import Hero from "@/src/pages/Hero";
import Navbar from "@/src/pages/Navbar";
import Services from "@/src/pages/Services";
import Team from "@/src/pages/Team";
import Target from "@/src/pages/Target";
import Testimonial from "@/src/pages/Testimonial";
import LetsStart from "@/src/pages/LetsStar";
import Promise from "@/src/pages/Promise";
import WhyChoseeUs from "@/src/pages/WhyChoseeUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <a href="https://wa.me/7439968060" className="fixed bottom-2 left-2 z-50 h-10 w-10">
        {/* hellow */}
        <Image src={"/whatsapp.png"} fill alt="whatsappIcon" className="absolute"/>
      </a>
    <main >
      <Navbar />
      <Hero />
{/* WHY CHOSE US */}
      <WhyChoseeUs />
      <Target />
      <Services />
{/* GET IN TOUCH */}
      <Promise/>
      {/* <Testimonial /> */}
      <About />
      {/*<Faq />*/}
      <LetsStart/>
      <Footer />


      {/* <CompanySlider /> */}
      {/* <Team/> */}
      {/*
        <Advantages/>
         */}
    </main>
    </>
  );
}
