const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * app.use(cors({
    origin:'http://meuapp.com'
}));
Colocar o URL do site hospedado Nice!
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Rotas e Recursos

//Métodos HTTP:
/**
 * Get: Buscar/listar uma informação do back-end
 * Post: Criar uma informação no back-end
 * Put: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */