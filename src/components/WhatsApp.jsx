import React from 'react';
import WhatsAppImg from '../images/WHATSAPP.png';

class WhatsApp extends React.Component {
  render() {
    return (
      <a href="https://wa.me/5531986540018" target="_blank">
       <img className="whatsapp" src={WhatsAppImg} alt="Logomarca Whatsapp" />
      </a>
    );
  }
}

export default WhatsApp;
