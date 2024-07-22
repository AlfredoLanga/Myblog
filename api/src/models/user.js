'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Roles, { foreignKey: 'role_id' });
      User.hasMany(models.Posts, { foreignKey: 'user_id' });
      User.hasMany(models.comments, { foreignKey: 'user_id' });
      User.hasMany(models.Foto, {foreignKey:'user_id'});
    }
  }
  User.init({
    name: {
     type: DataTypes.STRING,
     validate:{
      len:{
        args: [4, 200],
        msg: 'O nome deve ter pelomenos 4 caracteres'
      }
     }
    },
    email:{
      type: DataTypes.STRING,
      unique: {
        msg: 'Email Ja Existe'
      },
      validate:{
        isEmail:{
          msg: 'Email Ivalido'
        },
      }
    },
    profile_pic: DataTypes.STRING,
    password:{
      type:DataTypes.STRING,
     
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};