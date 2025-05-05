import React, { useState, useEffect } from "react";
import "../styles/About.css";
import {
  FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaEnvelopeOpenText
} from "react-icons/fa";

const team = [
  {
    name: "Sebastián A. Cruz Romero",
    title: "Founder",
    bio: `A computer science & engineering student and entrepreneur passionate about making AI accessible and efficient for everyone. With a background in Applied Machine Learning and Biomedical Science, he founded Capicú to help organizations deploy advanced analytics.`,
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
    bio: "We're always looking for new talent to join our team. Open to students and new grads with experience in: AI/ML, DevOps, Database Systems, UI/UX, and more. If you're interested in joining the team at Capicú, please reach out to us!",
    photo: "https://randomuser.me/api/portraits/lego/7.jpg",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  }
];

const collaborators = [
  {
    name: "Open for collaborations",
    title: "Researchers, PIs, and more",
    bio: "We're always looking for ways to integrate new applications for our technologies. If you're interested in collaborating with Capicú, please reach out to us!",
    photo: "https://randomuser.me/api/portraits/lego/9.jpg",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  },
];

const partnerships = [
  {
    name: "Your organization here!",
    title: "Non-profit, company, or lab",
    bio: "We're always looking for new partners to expand our network and implement new technologies. If you're interested in partnering with Capicú, please reach out to us!",
    photo: "https://randomuser.me/api/portraits/lego/1.jpg",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  }
];

export default function About() {
  const [order, setOrder] = useState([...Array(team.length).keys()]);

  const shuffle = () => {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  useEffect(() => {
    const interval = setInterval(shuffle, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-bg">
      <div className="about-sections-wrapper">
        <div className="about-sections">
          <div className="about-section">
            <h2 className="about-section-title">
              Meet the Team <button className="deck-button-bottom" onClick={shuffle}>→</button>
            </h2>
            <div className="about-profiles about-deck">
              {order.map((idx, i) => {
                const profile = team[idx];
                const isTop = i === 0;
                return (
                  <div
                    key={idx}
                    className={`about-profile-card deck-card ${isTop ? "top" : ""}`}
                    style={{
                      zIndex: team.length - i,
                      transform: `translate(${i * 8}px, ${i * 8}px)`,
                      opacity: i > 2 ? 0 : 1
                    }}
                  >
                    <img src={profile.photo} alt={profile.name} className="about-profile-photo" />
                    <div className="about-profile-info">
                      <h3>{profile.name}</h3>
                      <div className="about-profile-title">{profile.title}</div>
                      <div className="about-profile-bio">{profile.bio}</div>
                      <div className="about-profile-socials">
                        {profile.socials.linkedin && <a href={profile.socials.linkedin}><FaLinkedin /></a>}
                        {profile.socials.github && <a href={profile.socials.github}><FaGithub /></a>}
                        {profile.socials.instagram && <a href={profile.socials.instagram}><FaInstagram /></a>}
                        {profile.socials.website && <a href={profile.socials.website}><FaGlobe /></a>}
                        {profile.socials.email && <a href={profile.socials.email}><FaEnvelopeOpenText /></a>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Our Collaborators</h2>
            <div className="about-profiles-scroll">
              {collaborators.map((profile, idx) => (
                <div key={idx} className="about-profile-card">
                  <img src={profile.photo} alt={profile.name} className="about-profile-photo" />
                  <div className="about-profile-info">
                    <h3>{profile.name}</h3>
                    <div className="about-profile-title">{profile.title}</div>
                    <div className="about-profile-bio">{profile.bio}</div>
                    <div className="about-profile-socials">
                      {profile.socials.linkedin && <a href={profile.socials.linkedin}><FaLinkedin /></a>}
                      {profile.socials.github && <a href={profile.socials.github}><FaGithub /></a>}
                      {profile.socials.instagram && <a href={profile.socials.instagram}><FaInstagram /></a>}
                      {profile.socials.website && <a href={profile.socials.website}><FaGlobe /></a>}
                      {profile.socials.email && <a href={profile.socials.email}><FaEnvelopeOpenText /></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Partnerships</h2>
            <div className="about-profiles-scroll">
              {partnerships.map((profile, idx) => (
                <div key={idx} className="about-profile-card">
                  <img src={profile.photo} alt={profile.name} className="about-profile-photo" />
                  <div className="about-profile-info">
                    <h3>{profile.name}</h3>
                    <div className="about-profile-title">{profile.title}</div>
                    <div className="about-profile-bio">{profile.bio}</div>
                    <div className="about-profile-socials">
                      {profile.socials.linkedin && <a href={profile.socials.linkedin}><FaLinkedin /></a>}
                      {profile.socials.github && <a href={profile.socials.github}><FaGithub /></a>}
                      {profile.socials.instagram && <a href={profile.socials.instagram}><FaInstagram /></a>}
                      {profile.socials.website && <a href={profile.socials.website}><FaGlobe /></a>}
                      {profile.socials.email && <a href={profile.socials.email}><FaEnvelopeOpenText /></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
