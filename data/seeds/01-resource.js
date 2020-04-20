
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: "Jane", description: 'computer'},
        {name: "Tom", description: 'textbook'},
        {name: "Sam", description: 'meeting room'},
        {name: "Susan", description: 'meeting room'},
        {name: "Jessica", description: 'wikipedia'},
        {name: "Hayden", description: 'scissors'},
        {name: "Hanna", description: 'glue'},
        {name: "Loren", description: 'powerpoint'},
        {name: "Evan", description: 'graph paper'}
      ]);
    });
};
