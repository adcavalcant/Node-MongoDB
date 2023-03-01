import express from "express";
const app = express();

const livros = [
  { id: 1, titulo: "Senhor dos Anéis" },
  { id: 2, titulo: "O Hobbit" },
];

const autores = [
  { id: 1, nome: "ad" },
  { id: 2, nome: "cavalcante" },
];

const pensamentos = [
  {
    id: 1,
    conteudo: "Que bom que você veio aqui pô",
    autoria: "Dev Alura",
    modelo: "modelo3",
  },
  {
    id: 3,
    conteudo: "O mais foda",
    autoria: "adcavalcant",
    modelo: "modelo1",
  },
  {
    id: 5,
    conteudo:
      "Vou ficar muito foda em programação em 2023 - stack MEAN (anota ai)",
    autoria: "Ader",
    modelo: "modelo1",
  },
  {
    id: 6,
    conteudo: "Prefico ficar muito rico logo",
    autoria: "Ader",
    modelo: "modelo1",
  },
  {
    id: 7,
    conteudo: "teste",
    autoria: "teste",
    modelo: "modelo2",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Olá, Mundo!");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/autores", (req, res) => {
  res.status(200).json(autores);
});

app.get("/pensamentos", (req, res) => {
  res.status(200).json(pensamentos);
});

app.listen(3000, () => {
  console.log("Aplicativo rodando na porta 3000...");
});

export default app;
