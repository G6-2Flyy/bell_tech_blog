const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/connection.js');

class User extends Model {
    static validatePassword(newPass) {
        return bcrypt.compareSync(newPass, this.password)
    } 
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    }, 
     username: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
     },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 15] 
        }
     }
  },
  {
    hooks: {
        beforeCreate: async (newUser) => {
            newUser.password = await bcrypt.hash(newUser.password, 10)
            return newUser
        },
        beforeUpdate: async (newUser) => {
            newUser.password = await bcrypt.hash(newUser.password, 10)
            return newUser
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;