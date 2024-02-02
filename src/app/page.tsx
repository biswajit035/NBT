import About from "@/pages/About";
import Advantages from "@/pages/Advantages";
import CompanySlider from "@/pages/CompanySlider";
import Faq from "@/pages/Faq";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Navbar from "@/pages/Navbar";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Testimonial from "@/pages/Testimonial";

export default function Home() {
  return (
    <main className="px-2 md:px-10 lg:px-20">
        <Navbar/>
        {/* <Hero/>
        <CompanySlider/>
        <About/>
        <Services/>
        <Advantages/>
        <Testimonial/>
        <Faq/>
        <Team/>
        <Footer/> */}
    </main>
  );
}
