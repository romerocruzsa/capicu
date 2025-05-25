import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import MobileMenu from "../components/MobileMenu";
import logoSolo from "../assets/logo-solo.png";
import { FaBrain, FaCode, FaDatabase, FaTachometerAlt, FaRocket, FaLayerGroup, FaCloud, FaTools } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Home.css";

export default function Home() {
  const [state, handleSubmit] = useForm("mnnddqko");

  return (
    <div className="home">
      <MobileMenu />
      
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

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p className="section-description">Have a project or question? Reach out and we'll get back to you soon.</p>
        
        {state.succeeded ? (
          <div className="contact-success">
            <h2>Thank you!</h2>
            <p>Your message has been sent. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input id="name" type="text" name="name" required />
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">
              Email
              <input id="email" type="email" name="email" required />
            </label>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">
              Message
              <textarea id="message" name="message" rows="5" required />
            </label>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" className="cta-button primary" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
} 