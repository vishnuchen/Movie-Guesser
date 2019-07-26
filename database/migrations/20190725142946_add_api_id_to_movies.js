
exports.up = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.integer("api_id").notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.dropColumn('api_id');
  });
};
