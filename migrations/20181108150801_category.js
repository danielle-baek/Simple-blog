exports.up = knex =>
  knex.schema.createTable('category', t => {
    t.increments().primary()
    t.string('name')
    t.string('colour')
    t.boolean('isImage').defaultTo(false)
    t.boolean('isText').defaultTo(false)
  })

exports.down = knex =>
  knex.schema.dropTable('category')
