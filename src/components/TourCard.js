import React from 'react';
import { Link } from 'react-router-dom';

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} />

      <div className="tour-info">
        <h3>{tour.title}</h3>
        {tour.description && <p>{tour.description}</p>}
        <p className="price">{tour.price}</p>
        <Link to={`/tour/${tour.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
