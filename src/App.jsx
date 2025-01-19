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
import About from './pages/About';  // Add this import

const App = () => {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
