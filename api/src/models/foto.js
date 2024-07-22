'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  }
  Foto.init({
    originalname:{
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Campo Original não pode ficar vazio.',
        },
      },
    } ,

    filename:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Campo File não pode ficar vazio.',
        },
      },
    },
   
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Foto',
  });
  return Foto;
};