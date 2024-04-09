// const Sequelize = require ("sequelize");
const { Model, DataTypes } = require ("sequelize");

// import Sequelize, { Model } from 'sequelize'
class Category extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                path: DataTypes.STRING,
                url: {
                    type: DataTypes.VIRTUAL,
                    get() {
                        return `https://burger-good-ea18.up.railway.app/category-file/${this.path}`
                    },
                },
            },
            {
                sequelize,
            }
        )
        return this
    }
}

module.exports = Category

// export default Category