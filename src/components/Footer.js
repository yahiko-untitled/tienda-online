// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Libertalia. Todos los derechos reservados.</p>
      <p>Síguenos en: Facebook | Instagram | Twitter</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: '2rem',
  },
};

export default Footer;
