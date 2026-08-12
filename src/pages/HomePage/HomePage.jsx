import "./HomePage.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/home/Hero";
import ServicesPreview from "../../components/home/ServicesPreview";
import AboutPreview from "../../components/home/AboutPreview";
import ContactSection from "../../components/home/ContactSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
