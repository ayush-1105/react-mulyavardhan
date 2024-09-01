import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ServicesMain from './pages/ServicesMain';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog/Blog1';
import Blog2 from './pages/Blog/Blog2';
import Service1 from './pages/Services/Service1';
import Service2 from './pages/Services/Service2';
import Service3 from './pages/Services/Service3';

import Nopage from './pages/Nopage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicesmain" element={<ServicesMain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        {/* <Route path="*" element={<Nopage />} /> */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
