import React from 'react';
import "@fontsource/poppins";
import HeaderTop from './components/HeaderTop';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import FindWork from './pages/FindWork';
import LearnDesign from './pages/LearnDesign';
import GoPro from './pages/GoPro';
import HireDesigner from './pages/HireDesigner';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';  // Correct import path
import SignUp from './pages/SignUp';  // Correct import path
import Freelance from './pages/Freelance';  // Add this import
import About from './pages/About';
import Careers from './pages/Careers';  // Add this import
import Support from './pages/Support';
import MediaKit from './pages/MediaKit';
import Testimonial from './pages/Testimonial';
import Terms from './pages/Terms';  // Add this import
import PrivacyPolicy from './pages/PrivacyPolicy';
import Explore from './pages/Explore';
import Podcast from './pages/Podcast';
import Conduct from './pages/Conduct';
import Designers from './pages/Designers';
import Company from './pages/Company';
import Advertise from './pages/Advertise';
import Contact from './pages/contact-us';
import FaviconImage from './assets/favicon.ico';
import Favicon from "react-favicon";
import JobsNew from './pages/JobsNew';


const App = () => {
  return (
    <Router>
      <Favicon url={FaviconImage} />

      <div className="app-wrapper max-w-[2000px] mx-auto overflow-hidden">
        <HeaderTop />
        <Header />
        <main className="min-h-screen bg-gray-50">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/find-work" element={<FindWork />} />
            <Route path="/learn-design" element={<LearnDesign />} />
            <Route path="/go-pro" element={<GoPro />} />
            <Route path="/hire-designer" element={<HireDesigner />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/support" element={<Support />} />
            <Route path="/media-kit" element={<MediaKit />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/conduct" element={<Conduct />} />
            <Route path="/designers" element={<Designers />} />
            <Route path="/company" element={<Company />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/jobs/new" element={<JobsNew />} /> {/* Update the path */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

