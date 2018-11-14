exports.seed = knex =>
  knex('blog').del()
    .then(() => {
      return knex('blog').insert([
        {id: 1, cat_id: '', keyword: '', content: '', created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {id: 2, cat_id: '', keyword: '', content: '', created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {id: 3, cat_id: '', keyword: '', content: '', created_at: knex.fn.now(), updated_at: knex.fn.now()}
      ])
    })
