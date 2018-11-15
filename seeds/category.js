exports.seed = knex =>
  knex('category').del()
    .then(() => {
      return knex('category').insert([
        {id: 1, name: 'My Day', colour: '#f7B2B7'},
        {id: 2, name: 'Meditation', colour: '#BBC2E2'},
        {id: 3, name: 'Happy Things', colour: '#A9E5BB'},
        {id: 4, name: 'Image', colour: '#A9E5BB'}
      ])
    })
