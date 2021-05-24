const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPass) {
    return bcrypt.compareSync(loginPass, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER(7),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        len: [2, 10],
      },
    },
    email: {
      type: DataTypes.STRING(75),
      allowNull: false,
      isUnique: true,
      // validate: {
      //   isEmail: true,
      //   msg:'Valid and unique email required'
      // }
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },  
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
