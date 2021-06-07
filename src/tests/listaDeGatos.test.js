/* eslint-disable no-undef */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import ListaDeGatos from '../pages/listaDeGatos';

describe('Home page with list of cats', () => {
  test('check if the document has header with two buttons', () => {
    const { getByRole } = renderWithRouter(<ListaDeGatos />);

    const buttonListGats = getByRole('button', { name: /lista de gatos/i });
    const buttonForm = getByRole('button', { name: /formulario/i });

    expect(buttonListGats).toBeInTheDocument();
    expect(buttonForm).toBeInTheDocument();
  });

  test('make sure the document has cards with cat tags', () => {
    const { getAllByRole } = renderWithRouter(<ListaDeGatos />);

    const tag1 = getAllByRole('listitem').filter(
      (item) => item.textContent === 'Buckley',
    );
    const tag2 = getAllByRole('listitem').filter(
      (item) => item.textContent === 'felix',
    );

    const tag3 = getAllByRole('listitem').filter(
      (item) => item.textContent === 'worker',
    );

    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(tag3).toBeInTheDocument();
  });

  test('clicking on the tags displays the list of your cats and clicking again hides', () => {
    const { getByRole } = renderWithRouter(<ListaDeGatos />);

    const tagGatGif = getByRole('listitem', { name: /drone/i });

    expect(tagGatGif).toBeInTheDocument();

    fireEvent.click(tagGatGif);

    const gat = getByRole('paragraph', { name: /595f280d557291a9750ebf8f/i });

    expect(gat).toBeInTheDocument();

    fireEvent.click(tagGatGif);

    expect(gat).not.toBeInTheDocument();
  });

  test('clicking the form button redirects the page', () => {
    const { getByRole, history } = renderWithRouter(<ListaDeGatos />);

    const buttonForm = getByRole('button', { name: /formulario/i });

    expect(buttonForm).toBeInTheDocument();
    fireEvent.click(buttonForm);

    const { pathname } = history.location;

    expect(pathname).toBe('/formulario');
  });
});
