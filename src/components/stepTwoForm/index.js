import React, { useContext, useEffect } from 'react';
import CatsContext from '../../context/catsContext';

function StepTwoForm() {
  const {
    setStep,
    disabled,
    name,
    setName,
    lastName,
    setLastName,
    birthDate,
    setBirthDate,
    validateForms,
  } = useContext(CatsContext);

  useEffect(() => {
    validateForms();
  }, [name, lastName]);

  return (
    <div className="container--stepOne">
      <p>Etapa selecionada: Etapa 2</p>
      <div>
        <form className="stepOne--form">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              required="required"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </label>
          <label htmlFor="lastName">
            Sobrenome
            <input
              type="text"
              name="lastName"
              required="required"
              value={lastName}
              onChange={({ target }) => {
                setLastName(target.value);
              }}
            />
          </label>
          <label htmlFor="birthDate">
            Data de Nascimento
            <input
              type="date"
              name="birthDate"
              value={birthDate}
              onChange={({ target }) => {
                setBirthDate(target.value);
              }}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setStep(1);
            }}
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={() => {
              setStep(3);
            }}
          >
            Avançar
          </button>
          <button
            type="button"
            onClick={() => {
              alert('Fomulário enviado com sucesso!');
            }}
            disabled={disabled}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default StepTwoForm;
