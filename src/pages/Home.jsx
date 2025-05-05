import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import logoSolo from "../assets/logo-solo.png";
import { FaMicrochip, FaFlask, FaCodeBranch, FaMapMarkerAlt, FaChartLine, FaMemory, FaBolt, FaCompressArrowsAlt, FaBrain, FaCode, FaDatabase, FaTachometerAlt, FaRocket, FaLayerGroup, FaCloud, FaTools } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="home">
      <section className="hero" id="hero">
        <div className="hero-content hero-row">
          <div className="hero-text">
            <h1>Making AI Fit Anywhere</h1>
            <p className="tagline">
              Capicú specializes in deploying ML models optimized for your target hardware, with a focus on biomedical and medical tech. <strong>Your data, your hardware, your needs.</strong>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-logo-container">
            <img src={logoSolo} alt="Capicú Logo" className="hero-logo large" />
          </div>
        </div>
      </section>

      {/* <section className="partners">
        <h2>Trusted By</h2>
        <div className="partners-grid">
          <div className="partner-logo">
            <img src="https://prsciencetrust.org/wp-content/uploads/2020/04/PRST-logo.png" alt="Puerto Rico Science Trust" />
          </div>
          <div className="partner-logo">
            <img src="https://www.upr.edu/wp-content/uploads/2019/09/UPR-logo.png" alt="University of Puerto Rico" />
          </div>
          <div className="partner-logo">
            <img src="https://www.medicaldevicesgroup.com/wp-content/uploads/2019/05/medical-device-startup-logo.png" alt="Medical Device Startups" />
          </div>
          <div className="partner-logo">
            <img src="https://www.researchgate.net/profile/Research-Institution-2/avatar" alt="Research Institutions" />
          </div>
        </div>
      </section> */}

      {/* <section className="why-choose-us" id="why-choose-us">
        <h2>Why Choose Capicú?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaMicrochip className="icon" />
            <h3>Edge-First Approach</h3>
            <p>We optimize ML models specifically for edge deployment, ensuring they run efficiently on your hardware.</p>
          </div>
          <div className="feature-card">
            <FaFlask className="icon" />
            <h3>Biomedical Expertise</h3>
            <p>Specialized in medical and healthcare applications, with deep understanding of regulatory requirements.</p>
          </div>
          <div className="feature-card">
            <FaCodeBranch className="icon" />
            <h3>Open Source Commitment</h3>
            <p>We believe in open science and contribute to the community while protecting your IP.</p>
          </div>
          <div className="feature-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Local Innovation</h3>
            <p>Based in Puerto Rico, we're part of a growing tech ecosystem with unique perspectives and solutions.</p>
          </div>
        </div>
      </section> */}

      <section className="demo-section" id="demo">
        <h2>See Our Compression Engine in Action</h2>
        <TerminalDemo />
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <p className="section-description">
          Comprehensive solutions for your AI and software needs
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ML Consulting" />
              <div className="service-icon-overlay">
                <FaBrain className="service-icon-symbol" />
              </div>
            </div>
            <div className="service-content">
              <h3>ML & Data Science Consulting</h3>
              <p>
                From data analysis to model deployment, we provide end-to-end machine learning solutions. We help you navigate the complex landscape of AI implementation.
              </p>
              <div className="service-features">
                <div className="service-feature">
                  <FaCode className="feature-icon" />
                  <span>Custom ML model development</span>
                </div>
                <div className="service-feature">
                  <FaDatabase className="feature-icon" />
                  <span>Data pipeline architecture</span>
                </div>
                <div className="service-feature">
                  <FaTachometerAlt className="feature-icon" />
                  <span>Performance optimization</span>
                </div>
                <div className="service-feature">
                  <FaRocket className="feature-icon" />
                  <span>Deployment strategy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Application Development" />
              <div className="service-icon-overlay">
                <FaCode className="service-icon-symbol" />
              </div>
            </div>
            <div className="service-content">
              <h3>Application Development</h3>
              <p>
                Transform your ideas into production-ready applications. We aid in building scalable, high-performance software solutions.
              </p>
              <div className="service-features">
                <div className="service-feature">
                  <FaLayerGroup className="feature-icon" />
                  <span>Full-stack development</span>
                </div>
                <div className="service-feature">
                  <FaCloud className="feature-icon" />
                  <span>Cloud-native architecture</span>
                </div>
                <div className="service-feature">
                  <FaTools className="feature-icon" />
                  <span>DevOps & CI/CD</span>
                </div>
                <div className="service-feature">
                  <FaTachometerAlt className="feature-icon" />
                  <span>Performance optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="stats" id="stats">
        <h2>Proven Results</h2>
        <p className="section-description">
          Real-world performance improvements with our compression engine
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <FaBolt className="icon" />
            <h3>40%</h3>
            <p>Latency Reduction</p>
            <span className="stat-description">Faster inference times</span>
          </div>
          <div className="stat-item">
            <FaMemory className="icon" />
            <h3>30%</h3>
            <p>RAM Usage Reduction</p>
            <span className="stat-description">Lower memory footprint</span>
          </div>
          <div className="stat-item">
            <FaChartLine className="icon" />
            <h3>50%</h3>
            <p>Throughput Increase</p>
            <span className="stat-description">More efficient processing</span>
          </div>
          <div className="stat-item">
            <FaCompressArrowsAlt className="icon" />
            <h3>25%</h3>
            <p>Model Size Reduction</p>
            <span className="stat-description">Smaller deployment size</span>
          </div>
        </div>
      </section> */}

      {/* <section className="testimonials" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Dr. Maria Rodriguez" className="avatar" />
            <p className="testimonial-text">"Capicú's edge optimization helped us deploy our medical imaging model on portable devices, revolutionizing our field operations."</p>
            <div className="testimonial-author">
              <strong>Dr. Maria Rodriguez</strong>
              <span>Chief Technology Officer, Medical Imaging Startup</span>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Prof. Juan Martinez" className="avatar" />
            <p className="testimonial-text">"Their expertise in edge AI and commitment to open source made them the perfect partner for our research project."</p>
            <div className="testimonial-author">
              <strong>Prof. Juan Martinez</strong>
              <span>Research Director, University of Puerto Rico</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
} 