import React, { useState } from "react";
import {
  Menu, X, Plane, CloudSun, Mic2, Settings, Play, ArrowUpRight,
  MapPin, CreditCard, CarFront, Heart, Send, ChevronDown, ChevronUp,
  Facebook, Instagram, Twitter, CheckCircle2
} from "lucide-react";

const destinations = [
  {
    city: "Rome, Italy",
    price: "$5.42k",
    days: "10 Days Trip",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85"
  },
  {
    city: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85"
  },
  {
    city: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=85"
  }
];

const services = [
  { icon: CloudSun, title: "Calculated Weather", description: "Get helpful weather updates before you set off on your next adventure.", color: "blue" },
  { icon: Plane, title: "Best Flights", description: "Compare flight options and find a route that fits your plans.", color: "yellow" },
  { icon: Mic2, title: "Local Events", description: "Discover local experiences, hidden gems and events worth visiting.", color: "coral" },
  { icon: Settings, title: "Customization", description: "Build a trip around your interests, schedule and travel style.", color: "green" }
];

const steps = [
  { icon: MapPin, title: "Choose Destination", description: "Pick a place you have always wanted to explore." },
  { icon: CreditCard, title: "Make Payment", description: "Confirm your booking with a simple, secure payment." },
  { icon: CarFront, title: "Reach Airport on Selected Date", description: "Get ready for your journey and enjoy every moment." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [language, setLanguage] = useState("EN");

  const reviews = [
    { name: "Mike taylor", location: "Lahore, Pakistan", quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no." },
    { name: "Chris Thomas", location: "CEO of Red Button", quote: "Jadoo made planning our holiday easy. Every detail felt thoughtful, and we discovered places we would never have found ourselves." },
    { name: "Sara Williams", location: "London, UK", quote: "A lovely way to plan a trip without the stress. The recommendations and simple booking steps made everything feel effortless." }
  ];

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="hero-blob" aria-hidden="true" />
      <header className="navbar container">
        <a href="#home" className="brand" aria-label="Jadoo home">Jadoo<span>.</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <button onClick={() => scrollTo("destinations")}>Destinations</button>
          <button onClick={() => scrollTo("services")}>Hotels</button>
          <button onClick={() => scrollTo("steps")}>Flights</button>
          <button onClick={() => scrollTo("steps")}>Bookings</button>
          <button onClick={() => scrollTo("subscribe")}>Login</button>
          <button className="signup" onClick={() => scrollTo("subscribe")}>Sign up</button>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Select language">
            <option value="EN">EN</option><option value="HI">HI</option><option value="MR">MR</option>
          </select>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow orange">BEST DESTINATIONS AROUND THE WORLD</p>
            <h1>Travel, enjoy<br className="desktop-break" /> and live a new<br className="desktop-break" /> and full life<span className="headline-underline" /></h1>
            <p className="hero-description">Discover new places, meet new people and create memories that last forever. Your next adventure starts here.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("destinations")}>Find out more</button>
              <button className="play-btn" onClick={() => setShowDemo(true)} aria-label="Play demo"><span><Play size={16} fill="currentColor" /></span> Play Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle" />
            <img className="hero-photo" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=90" alt="Traveler exploring a beautiful destination" />
            <div className="flight-doodle doodle-one"><Plane size={42} /></div>
            <div className="flight-doodle doodle-two"><Plane size={35} /></div>
            <div className="floating-note"><span className="note-dot" /> Your next adventure awaits</div>
          </div>
        </section>

        <section className="section services-section container" id="services">
          <div className="section-heading">
            <p className="eyebrow">CATEGORY</p>
            <h2>We Offer Best Services</h2>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, description, color }) => (
              <article className={`service-card ${title === "Best Flights" ? "featured-service" : ""}`} key={title}>
                <div className={`service-icon ${color}`}><Icon size={31} strokeWidth={1.8} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="dot-pattern" aria-hidden="true">＋ ＋ ＋<br />＋ ＋ ＋<br />＋ ＋ ＋</div>
        </section>

        <section className="section destinations-section container" id="destinations">
          <div className="section-heading">
            <p className="eyebrow">Top Selling</p>
            <h2>Top Destinations</h2>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.city}>
                <img src={destination.image} alt={destination.city} loading="lazy" />
                <div className="destination-info">
                  <div className="destination-top"><span>{destination.city}</span><span>{destination.price}</span></div>
                  <p><NavigationIcon /> {destination.days}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section booking-section container" id="steps">
          <div className="booking-copy">
            <p className="eyebrow">Easy and Fast</p>
            <h2>Book Your Next Trip<br />In 3 Easy Steps</h2>
            <div className="steps-list">
              {steps.map(({ icon: Icon, title, description }, index) => (
                <div className="step-item" key={title}>
                  <div className={`step-icon step-${index}`}><Icon size={20} /></div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="booking-visual">
            <article className="trip-card">
              <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85" alt="Santorini, Greece" loading="lazy" />
              <h3>Trip To Greece</h3>
              <p className="trip-meta">14–29 June <span>|</span> by Robin J.</p>
              <div className="trip-tools"><span>⌁</span><span>▣</span><span>➤</span></div>
              <p className="people"><span>♟</span> 24 people going <Heart size={17} /></p>
            </article>
            <article className="ongoing-card">
              <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=200&q=80" alt="" />
              <div><p className="muted">Ongoing</p><h4>Trip to Rome</h4><p className="progress-label"><b>40%</b> completed</p><div className="progress"><span /></div></div>
            </article>
          </div>
        </section>

        <section className="section testimonials-section container" id="testimonials">
          <div className="testimonial-heading">
            <p className="eyebrow">TESTIMONIALS</p>
            <h2>What People Say<br />About Us.</h2>
            <div className="slider-dots" role="tablist" aria-label="Choose testimonial">
              {reviews.map((review, index) => <button key={review.name} className={testimonial === index ? "active" : ""} onClick={() => setTestimonial(index)} aria-label={`Show testimonial ${index + 1}`} />)}
            </div>
          </div>
          <div className="review-wrap">
            <div className="avatar"> {reviews[testimonial].name.charAt(0)} </div>
            <article className="review-card">
              <p className="review-quote">“{reviews[testimonial].quote}”</p>
              <h3>{reviews[testimonial].name}</h3><p className="review-location">{reviews[testimonial].location}</p>
            </article>
            <div className="review-controls">
              <button onClick={() => setTestimonial((testimonial + reviews.length - 1) % reviews.length)} aria-label="Previous testimonial"><ChevronUp size={18} /></button>
              <button onClick={() => setTestimonial((testimonial + 1) % reviews.length)} aria-label="Next testimonial"><ChevronDown size={18} /></button>
            </div>
          </div>
        </section>

        <section className="partners container" aria-label="Travel partners">
          <div className="partner-logo axon">axon<span>✦</span></div>
          <div className="partner-logo jetstar">Jetstar<span>★</span></div>
          <div className="partner-logo expedia"><span className="expedia-mark">◉</span> Expedia</div>
          <div className="partner-logo qantas">◢ QANTAS</div>
          <div className="partner-logo alitalia">Alitalia</div>
        </section>

        <section className="subscribe-section container" id="subscribe">
          <div className="subscribe-decoration" aria-hidden="true" />
          <div className="send-bubble"><Send size={20} fill="currentColor" /></div>
          <h2>Subscribe to get information, latest news and other<br className="desktop-break" /> interesting offers about Jadoo</h2>
          {subscribed ? (
            <div className="success-message"><CheckCircle2 size={21} /> Thanks for subscribing! We'll be in touch.</div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <label className="email-field"><span>✉</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" aria-label="Your email address" required /></label>
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-brand"><a href="#home" className="brand">Jadoo<span>.</span></a><p>Book your trip in minute, get full<br /> control for much longer.</p></div>
        <div className="footer-column"><h3>Company</h3><a href="#home">About</a><a href="#home">Careers</a><a href="#home">Mobile</a></div>
        <div className="footer-column"><h3>Contact</h3><a href="#subscribe">Help/FAQ</a><a href="#subscribe">Press</a><a href="#subscribe">Affiliates</a></div>
        <div className="footer-column"><h3>More</h3><a href="#destinations">Airlinefees</a><a href="#destinations">Airline</a><a href="#destinations">Low fare tips</a></div>
        <div className="footer-social"><div className="social-icons"><a href="#home" aria-label="Facebook"><Facebook size={16} /></a><a href="#home" aria-label="Instagram"><Instagram size={16} /></a><a href="#home" aria-label="Twitter"><Twitter size={16} /></a></div><h3>Discover our app</h3><div className="app-badges"><span>▶ Google Play</span><span>● App Store</span></div></div>
        <p className="copyright">All rights reserved@jadoo.co</p>
      </footer>

      {showDemo && <div className="modal-backdrop" role="presentation" onClick={() => setShowDemo(false)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setShowDemo(false)} aria-label="Close demo"><X /></button><div className="modal-play"><Play fill="currentColor" /></div><h2 id="demo-title">Your next trip starts here</h2><p>Explore destinations, compare options and plan a journey made for you.</p><button className="primary-btn" onClick={() => { setShowDemo(false); scrollTo("destinations"); }}>Explore destinations</button></div></div>}
    </div>
  );
}

function NavigationIcon() {
  return <ArrowUpRight size={15} className="destination-arrow" />;
}

export default App;