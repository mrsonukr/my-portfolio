import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>
          <span className="greet animate-[fade_1s_ease-in-out]"> Hi, I'm </span>
          <span className="username opacity-0 animate-[fade_1s_ease-in-out_1s_forwards]">
            S <span className="sonu"> </span>nu Kumar
          </span>
        </h1>
        <div className="moving-text opacity-0 animate-[fade_1s_ease-in-out_1s_forwards]">
          <h2>I Build More</h2>
          <div className="words">
            <span className="word">Responsive</span>
            <span className="word">Dynamic</span>
            <span className="word">Intuitive</span>
            <span className="word">Innovative</span>
            <span className="word">Scalable</span>
          </div>
        </div>
        <p className="text-lg opacity-0 animate-[fade_.5s_ease-in-out_1.5s_forwards]">
          Passionate about creating innovative web solutions and sharing knowledge through technical writing.
          Specialized in modern web technologies and cloud architecture.
        </p>
        <div className="btn flex gap-5 opacity-0 animate-[fade_.5s_ease-in-out_2s_forwards]">
          <a href="#" className="button button--stroke btn1" data-block="button">
            <span className="button__flair"></span>
            <span className="button__label">View My Work</span>
          </a>
          <a
            href="/assets/documents/Resume - Sonu Kumar.pdf"
            className="button button--stroke btn2"
            data-block="button"
          >
            <span className="button__flair"></span>
            <span className="button__label">Download CV</span>
          </a>
        </div>
      </div>
      <div className="main-image">
        <div className="shape rec">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
        <img className="mobile" src="/assets/images/me.png" alt="Sonu Kumar" />
        <img className="desktop" src="/assets/images/me-fade.png" alt="Sonu Kumar" />
      </div>
    </div>
  );
};

export default Hero;