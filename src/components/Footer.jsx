import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="contato-footer">
          <div className="div-footer">
            <p className="font-white">LIGUE PARA NÓS:</p>
            <p>³¹ 98654-0017</p>
          </div>
          <div className="div-footer">
            <p className="font-white">ENVIE UM E-MAIL:</p>
            <p>contato.empreendimentosms@gmail.com</p>
          </div>
        </section>
        <section className="direitos-reservados">
          <div>
            ©2020. Empreendimentos Moreira Santiago. Todos os direitos reservados. All rights reserverd
          </div>
          <div>
            Link github
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
