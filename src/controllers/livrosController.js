import livros from "../models/Livro.js";

class LivrosController {
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

  static cadastrarLivro = async (req, res) => {
    try {
      const livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao cadastrar livro - ${err}` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const livro = await livros.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }
      res.status(200).json(livro.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao editar livro - ${err}` });
    }
  };

  static excluirLivro = async (req, res) => {
    try {
      const livro = await livros.findByIdAndDelete(req.params.id);
      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }
      res.status(200).json({ message: "Livro excluído com sucesso." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao excluir livro - ${err}` });
    }
  };
}

export default LivrosController;
