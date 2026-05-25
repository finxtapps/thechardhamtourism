import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

export default function About() {
  return (
    <main className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero" style={{ '--hero-bg': "url('/images/haridwar.webp')" }}>
        <div className="about-hero-content">
          <span>About Tour Planner</span>
          <h1>Your Trusted Companion for Sacred & Leisure Journeys</h1>
          <p>
            We curate soulful spiritual yatras and unforgettable holiday experiences, helping you explore the divine land of Uttarakhand and beyond with absolute peace of mind.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section" style={{ paddingBottom: '40px' }}>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>10k+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Custom Packages</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>4.9★</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="story-container">
          <div className="story-content">
            <span>Our Journey</span>
            <h2>How It All Started</h2>
            <p>
              Tour Planner was born right in the spiritual heart of India—Haridwar. Founded with a vision to make pilgrimage journeys comfortable, safe, and spiritually fulfilling, we started by helping devotees complete their sacred Char Dham Yatra.
            </p>
            <p>
              Over the years, we have grown from a local travel desk near the Haridwar railway station into a comprehensive travel solutions provider. Today, we handle end-to-end travel plans, including verified hotel stays, professional guides, clean transport, and local sightseeing.
            </p>
            <p>
              Whether it is the challenging trek to Kedarnath, the serene prayers at Badrinath, or a customized family getaway, we treat every guest with the traditional warmth of <em>"Atithi Devo Bhava"</em>.
            </p>
          </div>
          <div className="story-image-wrapper">
            <img src="/images/haridwar.webp" alt="Sacred Ganges in Haridwar" loading="lazy" />
            <div className="story-badge">
              Based in Haridwar
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section" style={{ backgroundColor: '#ffffff', borderRadius: '16px' }}>
        <div className="mission-vision-container">
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To offer accessible, pocket-friendly, and meticulously planned travel experiences. We strive to take all the logistical stress away, leaving you free to focus entirely on the spiritual essence or recreational joy of your journey.
            </p>
          </div>

          <div className="mv-card vision">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the leading spiritual and leisure travel planner in Northern India, recognized for absolute transparent pricing, prompt customer support, and local tourism advocacy that benefits local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="values-title-container">
          <span>Core Values</span>
          <h2>The Pillars of Our Services</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h4>Guest Safety & Comfort</h4>
            <p>
              Mountain roads and long yatras can be taxing. We prioritize verified drivers, well-maintained vehicles, and secure hotel stays to keep you safe and comfortable.
            </p>
          </div>
          <div className="value-card">
            <h4>No Hidden Fees</h4>
            <p>
              What we quote is what you pay. We provide clear lists of inclusions and exclusions so there are never any unpleasant surprises during your trip.
            </p>
          </div>
          <div className="value-card">
            <h4>Local Expertise</h4>
            <p>
              Being based in Haridwar, our route knowledge, understanding of temple opening times, weather patterns, and local guidelines is second to none.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-section">
        <div className="about-cta-card" style={{ '--cta-bg': "url('/images/haridwar.webp')" }}>
          <div className="about-cta-content">
            <h3>Ready to Experience the Sacred Land?</h3>
            <p>
              Let us help you customize the perfect itinerary for your family. Contact our travel experts today for custom Char Dham, Do Dham, or Kedarnath packages.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="primary-btn">
                Plan Your Trip
              </Link>
              <Link to="/" className="outline-btn">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
