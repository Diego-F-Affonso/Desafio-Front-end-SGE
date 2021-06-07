import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CatsContext from './catsContext';
import getApi from '../services/index';

function Provider({ children }) {
  const [tags, setTags] = useState([]);
  const [cats, setCats] = useState([]);

  const fetchTags = async () => {
    const searchTags = await getApi('tags');
    searchTags.shift();
    setTags(searchTags);
  };

  const fetchCats = async () => {
    const searchCats = await getApi('cats');
    setCats(searchCats);
  };

  const valueProvider = {
    fetchTags,
    tags,
    fetchCats,
    cats,
  };

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
