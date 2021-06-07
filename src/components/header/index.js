import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

function Header() {
  const history = useHistory();
  return (
    <div className="container">
      <h1>HEADER</h1>
      <button
        type="button"
        onClick={() => {
          history.push('/');
        }}
      >
        Lista de Gatos
      </button>
      <button
        type="button"
        onClick={() => {
          history.push('/formulário');
        }}
      >
        Formulário
      </button>
    </div>
  );
}

export default Header;
