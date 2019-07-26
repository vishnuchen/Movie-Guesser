
exports.up = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.specificType("genres", "TEXT[]").notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.dropColumn('genres');
  });
};