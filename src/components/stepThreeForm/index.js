import React, { useContext, useEffect } from 'react';
import CatsContext from '../../context/catsContext';

function StepThreeForm() {
  const { setStep, disabled, address, setAddress, validateForms } =
    useContext(CatsContext);

  useEffect(() => {
    validateForms();
  }, [address]);

  return (
    <div className="container--stepOne">
      <p>Etapa selecionada: Etapa 3</p>
      <div>
        <form className="stepOne--form">
          <label htmlFor="address">
            Endereço Completo
            <input
              type="text"
              name="address"
              required="required"
              value={address}
              onChange={({ target }) => {
                setAddress(target.value);
                validateForms();
              }}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setStep(2);
            }}
          >
            Voltar
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

export default StepThreeForm;
