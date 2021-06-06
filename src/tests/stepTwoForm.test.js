/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './renderWithRouter';
import StepTwoForm from '../components/stepTwoForm';

describe('Step Two Form Component', () => {
  test('make sure the step has three inputs with their names', () => {
    const { getByRole } = renderWithRouter(<StepTwoForm />);

    const inputName = getByRole('textbox', { name: /Nome/i });
    const inputLastName = getByRole('textbox', { name: /Sobrenome/i });
    const inputBirthDate = getByRole('textbox', {
      name: /data de nascimento/i,
    });

    expect(inputName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputBirthDate).toBeInTheDocument();
  });

  test('if you have the forward button', () => {
    const { getByRole } = renderWithRouter(<StepTwoForm />);

    const forwardButton = getByRole('button', { name: /avançar/i });

    expect(forwardButton).toBeInTheDocument();
  });

  test('has the send button and it is disabled', () => {
    const { getByRole } = renderWithRouter(<StepTwoForm />);

    const sendButton = getByRole('button', { name: /Enviar/i });

    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toBeDisabled();
  });
});
