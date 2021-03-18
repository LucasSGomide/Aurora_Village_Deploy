import React from 'react';

import financiamento from '../images/financiamento.png';
import natureza from '../images/natureza.png'
import localizacao from '../images/localizacao.png';
import construcao from '../images/construcao.png'

class Diferenciais extends React.Component {
  render() {
    return (
      <div id="dif" className="diferenciais">
        <div>
          <p>PORQUE É UM EMPREENDIMENTO ÚNICO</p>
          <h2>DIFERENCIAIS</h2>
        </div>
        <div className="todos-cards-dif">
          <div className="card-diferenciais">
            <img src={natureza} alt="Logo natureza" />
            <h3>Paisagismo</h3>
            <p>Um paisagismo marcante e generoso compõe as cinco áreas verdes do empreendimento que foi pensado em detalhes, incluindo Parque Urbano que margeia o Rio São João, brindando o município com aprazível espaço arborizado possibilitando a contemplação, estimulando o lazer e proporcionando ambiência climática em uma surpreendente e agradável gentileza urbana.</p>
          </div>
          <div className="card-diferenciais">
            <img src={localizacao} alt="Logo localizacao" />
            <h3>Excelente localização</h3>
            <p>O Aurora Village surge inserido em entorno já consolidado, com alto padrão de moradias, bem como serviços e comércios variados, mantendo a tranquilidade de uma "fazenda"; estando a menos de 1 Km da Praça da Matriz.</p>
          </div>
          <div className="card-diferenciais">
            <img src={construcao} alt="logo construcao" />
            <h3>Lotes prontos para construir</h3>
            <p>Com muito zelo e carinho, planejamos tudo para a sua segura e imediata ocupação. Iluminação pública eficiente, vias planas dotadas de eficaz drenagem pluvial, sistemas de água e esgoto com ligações individualizadas, reservatório próprio, conformação adequada da topografia dos terrenos à das vias, além de passeios harmoniosamente pavimentados.</p>
          </div>
          <div className="card-diferenciais">
            <img src={financiamento} alt="logo financiamento" />
            <h3>Financiamento Próprio</h3>
            <p>Excelentes condições de pagamento.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Diferenciais;
