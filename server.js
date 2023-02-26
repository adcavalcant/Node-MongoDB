const http = require("http");
const port = 3000;

const routes = {
  "/": "Tá funcionandooooo...",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores",
  "/editoras": "Página de editoras",
  "/sobre": "Informação sobre o projeto"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
