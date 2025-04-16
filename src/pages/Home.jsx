import React from 'react';
// import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import ScrollToTop from '../components/ScrollToTop';
import About from '../components/About';

const Home = () => (
  <section className="h-screen ...">
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    {/* Keep Footer only at the bottom */}
    <Footer />
    {/* <ScrollToTop /> */}
  </section>
);

export default Home;
