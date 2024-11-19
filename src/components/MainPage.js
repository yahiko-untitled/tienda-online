// components/MainPage.js
import React from 'react';
import Header from 'C:/Docs/vs code/Act11-Web/refuerzo-react/src/components/Header.js';
import Card from 'C:/Docs/vs code/Act11-Web/refuerzo-react/src/components/Card.js';
import Footer from 'C:/Docs/vs code/Act11-Web/refuerzo-react/src/components/Footer.js';

const MainPage = () => {
  return (
    <div style={styles.mainPage}>
      <Header />
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
