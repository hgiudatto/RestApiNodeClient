const express = require("express");
const { authPage, authCourse, getRickAndMortyCharacters } = require("./middlewares");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.json("HOME_PAGE");
});

app.get('/characters', (req, res) => {
  const rickAndMortyChs = getRickAndMortyCharacters()
  res.json(JSON.stringify(rickAndMortyChs))
})

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
  res.json({ pedro: 100, paulo: 95, leo: 34, colin: 67 });
});

app.get("/course/:number", authCourse, (req, res) => {
  const courseNumber = req.params.number;
  res.json(`YOU HAVE PERMISSION TO SEE COURSE ${courseNumber}`);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
