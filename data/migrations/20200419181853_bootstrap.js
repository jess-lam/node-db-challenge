
exports.up = function(knex) {
  return knex.schema
  .createTable('resource', tbl => {
      tbl.increments();

      tbl
      .string("name", 50)
      .notNullable()
      .unique();

      tbl
      .string("description", 255);

  })
  .createTable('project', tbl => {
    tbl.increments();

    tbl
    .string("name", 100)
    .notNullable()
    .unique();

    tbl
    .string("description", 255);

    tbl
    .boolean("completed")
    .notNullable()
    .defaultTo(false);

})
.createTable('task', tbl => {
    tbl.increments();

    tbl
    .string("description", 255)
    .notNullable()

    tbl
    .string("notes", 255);

    tbl
    .boolean("completed")
    .notNullable()
    .defaultTo(false);

    tbl
    .integer("project_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("project")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE");

})
.createTable('project_resource', tbl => {
    tbl.primary(["project_id", "resource_id"]);

    tbl
    .integer("project_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("project")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE");

    tbl
    .integer("resource_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("resource")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE");

})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project")
    .dropTableIfExists("resource");
};
