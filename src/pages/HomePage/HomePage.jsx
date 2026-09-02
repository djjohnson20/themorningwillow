import "./HomePage.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/home/Hero";
import ServicesPreview from "../../components/home/ServicesPreview";
import AboutPreview from "../../components/home/AboutPreview";
import PhilosophySection from "../../components/home/PhilosophySection";
import ContactSection from "../../components/home/ContactSection";
import LocationSection from "../../components/home/LocationSection";
import BookingCta from "../../components/home/BookingCta";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <PhilosophySection />
        <ContactSection />
        <LocationSection />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
