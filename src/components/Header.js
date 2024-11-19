// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Libertalia</h1>
      <nav style={styles.nav}>
        <a href="Inicio" style={styles.navLink}>Inicio</a>
        <a href="Colecciones" style={styles.navLink}>Colecciones</a>
        <a href="Ofertas" style={styles.navLink}>Ofertas</a>
        <a href="Contacto" style={styles.navLink}>Contacto</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;
