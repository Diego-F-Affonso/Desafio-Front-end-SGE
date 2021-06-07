import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CatsContext from './catsContext';
import getApi from '../services/index';

function Provider({ children }) {
  const [tags, setTags] = useState([]);
  const [cats, setCats] = useState([]);
  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');

  const fetchTags = async () => {
    const searchTags = await getApi('tags');
    searchTags.shift();
    setTags(searchTags);
  };

  const fetchCats = async () => {
    const searchCats = await getApi('cats');
    setCats(searchCats);
  };

  const validateForms = () => {
    if (
      email !== undefined &&
      email.length !== 0 &&
      password !== undefined &&
      password.length !== 0 &&
      passwordConfirmed !== undefined &&
      passwordConfirmed.length !== 0 &&
      password === passwordConfirmed &&
      name !== undefined &&
      name.length !== 0 &&
      lastName !== undefined &&
      lastName.length !== 0 &&
      address !== undefined &&
      address.length !== 0
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  const valueProvider = {
    fetchTags,
    tags,
    fetchCats,
    cats,
    step,
    setStep,
    disabled,
    setDisabled,
    validateForms,
    setEmail,
    setPassword,
    setPasswordConfirmed,
    setName,
    setLastName,
    setAddress,
    birthDate,
    setBirthDate,
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
