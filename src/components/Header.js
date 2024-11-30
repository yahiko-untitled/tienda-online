// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Libertalia</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Inicio</Link>
        <Link to="/Colecciones" style={styles.navLink}>Colecciones</Link>
        <Link to="/Ofertas" style={styles.navLink}>Ofertas</Link>
        <Link to="/Contacto" style={styles.navLink}>Contacto</Link>
        <Link to="/Carrito" style={styles.navLink}>Carrito</Link> {}
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
