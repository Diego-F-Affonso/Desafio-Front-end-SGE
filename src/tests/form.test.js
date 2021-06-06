/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './renderWithRouter';
import Formulario from '../pages/formulario';

describe('Form page', () => {
  test('check if the document has header with two buttons', () => {
    const { getByRole } = renderWithRouter(<Formulario />);

    const buttonListGats = getByRole('button', { name: /lista de gatos/i });
    const buttonForm = getByRole('button', { name: /formulario/i });

    expect(buttonListGats).toBeInTheDocument();
    expect(buttonForm).toBeInTheDocument();
  });
});
