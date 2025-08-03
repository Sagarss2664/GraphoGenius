// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             Handwritten Pattern Prediction System
//           </h1>
//           <p className="hero-subtitle">
//             Advanced AI-powered analysis for handwriting patterns and behavioral insights
//           </p>
//           <p className="hero-description">
//             Our cutting-edge system combines graphology, psychology, and machine learning 
//             to provide accurate handwriting analysis for hiring, psychological assessment, 
//             and personal development.
//           </p>
//         </div>
//       </div>

//       <div className="features-section">
//         <div className="container">
//           <h2 className="section-title">Key Features</h2>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">✍️</div>
//               <h3>Handwriting Analysis</h3>
//               <p>Advanced pattern recognition and analysis of handwriting samples</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🧠</div>
//               <h3>Psychological Insights</h3>
//               <p>Professional psychological assessment based on handwriting patterns</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">👥</div>
//               <h3>Hiring Support</h3>
//               <p>Assist hiring managers with candidate personality assessment</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">📊</div>
//               <h3>Detailed Reports</h3>
//               <p>Comprehensive reports with actionable insights and recommendations</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="cta-section">
//         <div className="container">
//           <h2 className="cta-title">Get Started Today</h2>
//           <p className="cta-description">
//             Join our platform to access professional handwriting analysis tools
//           </p>
//           <div className="cta-buttons">
//             <Link to="/register" className="btn btn-primary">
//               Register Now
//             </Link>
//             <Link to="/user-login" className="btn btn-secondary">
//               User Login
//             </Link>
//             <Link to="/admin-login" className="btn btn-admin">
//               Admin Login
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="info-section">
//         <div className="container">
//           <div className="info-grid">
//             <div className="info-card">
//               <h3>For Professionals</h3>
//               <ul>
//                 <li>Graphologists</li>
//                 <li>Hiring Managers</li>
//                 <li>Psychiatrists</li>
//                 <li>HR Professionals</li>
//               </ul>
//             </div>
//             <div className="info-card">
//               <h3>Secure Process</h3>
//               <ul>
//                 <li>Admin verification required</li>
//                 <li>Secure login system</li>
//                 <li>Email notifications</li>
//                 <li>Activity tracking</li>
//               </ul>
//             </div>
//             <div className="info-card">
//               <h3>Easy Registration</h3>
//               <ul>
//                 <li>Simple sign-up process</li>
//                 <li>Quick admin approval</li>
//                 <li>Email credentials delivery</li>
//                 <li>Instant access after approval</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2025 Handwritten Pattern Prediction System. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Add animation effects on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');
      elements.forEach((el) => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="home-container">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon">✍️</span>
            <span className="logo-text">GraphoGenius</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/admin-login" className="nav-link">Admin</Link>
            <div className="auth-buttons">
              <Link to="/user-login" className="btn btn-login">Login</Link>
              <Link to="/register" className="btn btn-register">Register</Link>
            </div>
          </div>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              <span className="text-gradient">Unlock Secrets</span> in Every Stroke
            </h1>
            <p className="hero-subtitle">
              AI-powered handwriting analysis for <span className="highlight">HR, Psychology & Self-Discovery</span>
            </p>
            <div className="hero-cta">
              <Link to="/demo" className="btn btn-demo">
                🚀 Try Live Demo
              </Link>
              <Link to="/register" className="btn btn-primary">
                ✨ Get Started Free
              </Link>
            </div>
          </div>
          <div className="hero-image zoom-in">
            <div className="floating-card">
              <div className="handwriting-sample"></div>
              <div className="analysis-result">
                <h4>AI Analysis Result</h4>
                <ul>
                  <li>✅ <strong>Confidence:</strong> 92%</li>
                  <li>🎨 <strong>Creativity:</strong> 85%</li>
                  <li>📊 <strong>Organization:</strong> 78%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features-section">
        <div className="container">
          <div className="section-header slide-up">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">GraphoGenius?</span>
            </h2>
            <p className="section-subtitle">
              Cutting-edge AI meets psychology for deep personality insights.
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: "🔍", title: "Deep Analysis", desc: "200+ handwriting traits analyzed" },
              { icon: "🧠", title: "AI-Powered", desc: "Machine learning for accuracy" },
              { icon: "📈", title: "HR Tools", desc: "Optimize hiring decisions" },
              { icon: "💡", title: "Self-Growth", desc: "Understand your strengths" },
            ].map((feature, index) => (
              <div className="feature-card zoom-in" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="glow-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header slide-up">
            <h2 className="section-title">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="section-subtitle">
              Get insights in just 3 simple steps.
            </p>
          </div>
          <div className="steps">
            {[
              { num: "1", title: "Upload", desc: "Write & scan your sample" },
              { num: "2", title: "Analyze", desc: "AI processes handwriting" },
              { num: "3", title: "Discover", desc: "Get your personality report" },
            ].map((step, index) => (
              <div className="step-card fade-in" key={index}>
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="step-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header slide-up">
            <h2 className="section-title">
              Trusted by <span className="text-gradient">Experts</span>
            </h2>
          </div>
          <div className="testimonial-cards">
            {[
              { 
                quote: "This tool transformed our hiring process with 90% accuracy!",
                name: "Sarah Johnson", 
                role: "HR Director @TechCorp" 
              },
              { 
                quote: "As a psychologist, I rely on GraphoGenius for quick assessments.",
                name: "Dr. Michael Chen", 
                role: "Clinical Psychologist" 
              },
            ].map((testimonial, index) => (
              <div className="testimonial-card zoom-in" key={index}>
                <div className="quote">"{testimonial.quote}"</div>
                <div className="author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content slide-up">
            <h2>Ready to Discover Your Personality?</h2>
            <p>Join thousands who unlocked hidden traits through handwriting.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                ✨ Start Free Trial
              </Link>
              <Link to="/demo" className="btn btn-outline btn-lg">
                🎥 Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>GraphoGenius</h3>
              <p>AI-powered handwriting analysis for professionals.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <ul>
                <li>✉️ hello@graphogenius.com</li>
                <li>📞 +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 GraphoGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;