const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findTasks,
    // findResources,
    add
    // addTasks,
    // addResources,
}

function find() {
    return db('projects');
}

//works on Postman 

function findById(id) {
    return db('projects')
    .where({id})
    .first();
}

//works on Postman for get

function add(projectData) {
    return db('projects').insert(projectData);
}

// function addStep(id)

//works on Postman

function findTasks(id) {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.*', 'p.name', 'p.description')
    .where({ project_id: id })
}

//works on Postman


// function update(changes, id) {
//     return db("schemes")
//     .where({id})
//     .update(changes)
//     .then((count) => {
//         return findById(id);
//     });
// }

//works on Postman

// function remove(id) {
//     return db('schemes')
//     .where({id})
//     .del()
// }
//works on Postman