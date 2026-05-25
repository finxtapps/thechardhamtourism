import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-about">
          <h5>About Tour Planner</h5>
          <p>
            EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators, bus tickets with 2000+ bus operators, and railway tickets in India for all major cities.
          </p>
        </div>

        <div className="footer-column">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Contact Us</h5>
          <p>Haridwar near railway station</p>
          <p>+91 7754022127</p>
          <p>info@tourplanner.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Tour Planner. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
