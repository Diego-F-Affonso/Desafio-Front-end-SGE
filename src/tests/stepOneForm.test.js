/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './renderWithRouter';
import StepOneForm from '../components/stepOneForm';
// import Formulario from '../pages/formulario';

describe('Step one Form Component', () => {
  test('make sure the step has three inputs with their names', () => {
    const { getByRole } = renderWithRouter(<StepOneForm />);

    const inputEmail = getByRole('textbox', { name: /Email/i });
    const inputPassword = getByRole('textbox', { name: /Senha/i });
    const inputConfirmPassword = getByRole('textbox', {
      name: /Confirmação de senha/i,
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmPassword).toBeInTheDocument();
  });

  test('if you have the forward button', () => {
    const { getByRole } = renderWithRouter(<StepOneForm />);

    const forwardButton = getByRole('button', { name: /avançar/i });

    expect(forwardButton).toBeInTheDocument();
  });

  test('has the send button and it is disabled', () => {
    const { getByRole } = renderWithRouter(<StepOneForm />);

    const sendButton = getByRole('button', { name: /Enviar/i });

    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toBeDisabled();
  });
});
