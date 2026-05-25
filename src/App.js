import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import TourDetails from './pages/TourDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bus" element={<ServicePage type="bus" />} />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
