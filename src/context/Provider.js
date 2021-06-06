import React from 'react';
import PropTypes from 'prop-types';
import CatsContext from './catsContext';

function Provider({ children }) {
  const valueProvider = {};

  return (
    <CatsContext.Provider value={valueProvider}>
      {children}
    </CatsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
