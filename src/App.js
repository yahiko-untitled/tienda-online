// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Colecciones from './components/Colecciones'; // Importamos la nueva página
import Header from './components/Header'; // Usaremos el Header existente

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Ruta de inicio */}
          <Route path="/Colecciones" element={<Colecciones />} /> {/* Ruta para Colecciones */}
          {/* Puedes agregar más rutas para otras secciones */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
