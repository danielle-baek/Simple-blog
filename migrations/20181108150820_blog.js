exports.up = knex =>
  knex.schema.createTable('blog', t => {
    t.increments().primary()
    t.integer('cat_id')
      .references('category.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    t.string('keyword')
    t.string('content')
    t.string('image')
    t.timestamps()
  })

exports.down = knex =>
  knex.schema.dropTable('blog')
