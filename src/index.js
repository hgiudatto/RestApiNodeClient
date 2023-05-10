const express = require("express");
const cors = require("cors");
const http = require("http");

const {
  authPage,
  authCourse,
  getRickAndMortyCharacters,
} = require("./middlewares");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: "Well done!" });
});

app.get("/test", (req, res) => {
  res.send({ status: "Well done!" });
});

app.get("/home", (req, res) => {
  let hp = "HOME_PAGE";
  // res.json({ hp });
  res.send("<div><h3>HOME_PAGE</h3></div>");
  res.json(getRickAndMortyCharacters());
});

app.get("/redirectResult", (req, res) => {
  res.redirect(302, "/home");
  console.log(`redirectResult: `, res.json());
});

app.get("/characters", (req, res) => {
  const rickAndMortyChs = getRickAndMortyCharacters();
  res.json(JSON.stringify(rickAndMortyChs));
});

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
  res.json({ pedro: 100, paulo: 95, leo: 34, colin: 67 });
});

app.get("/course/:number", authCourse, (req, res) => {
  const courseNumber = req.params.number;
  res.json(`YOU HAVE PERMISSION TO SEE COURSE ${courseNumber}`);
});

app.get("/rapidapi_login_intersite", (req, res) => {
  // res.send({ status: "Well done!" });
  res.statusCode = 302;
  /* res.send(
    "<html><header>Redirected</header><body><h3>Successfully redirected!</h3></body></html>"
  ); */
  res.redirect(
    "https://rapidapi.com/studio/api_8c0a94bf-5629-4d01-8128-611cb3c1a100/client/89a628ee-51f8-4517-9035-4e6a0a05c606"
  );
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
