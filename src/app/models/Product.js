// import Sequelize, { Model } from 'sequelize'

// const Sequelize = require ("sequelize");
const { Model, DataTypes } = require ("sequelize");


class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                price: DataTypes.INTEGER,
                path: DataTypes.STRING,
                offer: DataTypes.BOOLEAN,
                url: {
                    type: DataTypes.VIRTUAL,
                    get() {
                        return `http://localhost:3001/product-file/${this.path}`
                    },
                },
            },
            {
                sequelize,
            }
        )
        return this
    }
    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
    }
}

module.exports = Product

// export default Product