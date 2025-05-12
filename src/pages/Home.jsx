import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import logoSolo from "../assets/logo-solo.png";
import { FaBrain, FaCode, FaDatabase, FaTachometerAlt, FaRocket, FaLayerGroup, FaCloud, FaTools } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
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
            <img src={logoSolo} alt="Capicú Logo" className="hero-logo large" loading="eager" />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <h2>See Our Compression Engine in Action</h2>
        <div className="demo-container">
          <TerminalDemo />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p className="section-description">
          Comprehensive solutions for your AI and software needs
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaBrain className="service-icon-symbol" />
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
              <FaCode className="service-icon-symbol" />
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
    </div>
  );
} 