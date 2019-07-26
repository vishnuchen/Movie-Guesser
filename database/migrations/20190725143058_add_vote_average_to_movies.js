
exports.up = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.float("vote_average").notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.dropColumn("vote_average");
  });
};
