vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# \q
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# CREATE DATABASE movieguesser;
CREATE DATABASE
vishnu=# \c movieguesser;
You are now connected to database "movieguesser" as user "vishnu".
movieguesser=# CREATE TABLE movies (git
movieguesser(# id BIGSERIAL PRIMARY KEY,
movieguesser(# title VARCHAR(50)
movieguesser(# );
CREATE TABLE
movieguesser=# CREATE TABLE images (
movieguesser(# );
CREATE TABLE
movieguesser=# DROP TABLE movies
movieguesser-# ;
DROP TABLE
movieguesser=# DROP TABLE images
;
DROP TABLE
movieguesser=# /q
movieguesser-# \q
vishnu@Vishu:~/lighthouse/finalProject$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
vishnu@Vishu:~/lighthouse/finalProject$ git checkout -b
error: switch `b' requires a value
vishnu@Vishu:~/lighthouse/finalProject$ git checkout -b feature/knex-database
M       package-lock.json
Switched to a new branch 'feature/knex-database'
vishnu@Vishu:~/lighthouse/finalProject$ git status
On branch feature/knex-database
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# /l
vishnu-# \l
                                   List of databases
     Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
--------------+----------+----------+-------------+-------------+-----------------------
 labber       | labber   | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 movieguesser | vishnu   | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 postgres     | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 template0    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 template1    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 vishnu       | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
(6 rows)

vishnu-# DROP DATABASE labber
;
ERROR:  syntax error at or near "/"
LINE 1: /l
        ^
vishnu=# DROP DATABASE labber;
DROP DATABASE
vishnu=# \q
vishnu@Vishu:~/lighthouse/finalProject$ $ npm init
$: command not found
vishnu@Vishu:~/lighthouse/finalProject$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (movie-guesser2) 
version: (0.1.0) 
entry point: (server.js) 
git repository: (https://github.com/JingfZhang/movie-guesser.git) 
keywords: 
author: 
license: (ISC) 
About to write to /home/vishnu/lighthouse/finalProject/package.json:

{
  "name": "movie-guesser2",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.19",
    "@fortawesome/free-solid-svg-icons": "^5.9.0",
    "@fortawesome/react-fontawesome": "^0.1.4",
    "react": "^16.8.6",
    "react-countdown-now": "^2.1.1",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.1",
    "react-scripts": "0.9.5"
  },
  "devDependencies": {
    "@fortawesome/fontawesome-free": "^5.9.0",
    "css-loader": "0.26.1",
    "node-sass": "^4.5.0",
    "sass-loader": "6.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "description": "Perry test",
  "main": "server.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JingfZhang/movie-guesser.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/JingfZhang/movie-guesser/issues"
  },
  "homepage": "https://github.com/JingfZhang/movie-guesser#readme"
}


Is this ok? (yes) 
vishnu@Vishu:~/lighthouse/finalProject$ npm install knex -g
/home/vishnu/.nvm/versions/node/v8.9.4/bin/knex -> /home/vishnu/.nvm/versions/node/v8.9.4/lib/node_modules/knex/bin/cli.js
+ knex@0.19.0
added 160 packages in 5.049s
vishnu@Vishu:~/lighthouse/finalProject$ $ npm install knex --save
$: command not found
vishnu@Vishu:~/lighthouse/finalProject$ npm install knex --save
npm WARN sass-loader@6.0.0 requires a peer of webpack@^2.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.0.17 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ knex@0.19.0
added 66 packages in 7.292s
vishnu@Vishu:~/lighthouse/finalProject$ npm install pg --save
npm WARN sass-loader@6.0.0 requires a peer of webpack@^2.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.0.17 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ pg@7.11.0
added 14 packages in 6.27s
vishnu@Vishu:~/lighthouse/finalProject$ knex init
Created ./knexfile.js
vishnu@Vishu:~/lighthouse/finalProject$ mkdir database
vishnu@Vishu:~/lighthouse/finalProject$ mkdir database/migrations
vishnu@Vishu:~/lighthouse/finalProject$ mkdir database/seeds
vishnu@Vishu:~/lighthouse/finalProject$ touch database/knex.js
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# \l
                                   List of databases
     Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
--------------+----------+----------+-------------+-------------+-----------------------
 movieguesser | vishnu   | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 postgres     | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 template0    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 template1    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 vishnu       | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
(5 rows)

vishnu=# \q
vishnu@Vishu:~/lighthouse/finalProject$ knex migrate:make create_movies_table
Using environment: development
Using environment: development
Using environment: development
Created Migration: /home/vishnu/lighthouse/finalProject/database/migrations/20190722201749_create_movies_table.js
vishnu@Vishu:~/lighthouse/finalProject$ knex migrate:latest
Using environment: development
error: password authentication failed for user "vishnu"
    at Connection.parseE (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:602:11)
    at Connection.parseMessage (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:399:19)
    at Socket.<anonymous> (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:121:22)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
    at Socket.Readable.push (_stream_readable.js:208:10)
    at TCP.onread (net.js:594:20)
vishnu@Vishu:~/lighthouse/finalProject$ knex migrate:latest
Using environment: development
error: password authentication failed for user "vishnu"
    at Connection.parseE (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:602:11)
    at Connection.parseMessage (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:399:19)
    at Socket.<anonymous> (/home/vishnu/lighthouse/finalProject/node_modules/pg/lib/connection.js:121:22)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
    at Socket.Readable.push (_stream_readable.js:208:10)
    at TCP.onread (net.js:594:20)
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# \q
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# CREATE USER movies WITH ENCRYPTED PASSWORD 'movies';
CREATE ROLE
vishnu=# GRANT ALL PRIVILEGES ON DATABASE movieguesser TO movies;
GRANT
vishnu=# \Q
Invalid command \Q. Try \? for help.
vishnu=# \q
vishnu@Vishu:~/lighthouse/finalProject$ knex migrate:latest
Using environment: development
Batch 1 run: 1 migrations
vishnu@Vishu:~/lighthouse/finalProject$ psql
psql (11.4 (Ubuntu 11.4-0ubuntu0.19.04.1))
Type "help" for help.

vishnu=# \l
                                   List of databases
     Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
--------------+----------+----------+-------------+-------------+-----------------------
 movieguesser | vishnu   | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =Tc/vishnu           +
              |          |          |             |             | vishnu=CTc/vishnu    +
              |          |          |             |             | movies=CTc/vishnu
 postgres     | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 template0    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 template1    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 vishnu       | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
(5 rows)

vishnu=# use movieguesser;
ERROR:  syntax error at or near "use"
LINE 1: use movieguesser;
        ^
vishnu=# USE movieguesser;
ERROR:  syntax error at or near "USE"
LINE 1: USE movieguesser;
        ^
vishnu=# \connect movieguesser;
You are now connected to database "movieguesser" as user "vishnu".
movieguesser=# \l
                                   List of databases
     Name     |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
--------------+----------+----------+-------------+-------------+-----------------------
 movieguesser | vishnu   | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =Tc/vishnu           +
              |          |          |             |             | vishnu=CTc/vishnu    +
              |          |          |             |             | movies=CTc/vishnu
 postgres     | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
 template0    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 template1    | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | =c/postgres          +
              |          |          |             |             | postgres=CTc/postgres
 vishnu       | postgres | UTF8     | en_CA.UTF-8 | en_CA.UTF-8 | 
(5 rows)

movieguesser=# \dt
               List of relations
 Schema |         Name         | Type  | Owner  
--------+----------------------+-------+--------
 public | knex_migrations      | table | movies
 public | knex_migrations_lock | table | movies
 public | movies               | table | movies
(3 rows)

movieguesser=# SELECT * FROM knex_migrations;
 id |                 name                  | batch |       migration_time       
----+---------------------------------------+-------+----------------------------
  1 | 20190722201749_create_movies_table.js |     1 | 2019-07-22 20:38:11.353-04
(1 row)

movieguesser=# 