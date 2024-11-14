import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommunityGroups from './components/CommunityGroups';
import CommunityHighlights from './components/CommunityHighlights';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function HomePage() {
  return (
    <>
      <Hero />
      <CommunityGroups />
      <CommunityHighlights />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;