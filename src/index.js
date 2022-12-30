import pkg, { getRickAndMortyCharactersByIds } from "./server.cjs";
const { getRickAndMortyCharacters, getRickAndMortyCharactersById } = pkg;

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

let args = [8, 15, 19];

// getRickAndMortyCharactersById(1);
// getRickAndMortyCharactersByIds.apply(null, args);

(() => {
  console.log(`Promise.all:`);
  Promise.all([
    getRickAndMortyCharactersById(1),
    getRickAndMortyCharactersByIds.apply(null, args),
    getRickAndMortyCharacters(),
  ]);
})();
