import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: sequelize.STRING,
                email: sequelize.STRING,
                password_hash: sequelize.STRING,
                admin: sequelize.BOOLEAN,
            }, {
            Sequelize,
        }
        )
    }
};

export default User