'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },

      profile_pic: {
        type: Sequelize.STRING
      },

      password: {
        type: Sequelize.STRING,
        validate:{
          len:{
            args: [4, 24],
            msg: 'Palavra passe deve ter no minimo 4 caracteres'
          }
        }
      },

      role_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Roles',
          key:'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};