exports.seed = knex =>
  knex('blog').del()
    .then(() => {
      return knex('blog').insert([
        {id: 1, cat_id: '1', keyword: 'work', content: 'i worked'},
        {id: 2, cat_id: '2', keyword: 'mindfulness', content: 'I meditated'},
        {id: 3, cat_id: '3', keyword: 'walk', content: 'I walked. it was fun'}
      ])
    })
