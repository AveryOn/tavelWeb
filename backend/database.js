const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db'
  });

const User = sequelize.define('Users', {
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})
module.exports = {
    sequelize,
    User
}
