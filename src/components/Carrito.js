// components/Carrito.js
import React from 'react';

const Carrito = () => {
  const productosEnCarrito = [
    { id: 1, nombre: "Camiseta Básica", precio: "$10.00", cantidad: 2 },
    { id: 2, nombre: "Pantalones Slim Fit", precio: "$25.00", cantidad: 1 },
    { id: 3, nombre: "Zapatos Deportivos", precio: "$40.00", cantidad: 1 },
  ];

  const calcularTotal = () => {
    return productosEnCarrito.reduce(
      (total, producto) =>
        total + parseFloat(producto.precio.slice(1)) * producto.cantidad,
      0
    ).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Carrito de Compras</h1>
      <div style={styles.productosLista}>
        {productosEnCarrito.map((producto) => (
          <div key={producto.id} style={styles.productoItem}>
            <h2 style={styles.nombre}>{producto.nombre}</h2>
            <p style={styles.detalle}>Precio: {producto.precio}</p>
            <p style={styles.detalle}>Cantidad: {producto.cantidad}</p>
          </div>
        ))}
      </div>
      <h2 style={styles.total}>Total: ${calcularTotal()}</h2>
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
    gap: '15px',
  },
  productoItem: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  nombre: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#000', // Cambiado a negro
  },
  detalle: {
    margin: '5px 0',
    color: '#555',
  },
  total: {
    marginTop: '20px',
    fontSize: '1.5rem',
    color: '#fff', // Cambiado a blanco
    backgroundColor: '#333', // Fondo oscuro para contraste
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  },
};

export default Carrito;
