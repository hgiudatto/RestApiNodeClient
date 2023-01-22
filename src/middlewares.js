const { getCharacters, getCharacter } = require("rickmortyapi");
var Client = require("node-rest-client").Client;

const getRickAndMortyCharacters = async () => {
  const response = await getCharacters({ page: 1 });
  response.data.results.map((char) => {
    /* console.log(
      `rickmortyapi example: Name: ${char.name} - Species: ${char.species} - Gender: ${char.gender} - Status: ${char.status} - Image: ${char.image}`
    ); */
    console.log([{
      name: char.name,
      status: char.status,
      gender: char.gender,
      image: char.image,
      url: char.url,
      created: char.created
    }]);
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

// Function to fetch name info of a RickAndMorty character.
const fetchRAMCharacterId = async (charName) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching character ${charName} id`);
    let client = new Client();
    client.get(
      `https://rickandmortyapi.com/api/character/?name=${charName}`,
      (data, response) => {
        if (response && response.statusCode === 200) {
          const jsonData = JSON.stringify(data.results);
          const resultsJSON = JSON.parse(jsonData);
          return resolve({ charId: resultsJSON[0].id });
        } else {
          console.log(`ERROR: failed to query ${charName}'s id.`);
          return resolve({});
        }
      }
    );
  });
};

// TODO: fetchRAMCharacterId version rickmortyapi

// Function to fetch RickAndMorty info of a character.
const fetchRickAndMortyInfo = async (charName) => {
  console.log(`Fetching ${charName} info.`);

  const characterInfo = await getCharacters({ name: `${charName}` });
  console.log(
    `fetchRickAndMortyInfo -> ${charName} info: ${JSON.stringify({
      name: characterInfo.data.results[0].name,
      species: characterInfo.data.results[0].species,
      gender: characterInfo.data.results[0].gender,
      status: characterInfo.data.results[0].status,
      image: characterInfo.data.results[0].image,
    })}`
  );
  return {
    name: characterInfo.data.results[0].name,
    species: characterInfo.data.results[0].species,
    gender: characterInfo.data.results[0].gender,
    status: characterInfo.data.results[0].status,
    image: characterInfo.data.results[0].image,
  };

  // TODO 20230105: Usar https://github.com/afuh/rick-and-morty-api-node filtrando por character name en lugar de client.get()
};

// Iterates all characters and returns their RickAndMorty info.
const fetchCharacterInfo = (characterNames) => {
  console.log(`characterNames: `, characterNames);
  const requests = characterNames.map((charName) => {
    console.log(`Searching for character: ${charName}`);
    const url = `https://rickandmortyapi.com/api/character/?name=${charName}`;
    return fetchRickAndMortyInfo(charName).then((a) => {
      return a;
    });
  });
  return Promise.all(requests);
};

const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;

    if (permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You dont have permission!");
    }
  };
};

const authCourse = (req, res, next) => {
  const courseNumber = parseInt(req.params.number);
  if (req.body.courses.includes(courseNumber)) {
    next();
  } else {
    return res.status(401).json("You dont have access to this course!");
  }
};

module.exports = {
  getRickAndMortyCharacters,
  getRickAndMortyCharactersById,
  getRickAndMortyCharactersByIds,
  fetchRAMCharacterId,
  fetchCharacterInfo,
  authPage,
  authCourse,
};
