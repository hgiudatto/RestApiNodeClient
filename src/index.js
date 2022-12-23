const Client = require("node-rest-client").Client;

let client = new Client();

client.get("https://rickandmortyapi.com/api/character/2", (data, response) => {
  console.log(
    `Name: ${data.name} - Species: ${data.species} - Gender: ${data.gender} - Status: ${data.status} - Image: ${data.image}`
  );
});

// TODO: https://rickandmortyapi.com/documentation
// TODO: Testear GET con https://github.com/afuh/rick-and-morty-api-node#get-by-id
// TODO: Continuar: https://medium.com/nerd-for-tech/your-first-nodejs-rest-api-client-59467659ab99
