import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import HipaaRightsPage from "./pages/HipaaRightsPage/HipaaRightsPage";
import NoticeOfPrivacyPracticesPage from "./pages/NoticeOfPrivacyPracticesPage/NoticeOfPrivacyPracticesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
