import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <AnimatedSection><Home /></AnimatedSection>
          <AnimatedSection><About /></AnimatedSection>
          <AnimatedSection><Skills /></AnimatedSection>
          <AnimatedSection><Project /></AnimatedSection>
          <AnimatedSection><Education /></AnimatedSection>
          <AnimatedSection><Certification /></AnimatedSection>
          <AnimatedSection><Contact /></AnimatedSection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
