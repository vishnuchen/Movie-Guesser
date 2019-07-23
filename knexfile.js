// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      "user": "movies",
      "password": "movies",
      "database": "movieguesser",
      "hostname": "localhost",
      "port": 5432,
      //"ssl": true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },

};
