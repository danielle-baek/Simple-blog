exports.seed = knex =>
  knex('blog').del()
    .then(() => {
      return knex('blog').insert([
        {id: 1, cat_id: '1', keyword: 'work', content: 'i worked', created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {id: 2, cat_id: '2', keyword: 'mindfulness', content: 'I meditated', created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {id: 3, cat_id: '3', keyword: 'walk', content: 'I walked. it was fun', created_at: knex.fn.now(), updated_at: knex.fn.now()}
      ])
    })
