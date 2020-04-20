
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Jane', description: 'sprint', completed: false},
        {name: 'Tom', description: 'module', completed: false},
        {name: 'Sam', description: 'sprint', completed: true},
        {name: 'Susan', description: 'sprint', completed: false},
        {name: 'Jessica', description: 'module', completed: true},
        {name: 'Hayden', description: 'module', completed: false},
        {name: 'Hanna', description: 'sprint', completed: false},
        {name: 'Loren', description: 'sprint', completed: true},
        {name: 'Evan', description: 'module', completed: false}
      ]);
    });
};
