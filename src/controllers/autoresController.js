import autores from "../models/Autor.js";

class AutoresController {
  static listarAutores = (req, res) => {
    autores
      .find()
      .then((autores) => {
        res.status(200).json(autores);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar autores." });
      });
  };

  static listarAutorPorId = (req, res) => {
    const { id } = req.params;
    autores
      .findById(id)
      .then((autor) => {
        if (!autor) {
          return res.status(404).json({ message: `Autor ${id} não encontrado.` });
        }
        res.status(200).json(autor);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Erro ao buscar autor." });
      });
  };

  static cadastrarAutor = async (req, res) => {
    try {
      const autor = new autores(req.body);
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao cadastrar autor - ${err}` });
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const autor = await autores.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado." });
      }
      res.status(200).json(autor.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao editar autor - ${err}` });
    }
  };

  static excluirAutor = async (req, res) => {
    try {
      const autor = await autores.findByIdAndDelete(req.params.id);
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado." });
      }
      res.status(200).json({ message: "Autor excluído com sucesso." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: `Erro ao excluir autor - ${err}` });
    }
  };
}

export default AutoresController;
