
exports.up = function(knex) {
  return knex.schema.createTable('movies', function(table) {
    table.increments();
    table.string('title').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
