// import ConfigDatabase from "../config/database"
// import Sequelize from "sequelize"
// import mongoose from "mongoose"

// import User from "../app/models/User.js"
// import Product from "../app/models/Product.js"
// import Category from "../app/models/Category.js"

// const ConfigDatabase = require ("../config/database")

const Sequelize = require ("sequelize");
const mongoose = require ("mongoose");
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
        this.connection = new Sequelize(
            'postgresql://postgres:hXhwvDsmeJmhOSVBeUvzExqJtYJetTKL@viaduct.proxy.rlwy.net:34337railway'
        )
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )
        // models.forEach((model) => model.init(this.connection))

            
    }

    // associate() {
    //     models.forEach((model) => {
    //         if (model.associate) {
    //             model.associate(this.connection.models)
    //         }
    //     })
    // }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:bpdgeufrShobPuWZfqZNKNpAvbowgkir@roundhouse.proxy.rlwy.net:34728',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    }
}

// const database = new Database();
// export default database;

module.exports = new Database()  

// export default new Database()