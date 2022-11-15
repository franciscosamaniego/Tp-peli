import React from 'react';

// footer component
const Footer = () => {
  return (
    <div className="text-center mb-3">
      <p className="git"> Creado por el grupo 1:
      <i className="fa fa-github fa-3x text-dark"></i>
      </p>
      <a href="https://github.com/santiago-calvelo" ><p className="git">
      Calvelo Santiago</p> </a>
      <a href="https://github.com/luccacaval"><p className="git">
      Cavalcanti Lucca</p></a>
      <a href="https://github.com/CotariNicolas"><p className="git">
      Cotari Nicolas</p></a>
      <a href="https://github.com/franciscosamaniego"><p className="git">
      Samaniego Francisco</p></a>
      <a href="https://github.com/vfran128"><p className="git">
      Vallejos Francisco</p></a>
    </div>
  );
};

export default Footer;
