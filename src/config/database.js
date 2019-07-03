require('dotenv/config');
/**
 * we need to use the old import form using require because this file will be
 * access by command line and by project. And command line only allow old form
 */

// support to: mysql, mariadb, sqlite, postgresql, mssql
// to use postgres needs: yarn add pg pg-hstore
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // to allow table_name format
    underscoredAll: true,
  },
};
