// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Colecciones from './components/Colecciones';
import Carrito from './components/Carrito'; // Importamos el nuevo componente
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Colecciones" element={<Colecciones />} />
          <Route path="/Carrito" element={<Carrito />} /> {/* Nueva ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
