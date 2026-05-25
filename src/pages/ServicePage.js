import React from 'react';
import { Link } from 'react-router-dom';

const serviceContent = {
  bus: {
    title: 'Bus Booking',
    eyebrow: 'Bus',
    description: 'Plan smooth intercity travel with clean route options, group travel support, and quick assistance.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    points: ['Group and individual bus booking', 'Pilgrimage and holiday routes', 'Pickup and drop coordination'],
  },
};

export default function ServicePage({ type }) {
  const service = serviceContent[type] || serviceContent.bus;

  return (
    <main className="service-page">
      <section className="service-hero">
        <div>
          <span>{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <Link className="service-cta" to="/contact">Enquire Now</Link>
        </div>
        <img src={service.image} alt={service.title} />
      </section>

      <section className="service-points">
        {service.points.map((point) => (
          <article key={point}>
            <h3>{point}</h3>
            <p>Our team will confirm details and customise options based on your route, budget, and travel dates.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
