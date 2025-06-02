import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize MouseFollower
    new MouseFollower({
      el: document.querySelector(".mouse-follower"),
      speed: 0.1,
      ease: "power3.out",
    });

    // Initialize Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.aos').forEach(item => observer.observe(item));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="mouse-follower"></div>
        <div className="brush"></div>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;