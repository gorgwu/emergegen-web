import React from 'react';
import './about-us.css';

function AboutUs() {
  return (
    
    <div className="abt">
      
      <img src="/AboutIMG/sparkles.svg" alt="sparkle" className="sparkle1"/>
      
      <div className="abt-content">
        <div className="text">
          <div className="title">About Us</div>
          <div className="subtitle">Empowering businesses with next-gen trends and innovation</div>
          <div className="content">
            Emerge Gen was born from a shared vision to positively impact our communities, leveraging our expertise in commerce and computer science. Our diverse backgrounds offer wide-ranging perspectives, allowing us to craft innovative marketing and consulting strategies tailored to the evolving needs of local and small businesses.
            <br /><br />
            Driven by a new generation of passionate leaders, Emerge Gen aims to equip businesses with the tools and insights for success. Our mission is to boost sales and foster a supportive network focused on collaboration and mutual growth.
          </div>
        </div>
        <div className="logo">
          <img src="/AboutIMG/about-logo.svg" alt="Emerge Gen Logo" />
        </div>
      </div>

      <img src="/AboutIMG/sparkles.svg" alt="sparkle" className="sparkle2"/>
      
    </div>
  );
}

export default AboutUs;