import React, { useState } from "react";
import "../styles/About.css";
import {
  FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaEnvelopeOpenText
} from "react-icons/fa";

const team = [
  {
    name: "Sebastián A. Cruz Romero",
    title: "Founder",
    bio: `BSc in Computer Science and Engineering. Experience in AI/ML, Data Science, and Biomdical Engineering.`,
    photo: "https://romerocruzsa.github.io/assets/img/avatar.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/romerocruzsa",
      github: "https://github.com/romerocruzsa",
      instagram: "https://instagram.com/shojiro001",
      website: "https://romerocruzsa.github.io",
      email: "mailto:romerocruzsa@gmail.com"
    }
  },
  {
    name: "This could be you!",
    title: "Open roles available",
    bio: "Open to students and new grads with experience in: AI/ML, DevOps, DBMS, and more.",
    photo: "https://avatars.githubusercontent.com/u/627410?s=80&v=4",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  }
];

const collaborators = [
  {
    name: "Open for collaborations",
    title: "Researchers, PIs, and more",
    bio: "Always looking for ways to integrate new applications for our technologies.",
    photo: "https://github.com/identicons/mwhite.png",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  },
];

const partnerships = [
  {
    name: "Perspectivas Globales",
    title: "Creative space devoted to empowering entrepreneurs in the West Side of Puerto Rico.",
    bio: "Creative space devoted to empowering entrepreneurs in the West Side of Puerto Rico.",
    photo: "https://perspectivasglobales.com/wp-content/uploads/2022/01/PG-Logosquared.png",
    socials: {
      website: "https://perspectivasglobales.com",
      email: "mailto:info@ocapr.org"
    }
  },
  {
    name: "Your organization here!",
    title: "Non-profit, company, or lab",
    bio: "If you're interested in partnering with Capicú, please reach out to us!",
    photo: "https://identicons.github.com/jasonlong.png",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  }
];

function ProfileCard({ profile }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`profile-card${flipped ? " flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      tabIndex={0}
      aria-label={profile.name + ' profile card'}
    >
      <div className="profile-card-inner">
        <div className="profile-card-front">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
        </div>
        <div className="profile-card-back">
          {/* <div className="profile-title">{profile.title}</div> */}
          <div className="profile-title">Contact</div>
          {/* <div className="profile-bio">{profile.bio}</div> */}
          <div className="profile-socials">
            {profile.socials.linkedin && <a href={profile.socials.linkedin} aria-label={profile.name + "'s LinkedIn"} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
            {profile.socials.github && <a href={profile.socials.github} aria-label={profile.name + "'s GitHub"} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            {profile.socials.instagram && <a href={profile.socials.instagram} aria-label={profile.name + "'s Instagram"} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
            {profile.socials.website && <a href={profile.socials.website} aria-label={profile.name + "'s Website"} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>}
            {profile.socials.email && <a href={profile.socials.email} aria-label={"Email " + profile.name}><FaEnvelopeOpenText /></a>}
          </div>
        </div>
      </div>
      <div className="profile-label">
        <div className="profile-name">{profile.name}</div>
        <div className="profile-role">{profile.title}</div>
      </div>
    </div>
  );
}

function ProfileCarousel({ profiles }) {
  return (
    <div className="profile-carousel">
      {profiles.map((profile, idx) => (
        <ProfileCard key={idx} profile={profile} />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <div className="about-bg" />
      <div className="about-company-intro">
        <div className="about-company-intro-content">
          <h1>About Capicú</h1>
          <p>
            <strong>Capicú</strong> is a deep tech startup rooted in Mayagüez, Puerto Rico, founded by alumni of the University of Puerto Rico at Mayagüez. Born from a desire to make <em>La Isla del Encanto</em> a thriving hub for talent in Hard Tech and Computing, we're building tools that push the boundaries of machine learning deployment.
          </p>
          <p>
            Our flagship product is a compression engine (our SaaS product) designed to integrate seamlessly into your ML workflows. It optimizes and packages deep learning models (TensorFlow, PyTorch, ONNX, and more) for deployment on your target hardware. Capicú's platform guides users through multi-objective optimization, balancing task performance, latency, power consumption, and memory usage.
          </p>
          <p>
            The result? Tailored, explainable compression configurations that help you get the most out of your AI models; efficiently and intelligently.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-section-title">Meet the Team</h2>
          <ProfileCarousel profiles={team} />
        </div>
        <div className="about-section">
          <h2 className="about-section-title">Our Collaborators</h2>
          <ProfileCarousel profiles={collaborators} />
        </div>
        <div className="about-section">
          <h2 className="about-section-title">Partnerships</h2>
          <ProfileCarousel profiles={partnerships} />
        </div>
      </div>
    </div>
  );
}
