const Sequelize = require("sequelize");
const mongoose = require("mongoose");
const User = require("../app/models/User");
const Product = require("../app/models/Product");
const Category = require("../app/models/Category");

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(
            'postgresql://postgres:hXhwvDsmeJmhOSVBeUvzExqJtYJetTKL@viaduct.proxy.rlwy.net:34337/railway'
        )
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )

            
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:bpdgeufrShobPuWZfqZNKNpAvbowgkir@roundhouse.proxy.rlwy.net:34728',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    }
}

module.exports = new Database()  