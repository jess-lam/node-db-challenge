const db = require('../data/db-config');

module.exports = {
    find,
    findResourceTable,
    findById,
    findTasks,
    findResources,
    add,
    addTasks,
    addResources,
}

function find() {
    return db('project');
}

function findResourceTable() {
    return db('resource');
}

//works on Postman 

function findById(id) {
    return db('project')
    .where({id})
    .first();
}

//works on Postman for get

// function addStep(id)

//works on Postman

function findTasks(id) {
    return db('task as t')
    .join('project as p', 'p.id', 't.project_id')
    .select('t.*', 'p.name', 'p.description')
    .where({ project_id: id })
}

//works on Postman

function findResources(id) {
    return db('project_resource')
    .join('resource as r', 'r.id', 'project_resource.project_id')
    .select('r.*')
    .where({ project_id: id })
}

function add(projectData) {
    return db('project').insert(projectData);
}

function addTasks(task) {
    return db('task')
      .insert(task)
  }

  function addResources(resource) {
    return db('resource')
      .insert(resource)
  }

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