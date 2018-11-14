exports.up = knex =>
  knex.schema.createTable('category', t => {
    t.increments().primary()
    t.string('name')
    t.string('colour')
  })

exports.down = knex =>
  knex.schema.dropTable('category')
