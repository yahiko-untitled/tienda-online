// components/Colecciones.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Colecciones = () => {
  const { addToCart } = useContext(CartContext);

  const productos = [
    { id: 1, titulo: "Camiseta Básica", descripcion: "Camiseta de algodón 100%.", price: 10 },
    { id: 2, titulo: "Pantalones Slim Fit", descripcion: "Pantalones cómodos y elegantes.", price: 25 },
    { id: 3, titulo: "Chaqueta de Invierno", descripcion: "Abrigo cálido y resistente al agua.", price: 50 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Colecciones</h1>
      <div style={styles.productosLista}>
        {productos.map((producto) => (
          <div key={producto.id} style={styles.productoItem}>
            <h2 style={styles.productoTitulo}>{producto.titulo}</h2>
            <p style={styles.productoDescripcion}>{producto.descripcion}</p>
            <p style={styles.productoPrecio}>Precio: ${producto.price}</p>
            <button onClick={() => addToCart(producto)} style={styles.button}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  title: { fontSize: '2rem', marginBottom: '20px' },
  productosLista: { display: 'flex', flexDirection: 'column', gap: '20px' },
  productoItem: { padding: '15px', border: '1px solid #ddd', borderRadius: '8px' },
  productoTitulo: { fontSize: '1.2rem' },
  productoDescripcion: { marginBottom: '10px' },
  productoPrecio: { fontWeight: 'bold' },
  button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};

export default Colecciones;
