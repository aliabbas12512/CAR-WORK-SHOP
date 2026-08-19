import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PaintBody from "@/components/PaintBody";
import Mechanical from "@/components/Mechanical";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PaintBody />
        <Mechanical />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
