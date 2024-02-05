import About from "@/src/pages/About";
import Advantages from "@/src/pages/Advantages";
import CompanySlider from "@/src/pages/CompanySlider";
import Faq from "@/src/pages/Faq";
import Footer from "@/src/pages/Footer";
import Hero from "@/src/pages/Hero";
import Navbar from "@/src/pages/Navbar";
import Services from "@/src/pages/Services";
import Team from "@/src/pages/Team";
import Testimonial from "@/src/pages/Testimonial";

export default function Home() {
  return (
    <main>
        <Navbar/>
         <Hero/>
        <CompanySlider/>
        <About/>
        <Services/>
        <Testimonial/>
        {/*
        <Advantages/>
        <Faq/>
        <Team/>
        <Footer/> */}
    </main>
  );
}
