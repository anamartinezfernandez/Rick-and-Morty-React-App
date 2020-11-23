const getDataFromApi = () => {
  console.log("Obteniendo datos...")
  return fetch ("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(dataJSON => {
      console.log(dataJSON);
      console.log ("Ya tengo los datos");
      const cleanData= dataJSON.results.map ((itemData) => {
        return{
          id: itemData.id,
          status: itemData.status,
          name: itemData.name,
          species: itemData.species,
          photo: itemData.image,
          origin: itemData.origin.name,
          episodes: itemData.episode.length
        };
      });
      console.log(cleanData);
      return cleanData;
    });
}

/* export {getDataFromApi}; */


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataFromApi: getDataFromApi
};