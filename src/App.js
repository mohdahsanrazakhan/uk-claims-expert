import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Testimonials from './pages/Testimonial/Testimonial';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Hero from './pages/Hero/Hero';
import Service from './pages/Services/Service';
import Navbar from './components/Navbar';
import Claims from './pages/Claims/Claims';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div id="home">
          <Hero />
        </div>
        <div id="aboutus">
          <About />
        </div>
        <div id="claims">
          <Claims />
        </div>
        <div id="services">
          <Service />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contactus">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
