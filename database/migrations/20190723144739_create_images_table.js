
exports.up = function(knex) {
  return knex.schema.createTable('images', function(table) {
    table.increments('id').primary();
    table.integer('movie_id');
    table.string('file_path').notNullable();
    table.foreign('movie_id').references('id').inTable('movies')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('images');
};
