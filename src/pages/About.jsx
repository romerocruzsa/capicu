import React from "react";
import "../styles/About.css";
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaEnvelopeOpenText } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-bg">
      <div className="about-credit">
        Photo by <a href="https://unsplash.com/@julioguio" target="_blank" rel="noopener noreferrer">Julio Guio</a> on <a href="https://unsplash.com/photos/photo-1566786987239-925e414ddbe0" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </div>
      <div className="about-sections">
        <h1 className="about-section-title">Meet the Team</h1>
        <div className="about-profiles">
          <div className="about-profile-card">
            <img src="https://romerocruzsa.github.io/assets/img/avatar.png" alt="Sebastián Romero Cruz" className="about-profile-photo" />
            <div className="about-profile-info">
              <h2>Sebastián A. Cruz Romero</h2>
              <div className="about-profile-title">Founder</div>
              <div className="about-profile-bio">
                A computer science & engineering student and entrepreneur passionate about making AI accessible and efficient for everyone. With a background in Applied Machine Learning and Biomedical Science, he founded Capicú to help organizations deploy powerful advanced analytics on any device—no cloud required. Sebastián is dedicated to scientific communication, community building, and developing technology that empowers people.
              </div>
              <div className="about-profile-socials">
                <a href="https://www.linkedin.com/in/romerocruzsa" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/romerocruzsa" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                <a href="https://instagram.com/shojiro001" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                <a href="https://romerocruzsa.github.io" target="_blank" rel="noopener noreferrer" title="Personal Website"><FaGlobe /></a>
              </div>
            </div>
          </div>
          {/* <div className="about-profile-card about-join-card">
            <div className="about-profile-info">
              <h2>Join the Founding Team</h2>
              <div className="about-profile-title">We're looking for passionate builders!</div>
              <div className="about-profile-bio">
                Interested in shaping the future of edge AI and biomedical technology? We're seeking co-founders and early team members who are excited to build, learn, and make an impact from Puerto Rico. If you have a background in ML, engineering, design, or business—and a drive to create—let's talk!
              </div>
              <div className="about-profile-socials">
                <a href="mailto:romerocruzsa@gmail.com" title="Get in touch"><FaEnvelopeOpenText /></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
} 