import '../styles/contact.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Contact() {
  const location = useLocation();
  const selectedPackage = location.state?.packageName || 'Custom Holiday Package';

  const [form, setForm] = useState({
    packageName: selectedPackage,
    fullName: '',
    mobileNumber: '',
    email: '',
  });
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [loading, setLoading] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const changeCount = (type, value) => {
    setTravellers((current) => {
      const nextValue = current[type] + value;
      const minimum = type === 'adults' ? 1 : 0;

      return {
        ...current,
        [type]: Math.max(minimum, nextValue),
      };
    });
  };

  useEffect(() => {
    if (location.state?.packageName) {
      setForm(prev => ({ ...prev, packageName: location.state.packageName }));
    }
  }, [location.state]);

  const resetForm = () => {
    setForm({
      packageName: selectedPackage,
      fullName: '',
      mobileNumber: '',
      email: '',
    });
    setTravellers({ adults: 1, children: 0, infants: 0 });
  };

  const submitEnquiry = (event) => {
    event.preventDefault();

    if (!form.fullName || !form.mobileNumber || !form.email) {
      alert('Please fill in name, mobile number, and email.');
      return;
    }

    setLoading(true);

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    fetch(`${apiUrl.trim()}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageName: form.packageName,
        fullName: form.fullName,
        mobileNumber: form.mobileNumber,
        email: form.email,
        adults: travellers.adults,
        children: travellers.children,
        infants: travellers.infants,
      }),
    })
    .then(async (response) => {
      let data;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error('Server responded with an error');
      }
      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || 'Something went wrong');
      }
      return data;
    })
    .then((data) => {
      alert('Thank you for your enquiry! We will contact you soon.');
      resetForm();
    })
    .catch((err) => {
      console.error('Enquiry error:', err);
      alert(`Error: ${err.message}. Please check backend connection.`);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="contact-page">
      <form className="holiday-enquiry-form" onSubmit={submitEnquiry}>
        <div className="form-header">
          <h1>Want to Go For A Memorable Holiday?</h1>
        </div>

        <div className="form-body">
          <input type="hidden" name="planId" value="5" />

          <label className="field full-width">
            <span>Package Name:</span>
            <input
              type="text"
              name="packageName"
              value={form.packageName}
              onChange={updateForm}
              readOnly
            />
          </label>

          <h2 className="form-section-title">Personal Details</h2>

          <label className="field">
            <span>Full Name:</span>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={form.fullName}
              onChange={updateForm}
            />
          </label>

          <label className="field">
            <span>Mobile Number:</span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="+91 9876543210"
              value={form.mobileNumber}
              onChange={updateForm}
            />
          </label>

          <label className="field full-width">
            <span>Email ID:</span>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={form.email}
              onChange={updateForm}
            />
          </label>

          <div className="traveller-grid">
            {[
              ['adults', 'Adults'],
              ['children', 'Children'],
              ['infants', 'Infants'],
            ].map(([type, label]) => (
              <div className="traveller-field" key={type}>
                <span>{label}</span>
                <div className="counter-box">
                  <button type="button" onClick={() => changeCount(type, -1)} aria-label={`Decrease ${label}`}>
                    -
                  </button>
                  <strong>{travellers[type]}</strong>
                  <button type="button" onClick={() => changeCount(type, 1)} aria-label={`Increase ${label}`}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button className="secondary-action" type="button" onClick={resetForm} disabled={loading}>Close</button>
          <button className="primary-action" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </form>
    </main>
  );
}
