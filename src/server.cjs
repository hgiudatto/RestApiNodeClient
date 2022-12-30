const { getCharacters, getCharacter } = require("rickmortyapi");

const getRickAndMortyCharacters = async () => {
  const response = await getCharacters({ page: 1 });
  response.data.results.map((char) => {
    console.log(
      `rickmortyapi example: Name: ${char.name} - Species: ${char.species} - Gender: ${char.gender} - Status: ${char.status} - Image: ${char.image}`
    );
  });
};

const getRickAndMortyCharactersById = async (charId) => {
  const resp = await getCharacter(charId);
  console.log(
    `Character: ${charId} | name: ${resp.data.name} | status: ${resp.data.status} | gender: ${resp.data.gender} | Origin name: ${resp.data.origin.name} url: ${resp.data.origin.url} | Location name: ${resp.data.location.name} url: ${resp.data.location.url} | image: ${resp.data.image} | url: ${resp.data.url} | created: ${resp.data.created}`
  );
};

const getRickAndMortyCharactersByIds = async (...ids) => {
  const resp = await getCharacter([...ids]);
  resp.data.map((character) => {
    console.log({
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
    });
  });
};

/* const promiseAll = async () => {
  let args = [8, 15, 19];
  const oneCharacter = getRickAndMortyCharactersById(1);
  const severalCharacters = getRickAndMortyCharactersByIds.apply(null, args);

  return Promise.all([oneCharacter, severalCharacters]);
}; */

// Use an IIFE for top-level Await
/* (() => {
  console.log(`Use an IIFE for top-level Await`);
  let args = [8, 15, 19];
  getRickAndMortyCharactersByIds.apply(null, args);
})(); */

module.exports = {
  getRickAndMortyCharacters,
  getRickAndMortyCharactersById,
  getRickAndMortyCharactersByIds,
};
