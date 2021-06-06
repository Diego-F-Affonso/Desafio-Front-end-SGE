/* eslint-disable no-undef */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Header from '../components/header';

describe('Header Component', () => {
  test('make sure the header component has two buttons', () => {
    const { getByRole } = renderWithRouter(<Header />);

    const buttonListGats = getByRole('button', { name: /lista de gatos/i });
    const buttonForm = getByRole('button', { name: /formulario/i });

    expect(buttonListGats).toBeInTheDocument();
    expect(buttonForm).toBeInTheDocument();
  });

  test('make sure the buttons redirect form and list pages', () => {
    const { getByRole, history } = renderWithRouter(<Header />);

    const buttonListGats = getByRole('button', { name: /lista de gatos/i });
    const buttonForm = getByRole('button', { name: /formulario/i });

    expect(history.location.pathname).toBe('/');

    fireEvent.click(buttonForm);
    expect(history.location.pathname).toBe('/formulario');

    fireEvent.click(buttonListGats);
    expect(history.location.pathname).toBe('/');
  });
});
