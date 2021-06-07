import React, { useContext } from 'react';
import Header from '../../components/header';
import StepOneForm from '../../components/stepOneForm';
import StepTwoForm from '../../components/stepTwoForm';
import StepThreeForm from '../../components/stepThreeForm';
import CatsContext from '../../context/catsContext';
import './index.css';

function Formulario() {
  const { step, setStep } = useContext(CatsContext);
  return (
    <div>
      <Header />
      <div className="wrapper--form">
        <div
          role="button"
          onClick={() => {
            setStep(1);
          }}
          onKeyPress={() => {}}
          tabIndex="0"
        >
          Etapa 1
        </div>
        <div
          role="button"
          onClick={() => {
            setStep(2);
          }}
          onKeyPress={() => {}}
          tabIndex="0"
        >
          Etapa 2
        </div>
        <div
          role="button"
          onClick={() => {
            setStep(3);
          }}
          onKeyPress={() => {}}
          tabIndex="0"
        >
          Etapa 3
        </div>
      </div>
      {step === 1 && <StepOneForm />}
      {step === 2 && <StepTwoForm />}
      {step === 3 && <StepThreeForm />}
    </div>
  );
}

export default Formulario;
