import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommunityGroups from './components/CommunityGroups';
import CommunityHighlights from './components/CommunityHighlights';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import JobUpdates from './components/Jobs';
import StartupCategories from './components/Startups';
import LocationBasedCommunities from './components/Locationsbasedcommunity';
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import About from './pages/About';


function HomePage() {
  return (
    <>
      <Hero />
      <CommunityHighlights />
      <CommunityGroups />
      <LocationBasedCommunities />
      <JobUpdates />
      <StartupCategories />
      <Testimonials />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* New Route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy */}
          <Route path="/terms-of-refund" element={<RefundPolicy />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;