import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SpidermanBgClimber from "../components/SpidermanBgClimber";
import SpidermanClimber from "../components/SpidermanClimber";

const Home = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[var(--bg-primary)]">
      <SpidermanBgClimber />
      <SpidermanClimber />
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /><Footer /></section>
    </div>
  );
};

export default Home;
