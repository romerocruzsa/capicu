import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnddqko");

  return (
    <div className="contact-background">
      <div className="contact-overlay">
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p>Have a project or question? Reach out and we'll get back to you soon.</p>

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
        </div>
      </div>
    </div>
  );
}
