async function getApi(type) {
  const url = `https://cataas.com/api/${type}`;
  const results = await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(`Error, tente novamente ${error}`));
  return results;
}

export default getApi;
