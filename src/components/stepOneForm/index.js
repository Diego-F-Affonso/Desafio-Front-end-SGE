import React, { useContext, useEffect, useState } from 'react';
import CatsContext from '../../context/catsContext';
import './index.css';

function StepOneForm() {
  const {
    setStep,
    disabled,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmed,
    setPasswordConfirmed,
    validateForms,
  } = useContext(CatsContext);

  const [valid, setValid] = useState('noValid');
  // const [validEmail, setValidEmail] = useState('noValid');
  // const [validPassword, setValidPassword] = useState('noValid');

  const validadeInfo = () => {
    const six = 6;
    const regex = /\S+@\S+\.\S+/;

    if (
      regex.test(email) &&
      password.length > six &&
      password === passwordConfirmed
    )
      setValid('valid');
    // else setValid('noValid');
  };

  useEffect(() => {
    validateForms();
    validadeInfo();
  }, [email, password, passwordConfirmed]);

  return (
    <div className="container--stepOne">
      <p className={valid}>Etapa selecionada: Etapa 1</p>
      <div>
        <form className="stepOne--form">
          <label htmlFor="email" className="validEmail">
            Email
            <input
              type="email"
              name="email"
              required="required"
              placeholder="test"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
                validadeInfo();
              }}
            />
          </label>
          <label htmlFor="password" className="validPassword">
            Senha
            <input
              type="password"
              name="password"
              required="required"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
                validadeInfo();
              }}
            />
          </label>
          <label htmlFor="passwordConfirmed" className="validPassword">
            Confirme a Senha
            <input
              type="password"
              name="passwordConfirmed"
              required="required"
              value={passwordConfirmed}
              onChange={({ target }) => {
                setPasswordConfirmed(target.value);
                validadeInfo();
              }}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setStep(2);
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

export default StepOneForm;
