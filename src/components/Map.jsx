import React from 'react';
// import { Map, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

import '../styles/Map.css';

// const token = 'pk.eyJ1IjoibHVjYXNjdiIsImEiOiJja2c2emlwbTQwMmNlMnBubjZhZTNieGViIn0.T2u21uEXfzBTC3ylOdHHMA';

class Mapa extends React.Component {
  render() {
    return (
      <div id="loc" className="localizacao">
        <h2>Localização</h2>
        <div className="mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1873.691440978169!2d-44.570536242062985!3d-20.07627537740017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa733b2d994d2a7%3A0x6f0049c3ed523087!2sAurora%20Village!5e0!3m2!1spt-BR!2sbr!4v1602629054761!5m2!1spt-BR!2sbr" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default Mapa;
