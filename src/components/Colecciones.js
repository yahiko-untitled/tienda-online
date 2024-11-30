// components/Colecciones.js
import React from 'react';

const Colecciones = () => {
  const productos = [
    {
      id: 1,
      titulo: "Camiseta Básica",
      descripcion: "Camiseta de algodón 100% para uso diario.",
      imagen: "https://i5.walmartimages.com/asr/8d178e5e-e3ee-468c-ab19-54ee069bcc43.afbeb178ee4da9ea96d99ba6c9eab0c3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", 
    },
    {
      id: 2,
      titulo: "Pantalones Slim Fit",
      descripcion: "Pantalones cómodos y elegantes.",
      imagen: "https://oldnavymx.vtexassets.com/arquivos/ids/388615-800-1067?v=638421640745270000&width=800&height=1067&aspect=true",
    },
    {
      id: 3,
      titulo: "Chaqueta de Invierno",
      descripcion: "Abrigo resistente al agua y cálido.",
      imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/52a29abc-cf27-4ccc-a0de-fb1d20690f41.a9a46faa6b0c12c8a4d9154118f26b86.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 4,
      titulo: "Vestido Casual",
      descripcion: "Vestido ligero ideal para verano.",
      imagen: "https://images.ecestaticos.com/gGsF4GK-mvS572FlZPQwSqgDQ9E=/0x0:1799x1349/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb2d%2F639%2Fc82%2Fb2d639c82f16c4fad4a587f39a5df43d.jpg",
    },
    {
      id: 5,
      titulo: "Zapatos Deportivos",
      descripcion: "Calzado cómodo para el día a día.",
      imagen: "https://nb.scene7.com/is/image/NB/ml574evn_nb_02_i?wid=880&hei=880",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Colecciones</h1>
      <div style={styles.productosLista}>
        {productos.map((producto) => (
          <div key={producto.id} style={styles.productoItem}>
            <img
              src={producto.imagen}
              alt={producto.titulo}
              style={styles.imagen}
            />
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
  imagen: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover', // Ajusta la imagen dentro del contenedor
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
