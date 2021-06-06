/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './renderWithRouter';
import StepThreeForm from '../components/stepThreeForm';

describe('Step Three Form Component', () => {
  test('make sure the step has an entry with your name', () => {
    const { getByRole } = renderWithRouter(<StepThreeForm />);

    const inputFullAddress = getByRole('textbox', {
      name: /endereço completo/i,
    });

    expect(inputFullAddress).toBeInTheDocument();
  });

  test('has the send button and it is disabled', () => {
    const { getByRole } = renderWithRouter(<StepThreeForm />);

    const sendButton = getByRole('button', { name: /Enviar/i });

    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toBeDisabled();
  });
});
