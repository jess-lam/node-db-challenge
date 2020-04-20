
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: "write something", notes: 'blah', completed: false, project_id: 1},
        {description: "then write some more", notes: 'blah', completed: false, project_id: 2},
        {description: "make a salad", notes: 'hello', completed: false, project_id: 3},
        {description: "go for a run", notes: 'bored', completed: false, project_id: 4},
        {description: "walk the dog", notes: 'why', completed: false, project_id: 5},
        {description: "paint the sky", notes: 'am', completed: false, project_id: 6},
        {description: "glue beads", notes: 'i', completed: false, project_id: 7},
        {description: "cut paper", notes: 'doing', completed: false, project_id: 8},
        {description: "write in journal", notes: 'this', completed: false, project_id: 9},
      ]);
    });
};
