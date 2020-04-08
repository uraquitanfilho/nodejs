import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

const normalizedPath = require('path').join(
  __dirname,
  '../app/models/relational'
);

const models = [];
require('fs')
  .readdirSync(normalizedPath)
  .forEach(function (file) {
    require(`../app/models/relational/${file}`);
    models.push(require(`../app/models/relational/${file}`).default);
  });

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    if (process.env.DB_HOST) {
      this.connection = new Sequelize(databaseConfig);
      models
        .map((model) => model.init(this.connection))
        .map(
          (model) => model.associate && model.associate(this.connection.models)
        );
    }
  }

  mongo() {
    if (process.env.MONGO_URL) {
      // console.log('AQUIIII');
      this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      });
    }
  }
}

export default new Database();
