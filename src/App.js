import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListaDeGatos from './pages/listaDeGatos';
import Formulario from './pages/formulario';

function App() {
  return (
    <Switch>
      <Route path="/formulário" component={Formulario} />
      <Route exact path="/" component={ListaDeGatos} />
    </Switch>
  );
}

export default App;
