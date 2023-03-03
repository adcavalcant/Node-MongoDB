import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());

// const livros = [
//   { id: 1, titulo: "Senhor dos Anéis" },
//   { id: 2, titulo: "O Hobbit" },
// ];

app.get("/", (req, res) => {
  res.send("Tá funcionando a API ;)");
});

app.get("/livros/:id", (req, res) => {
  
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

function buscaLivro(id) {
  return livros.find((livro) => livro.id == id);
}

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} excluído com sucesso!`);
});

export default app;
