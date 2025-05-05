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
    title: "Developer, Engineer or Scientist",
    bio: "We're always looking for new talent to join our team. Open to students and new grads with experience in: AI/ML, DevOps, Database Systems, UI/UX, and more. If you're interested in joining the team at Capicú, please reach out to us!",
    photo: "https://avatars.githubusercontent.com/u/2164692?v=4",
    socials: {
      email: "mailto:romerocruzsa@gmail.com"
    }
  }
];

export default function About() {
  const [order, setOrder] = useState([...team.keys()]);

  const shuffle = () => {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first]; // move top to back
    });
  };

  useEffect(() => {
    const interval = setInterval(shuffle, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-bg">
      <div className="about-credit">
        Photo by <a href="https://unsplash.com/@julioguio" target="_blank" rel="noopener noreferrer">Julio Guio</a> on <a href="https://unsplash.com/photos/photo-1566786987239-925e414ddbe0" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </div>
      <div className="about-sections">
        <h1 className="about-section-title">Meet the Team</h1>
        <button className="deck-button-top" onClick={shuffle}>→</button>
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
                  <h2>{profile.name}</h2>
                  <div className="about-profile-title">{profile.title}</div>
                  <div className="about-profile-bio">{profile.bio}</div>
                  <div className="about-profile-socials">
                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href={profile.socials.website} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    <a href={profile.socials.email} target="_blank" rel="noopener noreferrer"><FaEnvelopeOpenText /></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
