// import Sequelize, { Model } from 'sequelize'
// import bcrypt from 'bcrypt'

// const Sequelize = require ("sequelize");
const { Model, DataTypes } = require ("sequelize");
const bcrypt = require ("bcrypt");


class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.VIRTUAL,
                password_hash: DataTypes.STRING,
                admin: DataTypes.BOOLEAN,
            },
            {
                sequelize,
            }
        )

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        })

        return this
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}

module.exports = User

// export default User

