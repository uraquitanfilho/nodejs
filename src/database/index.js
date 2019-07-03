/**
 * this file is used to link all application models to project
 */

import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';
/**
 * import yours models here
 */

const models = []; // list of all models

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
