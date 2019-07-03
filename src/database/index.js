/**
 * this file is used to link all application models to project
 */

import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';
/**
 * import yours models here
 */
import User from '../app/models/User';

const models = [User]; // list of all models

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    if (process.env.DB_HOST) {
      console.log('testes2');
      this.connection = new Sequelize(databaseConfig);
      models
        .map(model => model.init(this.connection))
        .map(
          model => model.associate && model.associate(this.connection.models)
        );
    }
  }

  mongo() {
    if (process.env.MONGO_URL) {
      console.log('AQUIIII');
      this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: true,
      });
    }
  }
}

export default new Database();
