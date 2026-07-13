import "./HomePage.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/home/Hero";
import ServicesPreview from "../../components/home/ServicesPreview";
import AboutPreview from "../../components/home/AboutPreview";
import BookingCta from "../../components/home/BookingCta";
import FaqPreview from "../../components/home/FaqPreview";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <BookingCta />
        <FaqPreview />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
