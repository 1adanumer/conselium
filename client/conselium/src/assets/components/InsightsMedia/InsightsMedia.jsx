import React, { useEffect, useState } from 'react';
import './InsightsMedia.css';

const InsightsMedia = () => {
  const cards = [
    {
      title: "Episode 7: How Did Venezuela’s Oil Riches End up in Swiss Banks?",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode7-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 6: Sanctioning an Oligarch is Not an Easy Task – Searching for Usmanov’s Millions",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode6-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 5: Russian Meddling in Catalonia – A Playbook In Destabilization",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode5-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 4: Exposing a Former Czech PM’s Offshore Finances",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode4-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 3: Bleeding Trees – Tracking Illegal Loggers in Namibia",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode3-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 2: The Beirut Blast – What Led to the Lebanon Port Explosion?",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode2-play.jpg", // Replace with actual image URL
    },
    {
      title: "Episode 1: How Azerbaijan’s Ruling Family Launder Their Millions",
      buttonText: "Read More",
      author: "OCCRP Podcasts",
      date: "August 19, 2024",
      imageUrl: "https://consiliumadvisory.me/wp-content/uploads/2024/08/podcast-episode1-play.jpg", // Replace with actual image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="insights">
      <h2 className="insights-heading">Insights & Media</h2>
      <p className="insights-paragraph">
        The latest insights and events in the field of business consulting.
      </p>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {cards.map((card, index) => (
            <div className="carousel-card" key={index}>
              <img src={card.imageUrl} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <button className="card-button">{card.buttonText}</button>
              <p className="card-details">{card.author}</p>
              <p className="card-details">{card.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsMedia;
