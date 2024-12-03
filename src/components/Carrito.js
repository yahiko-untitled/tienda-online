// components/Carrito.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, calculateTotal, applyPromoCode } = useContext(CartContext);
  const [promoCodeInput, setPromoCodeInput] = useState("");

  const handleApplyPromo = () => {
    applyPromoCode(promoCodeInput);
    setPromoCodeInput("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Carrito de Compras</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <h2 style={styles.name}>{item.titulo}</h2>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)} style={styles.button}>
              Remover
            </button>
          </div>
        ))}
      </div>
      <h2 style={styles.total}>Total: ${calculateTotal().toFixed(2)}</h2>
      <input
        type="text"
        value={promoCodeInput}
        onChange={(e) => setPromoCodeInput(e.target.value)}
        placeholder="Código de promoción"
        style={styles.input}
      />
      <button onClick={handleApplyPromo} style={styles.button}>Aplicar Código</button>
      <button onClick={clearCart} style={styles.clearButton}>Vaciar Carrito</button>
    </div>
  );
};

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  title: { fontSize: '2rem', marginBottom: '20px' },
  item: { border: '1px solid #ddd', padding: '10px', marginBottom: '10px' },
  name: { fontSize: '1.2rem' },
  total: { fontSize: '1.5rem', margin: '20px 0' },
  button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', margin: '5px' },
  clearButton: { padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' },
  input: { padding: '10px', margin: '10px' },
};

export default Carrito;
