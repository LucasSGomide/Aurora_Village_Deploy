import React from 'react';
import emailjs from 'emailjs-com';

class ContactSection extends React.Component {

  constructor() {
    super();

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_empreendimentos', e.target, 'user_3BqkQHfKE57hn6XFbyumM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset()
  }

  render() {
    return (
      <section id="contato" className="contact-section">
        <div>
          <h2>LOTES DE 300M² EM UMA LOCALIZAÇÃO INCOMPARÁVEL</h2>
          <h4>Localização privilegiada a X minutos do centro de itaúna...</h4>
        </div>
        <form onSubmit={this.sendEmail}>
          <h2>ENTRE EM CONTATO</h2>
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Nome" name="name" />
          </label>
          <label htmlFor="email">
            <input type="text" id="email" placeholder="Email" name="email" />
          </label>
          <label htmlFor="phone">
            <input type="text" id="phone" placeholder="Telefone" name="phone"/>
          </label>
          <label htmlFor="message">
            <textarea id="message" placeholder="Escreva aqui sua mensagem !" name="message" />
          </label>
          <label htmlFor="submit">
            <input type="submit" value="ENVIAR" id="submit" />
          </label>
        </form>
      </section>
    );
  }
}

export default ContactSection;
