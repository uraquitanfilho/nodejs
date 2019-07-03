require('dotenv/config');
/**
 * we need to use the old import form using require because this file will be
 * access by command line and by project. And command line only allow old form
 */

// support to: mysql, mariadb, sqlite, postgresql, mssql
// to use postgres needs: yarn add pg pg-hstore
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '',
  database: '',
  define: {
    timestamps: true,
    underscored: true, // to allow table_name format
    underscoredAll: true,
  },
};
