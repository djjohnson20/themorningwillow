import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import FaqPage from "./pages/FaqPage/FaqPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
    </Routes>
  );
}

export default App;
