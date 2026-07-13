import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import HipaaRightsPage from "./pages/HipaaRightsPage/HipaaRightsPage";
import NoticeOfPrivacyPracticesPage from "./pages/NoticeOfPrivacyPracticesPage/NoticeOfPrivacyPracticesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/hipaa-rights" element={<HipaaRightsPage />} />
      <Route
        path="/notice-of-privacy-practices"
        element={<NoticeOfPrivacyPracticesPage />}
      />
    </Routes>
  );
}

export default App;
