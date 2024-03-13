import Sequelize from "sequelize"
import mongoose from "mongoose"
import ConfigDatabase from "../config/database"

import User from "../app/models/User"
import Product from "../app/models/Product"
import Category from "../app/models/Category"

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:LRhcpxNPHthkmlgAdfMfFTxsbNDCmQvP@viaduct.proxy.rlwy.net:22431/railway')
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:qfLKyZUyCooadPNhzKyzuFRXzFhsDBiT@monorail.proxy.rlwy.net:36656',
            // 'mongodb://localhost:27017/codeburger',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    }
}

export default new Database()  