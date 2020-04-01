const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors()); /** Limita as aplicaçõs frontend que podem acessar o nosso backend */
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota  / Recurso 
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no bakc-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetro:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Rout Params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo sa requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Banco de dados:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  * Driver: SELECT * FROM users 
  * Query Builder: table('users').select('*').where()
  */








