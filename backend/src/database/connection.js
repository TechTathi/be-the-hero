const knex = require('knex'); /* Importar a biblioteca do banco de dados */
const configuration = require('../../knexfile');

const connection = knex(configuration.development); /* Informar em qual ambiente a conexão vai ser feita */

module.exports = connection; /* Exportar a conexão */