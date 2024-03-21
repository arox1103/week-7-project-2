// DestinationsSection.js
import React from 'react';

function DestinationsSection() {
  const destinations = [
    { name: 'Paris', image: './paris.jpeg', description: 'Explore the romantic streets of Paris and marvel at the Eiffel Tower.' },
    { name: 'Tokyo', image: './tokyo.jpg', description: 'Experience the vibrant culture of Tokyo and taste delicious sushi.' },
    { name: 'New York', image: './newyork.jpeg', description: 'Discover the bustling streets of New York City and visit iconic landmarks.' },
  ];

  return (
    <section id="destinations" className="destinations">
      <h2 className="destinations__title">Popular Destinations</h2>
      <div className="destinations__grid">
        {destinations.map(destination => (
          <div key={destination.name} className="destination">
            <img src={require(`./images/${destination.image}`).default} alt={destination.name} className="destination__image" />
            <h3 className="destination__name">{destination.name}</h3>
            <p className="destination__description">{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
