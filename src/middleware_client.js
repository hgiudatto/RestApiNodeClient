const {
  getRickAndMortyCharactersByIds,
  getRickAndMortyCharacters,
  getRickAndMortyCharactersById,
  fetchRAMCharacterId,
  fetchCharacterInfo,
  authPage,
  authCourse,
} = require("./middlewares");

// * https://rickandmortyapi.com/documentation

/*
 **
 * node-rest-client
 **
let client = new Client();
client.get("https://rickandmortyapi.com/api/character/2", (data, response) => {
  console.log(
    `Name: ${data.name} - Species: ${data.species} - Gender: ${data.gender} - Status: ${data.status} - Image: ${data.image}`
  );
});
 */

// let args = [8, 15, 19];

// getRickAndMortyCharactersById(1);
// getRickAndMortyCharactersByIds.apply(null, args);

/* (() => {
  console.log(`Promise.all:`);
  Promise.all([
    getRickAndMortyCharactersById(1),
    getRickAndMortyCharactersByIds.apply(null, args),
    getRickAndMortyCharacters(),
  ]);
})(); */

// Promise then/catch
// fetchRAMCharacterId("Space Cruiser").then((response) => console.log(response));

// ! RELEASE
// Async/Await
/* const getSpaceCruiserId = async () => {
  const spaceCruiserId = await fetchRAMCharacterId("Space Cruiser");
  const jsonData = JSON.stringify(spaceCruiserId);
  console.log(`Space Cruiser Id: ${jsonData}`);
};
getSpaceCruiserId(); */

/* const getCharacterInfo = async () => {
  const charInfo = await fetchCharacterInfo([
    "Loggins",
    "The Shapeshiftress",
    "Jamey",
  ]);
  const jsonData = JSON.stringify(charInfo);
  console.log(`Space Cruiser Id: ${jsonData}`);
};
getCharacterInfo(); */

// ! RELEASE
/* const charNames = ["Loggins", "The Shapeshiftress", "Jamey"];

const getCharacterInfo = () => {
  fetchCharacterInfo(["Loggins", "The Shapeshiftress", "Jamey"]).then(
    (charInfo) => {
      console.log(`getCharacterInfo -> ${JSON.stringify(charInfo)}`);
    }
  );
};
getCharacterInfo.apply(null, charNames); */

getRickAndMortyCharacters()
