import http from 'node:http';

//import fastfy from 'fastfy';


//imagine que tenhamos um rota para criar um usuário(nome, email,senha)
const server = http.createServer((request, response) => {
  return response.end('Hello World, Hallan Christian 123');
});

server.listen(3333);

// CommonJS => require
// Agora usa o ESModules = import/export
