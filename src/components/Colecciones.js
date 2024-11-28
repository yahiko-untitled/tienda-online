// components/Colecciones.js
import React from 'react';

const Colecciones = () => {
  const productos = [
    { id: 1, titulo: "Camiseta Básica", descripcion: "Camiseta de algodón 100% para uso diario." },
    { id: 2, titulo: "Pantalones Slim Fit", descripcion: "Pantalones cómodos y elegantes." },
    { id: 3, titulo: "Chaqueta de Invierno", descripcion: "Abrigo resistente al agua y cálido." },
    { id: 4, titulo: "Vestido Casual", descripcion: "Vestido ligero ideal para verano." },
    { id: 5, titulo: "Zapatos Deportivos", descripcion: "Calzado cómodo para el día a día." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Colecciones</h1>
      <div style={styles.productosLista}>
        {productos.map((producto) => (
          <div key={producto.id} style={styles.productoItem}>
            <div style={styles.imagenPlaceholder}>
              <p>Imagen</p>
            </div>
            <div style={styles.detalle}>
              <h2 style={styles.productoTitulo}>{producto.titulo}</h2>
              <p style={styles.productoDescripcion}>{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  productosLista: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  productoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  imagenPlaceholder: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  },
  detalle: {
    textAlign: 'left',
  },
  productoTitulo: {
    margin: 0,
    fontSize: '1.2rem',
  },
  productoDescripcion: {
    margin: '5px 0 0',
    color: '#555',
  },
};

export default Colecciones;
