import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import pensamentos from "./pensamentosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Tá funcionando a API ;) rs" });
  });

  app.use(express.json(), livros);
  app.use(express.json(), autores);
  app.use(express.json(), pensamentos);
};

export default routes;
