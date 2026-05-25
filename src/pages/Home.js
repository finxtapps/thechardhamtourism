import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tours from '../data';
import '../styles/home.css';

const heroSlides = [
  {
    title: 'Chardham Yatra Packages',
    subtitle: 'A complete 10-day spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Starting and ending at Haridwar.',
    image: '/images/chardham.webp',
  },
  {
    title: 'Do Dham Yatra',
    subtitle: 'A divine journey to Kedarnath and Badrinath, the two most sacred Dhams. Starting from Haridwar.',
    image: '/images/badrinath.webp',
  },
  {
    title: 'Kedarnath Yatra',
    subtitle: 'A focused spiritual trip to the holy Kedarnath temple in the Himalayas. Starting from Haridwar.',
    image: '/images/kedarnath.webp',
  },
];

// Removed hardcoded packages, using data from ../data.js

const categoryItems = [
  {
    label: 'Spiritual Tours',
    active: true,
    path: '#travel-picks',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 9.3 8.4 2.5 9l5.2 4.5-1.6 6.7L12 16.6l5.9 3.6-1.6-6.7L21.5 9l-6.8-.6L12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Chardham Yatra',
    path: '#travel-picks',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    ),
  },
];

const reasons = [
  { title: 'Hassle Free Planning', text: 'Tell us your travel mood and budget. We shape the route, stay, and transfers around it.' },
  { title: '24x7 Trip Assistance', text: 'Our team stays reachable throughout the journey for quick help and on-trip changes.' },
  { title: 'Transparent Pricing', text: 'Clean package inclusions, wallet-friendly plans, and no confusing last-minute surprises.' },
  { title: 'Tailor-Made Holidays', text: 'Family trips, honeymoon plans, pilgrimages, cruises, and weekend escapes built your way.' },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [plannerLoading, setPlannerLoading] = useState(false);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handlePlannerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.phone) {
      alert('Please fill in your name, email and phone number.');
      return;
    }

    setPlannerLoading(true);

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    fetch(`${apiUrl.trim()}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        destination: data.destination,
        startDate: data.start_date,
        endDate: data.end_date,
        travelers: data.travelers,
      }),
    })
    .then(async (response) => {
      let resData;
      try {
        resData = await response.json();
      } catch (e) {
        throw new Error('Server responded with an error');
      }
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || resData.message || 'Server responded with an error');
      }
      return resData;
    })
    .then((resData) => {
      alert('Thank you! Our travel expert will contact you soon.');
      e.target.reset();
    })
    .catch((err) => {
      console.error('Planner Email Error:', err);
      alert(`Error: ${err.message}. Please check backend connection.`);
    })
    .finally(() => {
      setPlannerLoading(false);
    });
  };

  return (
    <div className="home-page-container">
      <section className="hero-section">
        <div className="hero-slider" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.title}
              className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
              src={slide.image}
              alt=""
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">{currentSlide.title}</p>
          <h1>Explore Our Tour Packages</h1>
          <p className="hero-description">{currentSlide.subtitle}</p>
          <div className="hero-dots" aria-label="Tour image slider">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === activeSlide ? 'active' : ''}
                type="button"
                aria-label={`Show ${slide.title}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="category-bar" aria-label="Travel categories">
          {categoryItems.map((item) => (
            <a className={`category-item ${item.active ? 'active' : ''}`} href={item.path} key={item.label}>
              <span className="category-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="travel-section" id="travel-picks">
        <div className="section-heading">
          <span>From Haridwar to Haridwar</span>
          <h2>Spiritual Tour Packages</h2>
          <p>Carefully curated spiritual journeys starting and ending at Haridwar.</p>
        </div>

        <div className="travel-cards">
          {tours.map((tour) => (
            <article className="travel-card" key={tour.id}>
              <img src={tour.image} alt={tour.title} loading="lazy" />
              <div className="travel-card-content">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <div className="travel-price">{tour.price}</div>
                <div className="travel-buttons">
                  <Link className="outline-btn" to={`/tour/${tour.id}`}>View Details</Link>
                  <Link className="primary-btn" to="/contact" state={{ packageName: tour.title }}>Enquire Now</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="planner-section" id="planner">
        <div className="planner-copy">
          <span>Custom Holiday</span>
          <h2>We Will Plan For You</h2>
          <p>Share a few details and our travel expert will prepare a trip plan that fits your dates, destination, and traveler count.</p>
        </div>

        <form className="planner-form" onSubmit={handlePlannerSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="text" name="destination" placeholder="Destination" />
          <input type="date" name="start_date" aria-label="Travel start date" />
          <input type="date" name="end_date" aria-label="Travel end date" />
          <input type="number" name="travelers" placeholder="Travelers count" min="1" />
          <button type="submit" className="primary-btn" disabled={plannerLoading}>
            {plannerLoading ? 'Sending...' : 'Submit Enquiry'}
          </button>
        </form>
      </section>

      <section className="why-section">
        <div className="section-heading">
          <span>Why Choose Us</span>
          <h2>Why Choose Tour Planner?</h2>
          <p>Experience the difference with expertly crafted holiday packages that cater to every travel need.</p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <article className="why-card" key={reason.title}>
              <div className="why-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>

        <div className="support-strip">
          <div>
            <strong>Call our travel expert</strong>
            <span>+91 7754022127</span>
          </div>
          <div>
            <strong>Email support</strong>
            <span>info@tourplanner.com</span>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <h2>Book Your Holiday With Tour Planner</h2>
        <p>Book Your Holiday Packages With EaseMyTrip and discover a world of meticulously curated, affordable itineraries designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both, our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience the perfect escape with our exceptional itineraries.</p>
        <h3>Enjoy Seamless Booking At Budget-Friendly Prices!</h3>
        <p>Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations, preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a smooth start to your travel adventure.</p>
        <p>Unlock unbeatable savings on your next getaway with us, your ultimate travel companion. Discover affordable packages customised to meet the diverse needs of every traveller, from mountain escapes to city adventures.</p>
        <h3>Create Memories That Last A Lifetime!</h3>
        <p>Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family, we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details, guaranteeing a seamless and memorable experience. Start your adventure with EaseMyTrip today and cherish every moment of your journey.</p>
      </section>
    </div>
  );
};

export default Home;
