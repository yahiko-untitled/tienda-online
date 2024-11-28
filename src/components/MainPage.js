// components/MainPage.js
import React from 'react';
import Card from './Card.js';
import Footer from './Footer.js';

const MainPage = () => {
  return (
    <div style={styles.mainPage}>
      
      <section style={styles.cardSection}>
        <Card title="Nuevas Colecciones" description="Explora nuestras últimas colecciones de moda." imgSrc="https://solink.com/wp-content/uploads/2023/11/how-to-sell-retail-clothing.jpg" />
        <Card title="Categorías Populares" description="Descubre nuestras categorías más buscadas." imgSrc="https://www.permanentstyle.com/wp-content/uploads/2021/04/hang-up-vintage-london-580x464.jpg" />
        <Card title="Ofertas Exclusivas" description="Aprovecha descuentos únicos en la tienda." imgSrc="https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_large/public/perry-merrity-ii-gprji5r4rak-unsplash.jpg?itok=0Ert-3zu" />
      </section>
      <Footer />
    </div>
  );
};

const styles = {
  mainPage: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  cardSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem 0',
  },
};

export default MainPage;
