import livros from "../models/Livro.js";

class livrosController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .then((livros) => {
        res.status(200).json(livros);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar livros." });
      });
  };
}

export default livrosController;
