import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivrosController.listarLivros)
  //obs: as rotas devem estar listadas da mais específica para a menos específica, se não, pode dar erro.
  //a rota abaixo /busca é bem específica, por isso ela fica acima da /livros/:id
  .get("/livros/busca", LivrosController.listarLivroPorEditora)
  .get("/livros/:id", LivrosController.listarLivroPorId)
  .post("/livros", LivrosController.cadastrarLivro)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .delete("/livros/:id", LivrosController.excluirLivro);
export default router;
