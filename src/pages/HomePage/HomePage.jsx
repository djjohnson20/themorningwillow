import "./HomePage.css";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../components/home/Hero/Hero";
import ServicesPreview from "../../components/home/ServicesPreview/ServicesPreview";
import AboutPreview from "../../components/home/AboutPreview/AboutPreview";
import PhilosophySection from "../../components/home/PhilosophySection/PhilosophySection";
import ContactSection from "../../components/home/ContactSection/ContactSection";
import LocationSection from "../../components/home/LocationSection/LocationSection";
import BookingCta from "../../components/home/BookingCta/BookingCta";

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
