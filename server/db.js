const knex = require('knex')
const config = require('../knexfile.js')['development']
const connection = knex(config)

module.exports = {
  getLogs,
  addLog,
  getCategories
}
function getLogs (db = connection) {
  return db('blog')
}

function addLog (log, db = connection) {
  return db('blog').insert(log)
}

function getCategories (db = connection) {
  return db('category')
}
