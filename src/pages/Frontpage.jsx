import React from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from './components/SvgBackground';
import './Frontpage.css';
import TypeWriterEffect from 'react-typewriter-effect';
import ColorfulTypeWriterEffect from './ColorfulTypeWriterEffect';

function Frontpage() {

  return (
    <>
      <div className="profile-container" id="home_page">

        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
            <div class="firework" id="firework1">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Vighnesh Paradkar</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: 'flex', gap: '6px', color: '#fff' }}>
                  I am a
                  <span style={{ color: '#efff51' }} className="type_effect">
                    
                    <ColorfulTypeWriterEffect />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                As a dynamic and adaptable professional, I thrive on new challenges and am constantly seeking opportunities to expand my skill set. My passion for continuous learning fuels my commitment to deliver exceptional results in every project I undertake. I approach each task with a positive attitude and a growth mindset, allowing me to adapt and evolve in the face of adversity. I am not just prepared to meet expectations but to exceed them, and to turn great ideas into reality.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>
            <div class="firework" id="firework3">
  	          <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
	            <div class="explosion"></div>
            </div>
            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn primary-btn">Get in Touch</button>
              </a>
              <a href="./VighneshCV.pdf" download>
                <button className="btn primary-btn">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <a href="#about_myself" className="profile-picture-background"></a>
          </div>
          
<div class="firework" id="firework2">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
