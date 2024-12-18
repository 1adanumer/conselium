import React from 'react';
import './FeaturedServices.css';

const FeaturedServices = () => {
  const services = [
    { id: 1, name: 'Compliance Audits', img: 'f1.jpg' },
    { id: 2, name: 'Risk Assessment', img: 'f2.jpg' },
    { id: 3, name: 'Policy Development', img: 'f3.jpg' },
    { id: 4, name: 'Training Programs', img: 'f4.jpg' },
  ];

  return (
    <section className="featured-services">
      <div className="heading">
        <h2>Our Featured Services</h2>
        <p>
          Elevate your AMLCFT compliance and financial crime expertise with Consilium Advisory. Our bespoke solutions tackle your unique challenges, paving the way for enduring success and robust protection against financial threats.
        </p>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.img} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
            <button className="service-button">Book Service</button>
          </div>
        ))}
      </div>

      {/* New Section: Elevate Your Expertise */}
      <section className="elevate-expertise">
        <div className="heading">
          <h2>Elevate Your Expertise</h2>
          <p>
            Enhance your knowledge and skills in AMLCFT compliance and financial crime prevention with our expert-led training programs and resources. Watch the video below to learn more about our approach and how we can help you stay ahead of the curve.
          </p>
        </div>
        <div className="video-container">
          <video controls>
            <source src="1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </section>
  );
};

export default FeaturedServices;