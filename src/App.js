// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Colecciones from './components/Colecciones';
import Carrito from './components/Carrito';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Colecciones" element={<Colecciones />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
