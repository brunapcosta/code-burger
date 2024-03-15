// import Sequelize from "sequelize"
// import mongoose from "mongoose"

// import ConfigDatabase from "../config/database"

// import User from "../app/models/User"
// import Product from "../app/models/Product"
// import Category from "../app/models/Category"

const Sequelize = require ("sequelize");
const mongoose = require ("mongoose");
const ConfigDatabase = require ("../config/database")
const User = require ("../app/models/User");
const Product = require ("../app/models/Product");
const Category = require ("../app/models/Category");

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(ConfigDatabase)
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            // 'mongodb://mongo:qfLKyZUyCooadPNhzKyzuFRXzFhsDBiT@monorail.proxy.rlwy.net:36656',
            'mongodb://localhost:27017/codeburger',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    }
}

module.exports = new Database()  

//export default Database