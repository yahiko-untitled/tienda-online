// components/Card.js
import React from 'react';

const Card = ({ title, description, imgSrc }) => {
  return (
    <div style={styles.card}>
      <img src={imgSrc} alt={title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button style={styles.cardButton}>Ver más</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#222',
    borderRadius: '8px',
    width: '300px',
    overflow: 'hidden',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1rem',
  },
  cardButton: {
    backgroundColor: '#e60073',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '1rem',
  },
};

export default Card;
