const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.get("/livros", (req, res) => {
  res.send("Página de livros");
});

app.get("/autores", (req, res) => {
  res.send("Página de autores");
});

app.listen(3000, () => {
  console.log("Aplicativo rodando na porta 3000!");
});
