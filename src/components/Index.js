import React from 'react';
import './Index.css';
import image1 from '../imagenes/image1.jpg'; // Ruta a la primera imagen
import image2 from '../imagenes/image2.jpg'; // Ruta a la segunda imagen

function Index() {
  return (
    <div className="index-container">
      <h2>Página de Index</h2>
      <div className="image-row">
        <img src={image1} alt="Imagen 1" className="image" />
        <img src={image2} alt="Imagen 2" className="image" />
      </div>
    </div>
  );
}

export default Index;

