import React from 'react';
import { useParams, Link } from 'react-router-dom';
import tours from '../data';
import '../styles/TourDetails.css';

function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="tour-details-error">
        <h2>Tour not found!</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="tour-details-container">
      <div className="tour-details-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${tour.image})` }}>
        <h1>{tour.title}</h1>
        <p className="price-tag">{tour.price}</p>
      </div>

      <div className="tour-details-content">
        <section className="overview">
          <h2>Overview</h2>
          <p>{tour.description}</p>
        </section>

        <section className="itinerary">
          <h2>Itinerary</h2>
          <div className="itinerary-list">
            {tour.itinerary.map((item) => (
              <div key={item.day} className="itinerary-item">
                <div className="day-circle">Day {item.day}</div>
                <div className="itinerary-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="inclusions-exclusions">
          <section className="inclusions">
            <h2>What's Included</h2>
            <ul>
              {tour.inclusions.map((item, index) => (
                <li key={index}><i className="fas fa-check-circle"></i> {item}</li>
              ))}
            </ul>
          </section>

          <section className="exclusions">
            <h2>What's Not Included</h2>
            <ul>
              {tour.exclusions.map((item, index) => (
                <li key={index}><i className="fas fa-times-circle"></i> {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="booking-section">
          <Link to="/contact" state={{ packageName: tour.title }} className="book-now-btn">Enquire Now</Link>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
