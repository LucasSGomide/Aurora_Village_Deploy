import React from 'react';
import logo from '../images/HEADER_LOGO.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Logomarca Aurora Village" />
        <nav>
          <a href="#dif">DIFERENCIAIS</a>
          <a href="#video">ASSISTA O VÍDEO</a>
          <a href="#loc">LOCALIZAÇÃO</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </header>
    );
  }
}

export default Header;
