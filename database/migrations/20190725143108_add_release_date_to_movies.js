
exports.up = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.string("release_date").notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.dropColumn("release_date");
  });
};
